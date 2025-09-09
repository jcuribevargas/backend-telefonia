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
       console.error("Error al crear el tipo de documento:", error);
    }
}

// Obtener todos los tipos de documento

export const getDocumentTypes = async (req, res) => {
    try{
        const documentTypes = await prisma.tipoDocumento.findMany();
        res.json(documentTypes);
    }catch(error){
        res.status(500).json({ error: error.message });
        console.error("Error al obtener los tipos de documento:", error);
    } 
}  

// Actualizar un tipo de documento existente

export const updateDocumentType = async (req, res) => {
    const { id } = req.params;
    const { descripcion } = req.body;   
    try{
        const documentType = await prisma.tipoDocumento.update({
            where: { id_tipo_documento: parseInt(id) },
            data: { descripcion },
        });
        res.json(documentType);
    } catch(error){
        res.status(400).json({ error: error.message });
        console.error("Error al actualizar el tipo de documento:", error);
    }      
}

// Eliminar un tipo de documento

export const deleteDocumentType = async (req, res) => { 
    const { id } = req.params;
    try{
        const documentType = await prisma.tipoDocumento.delete({
            where: { id_tipo_documento: parseInt(id) },
        });
        res.json(documentType);
    } catch(error){
        res.status(400).json({ error: error.message });
        console.error("Error al eliminar el tipo de documento:", error);
    } 
}