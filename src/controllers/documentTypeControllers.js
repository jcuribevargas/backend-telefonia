import prisma from "../prismaClient";

// Crear un nuevo tipo de documento

export const createDocumentType = async (req, res) => {
    const { descripcion } = req.body;
    try{
        const newDocumentType = await prisma.tipoDocumento.create({
            data: { descripcion },
        });
        res.json(newDocumentType);  
    }catch(error){
          res.status(400).json({ error: error.message });
       
    }
}