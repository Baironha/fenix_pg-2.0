async function getUsers() {
    try {
        const response = await fetch('http://localhost:3001/Usuarios', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export { getUsers };

//////////LLAMADO POST//////////

async function postUsers(nombre,email,password,direccion,foto) {
    try {
        
        const userData = { 
            rol: "Usuario",
            nombre,
            email,
            password,
            direccion,
            foto
        
        };



        const response = await fetch("http://localhost:3001/Usuarios", {
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

export{postUsers}

//////////////LLAMADO UPDATE/////////////


async function updateUsers(rol,nombre, email,password,direccion,id) 
{
    try {
        
        const userData = { 
            rol,
            nombre, 
            email,
            password,
            direccion

        
        };


        


        const response = await fetch("http://localhost:3001/Usuarios/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateUsers}



//////////////LLAMADO DELETE/////////////


async function deleteUser(id) {
    try {
        const response = await fetch(`http://localhost:3001/Usuarios/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export default { deleteUser, getUsers, postUsers, updateUsers};