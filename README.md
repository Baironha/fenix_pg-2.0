puedes ingresar a las paginas de admin con el siguiente usuario
name:Bairon Horna
password:12345


Si necesitas levantar la pagina ingresa a la ruta donde almacenas e proyecto y luego:
\fenix_pg 2.0\fenix_pg-2.0\Fenix_Page>
y por ultimo ingresa el comando en terminal: 
npm run dev
 para ingresar direcatmente al analisis de datos en el front-ent usa:
http://localhost:5173/AnalisisDt

si necesitas levantar el db.json ingresa a la ruta donde almacenas el proyecto y luego:
\fenix_pg 2.0\fenix_pg-2.0\Fenix_Page>
y por ultimo ingresa el comando en terminal:
json-server --watch db.json --port 3001




si necesitas levantar el api de los graficos y analisis de datos, ingresa a la ruta donde tienes el proyecto y luego:
\fenix_pg 2.0\fenix_pg-2.0\Fenix_Page\src\ApiGraficos> 
y por ultimo ingresa este comando en terminal
python ApiGraficosEda.py 

una vez levantado podras ingresar al grafico directamente con este link
http://192.168.100.44:5000/Prediccion_vs_Valores_Reales.html


el proyecto conteineriza el modelo de MLlisto para el deployment
usa AWS y db.json para el almacenamiento de datos

las claves del bucket estan en el componente KAWS.jsx y k_aws.py

en 
