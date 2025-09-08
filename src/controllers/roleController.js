import prisma from "../prismaClient.js";   

// Crear un nuevo rol

export const createRole = async (req, res) => {
    console.log("📥 Body recibido:", req.body); // 👈 esto aparece en los logs de Render
    const { descripcion } = req.body;
    
    try {
        const newRole = await prisma.role.create({
            data: { descripcion },
        })
        res.json(newRole);
    }catch(error){
     console.error("❌ Prisma Error:", error);
      res.status(400).json({ error: error.message });
    
    }
}

// Obtener todos los roles

export const getRoles = async (req, res) => {
    try{
        const roles = await prisma.role.findMany();
        res.json(roles);
    }catch(error){
        res.status(500).json({ error: error.message });
        
    }
}

// Actualizar un rol existente

export const updateRole = async (req, res) => {
    const { id } = req.params;
    const { descripcion } = req.body;
    try{
        const updaterole = await prisma.role.update({
            where: { id_role: parseInt(id) },
            data: { descripcion },
        });
        res.json(updaterole);
    }catch(error){
        re.status(400).json({ error: error.message });
    }
 }
    

// Eliminar un rol
export const deleteRole = async (req, res)=>{
    const { id } = req.params;
    try{
        const delrole = await prisma.role.delete({
            where: { id_role: parseInt(id) },
        });
        res.json(delrole);
    }catch(error){
        res.status(400).json({ error: error.message });
    }

}