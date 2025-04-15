import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import KAWS from './KAWS';

import llamadoimg from '../Servicios/llamadoimg';

function SubirImagen() {
  const [img, setImg] = useState();
  const [imgGet, setImgGet] = useState([]);

  useEffect(() => {
    async function DataImage() {
      const datos = await llamadoimg.getImage();
      setImgGet(datos);
      console.log(datos);
    }
    DataImage();
  }, []);

  const S3_BUCKET = 'bucketbyronimg';
  const REGION = 'us-east-2';

  const s3 = new KAWS()
  
  const uploadImageToS3 = async (file) => {
    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
      ContentType: file.type,
    };

    return s3.upload(params).promise();
  };

  function carga(evento) {
    setImg(evento.target.files[0]);
  }

  const Subir = async () => {
    let imagenUrl = '';
    console.log(img);
    if (img) {
      try {
        const result = await uploadImageToS3(img);
        imagenUrl = result.Location;
        console.log(imagenUrl);
      } catch (error) {
        console.error('Error al subir la imagen a S3:', error);
        throw new Error('No se pudo subir la imagen a S3');
      }
    }

    llamadoimg.postImage(imagenUrl);
  };

  return (
    <div>
      <p><strong>Foto de perfil <br />
      OPCIONAL</strong></p>
      <input onChange={carga} accept="image/*,application/pdf" type="file" />
      <button onClick={Subir}>Subir</button>
      {imgGet.map((img) => (
        <img src={img.url} alt="" />
      ))}
    </div>
  );
}

export default SubirImagen;