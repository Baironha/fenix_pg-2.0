async function postImage(image) {
    try {
        
        const userData = { 

            url: image
        
        };



        const response = await fetch("http://localhost:3001/image", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}



async function getImage() {
    try {
        



        const response = await fetch("http://localhost:3001/image", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default {postImage,getImage}