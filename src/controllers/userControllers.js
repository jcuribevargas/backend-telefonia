import prisma from "../prismaClient";

// Crear un nuevo usuario

export const createUser = async (req, res) => {
const {id_usuario, numero_identificacion, correo, direccion, telefono, id_role_fk, id_tipo_documento, nombre, clave} = req.body;
 
  try{
    const newUser = await prisma.usuario.create({
        data: {id_usuario, numero_identificacion, correo, direccion, telefono, id_role_fk, id_tipo_documento, nombre, clave},
        
    });
    res.json(newUser);
  }catch(error){
        res.status(400).json({ error: error.message });
     console.error("Error al crear el usuario:", error);
  }
}     

// Obtener todos los usuarios

export const getUsers = async (req, res) => {
    try{
        const users = await prisma.usuario.findMany();
        res.json(users);
    }catch(error){
        res.status(500).json({ error: error.message });
        console.error("Error al obtener los usuarios:", error);
    }
}

// Actualizar un usuario existente

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const {numero_identificacion, correo, direccion, telefono, id_role_fk, id_tipo_documento, nombre, clave} = req.body;
    try{
        const user = await prisma.usuario.update({
            where: { id_usuario: parseInt(id) },
            data: {numero_identificacion, correo, direccion, telefono, id_role_fk, id_tipo_documento, nombre, clave},
        });
        res.json(user);
    }catch(error){
        res.status(400).json({ error: error.message });
        console.error("Error al actualizar el usuario:", error);
    }
}

// Eliminar un usuario

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try{
        const user = await prisma.usuario.delete({
            where: { id_usuario: parseInt(id) },
        });
        res.json(user);
    }catch(error){
        res.status(400).json({ error: error.message });
        console.error("Error al eliminar el usuario:", error);
    }   
}