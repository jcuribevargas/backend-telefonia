import prisma from "../prismaClient";

//crear un item de venta
export const createItemVenta = async (req, res) => {
    const {id_item, id_venta_fk, id_producto_fk, stock_vendido, precio_venta } = req.body;
    try{
        const item = await prisma.itemVenta.create({
            data: {id_item, id_venta_fk, id_producto_fk, stock_vendido, precio_venta }
        });

        await updateTotatlVenta(id_venta_fk);

        res.json(item);
    }catch (error) {
        res.status(400).json({ error: error.message });
        console.error("Error al crear el item de venta:", error);  
    }   
}

//obtener todos los items de una venta
export const getItemVentas = async (req, res) => {
    const { id_venta } = req.params;
    try{
        const items = await prisma.itemVenta.findMany({
            where: { id_venta_fk: parseInt(id_venta) },
            include: { producto: true }   
        });
        res.json(items);
    }catch (error) {
        res.status(400).json({ error: error.message });
        console.error("Error al obtener los items de venta:", error);  
    }   
}   

//eliminar un item de una venta
export const deleteItemVenta = async (req, res) => {
    const { id, id_venta } = req.params;  
    try {
        const item = await prisma.itemVenta.delete({
            where: { id_item: parseInt(id), id_venta_fk: parseInt(id_venta) }
        });
        res.json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.error("Error al eliminar el item de venta:", error);  
    }       
}

//actualizar un item de una venta       
export const updateItemVenta = async (req, res) => {
    const { id, id_venta } = req.params;
    const { id_producto_fk, stock_vendido, precio_venta } = req.body;
    try {           
        const item = await prisma.itemVenta.update({
            where: { id_item: parseInt(id) ,
                   id_venta_fk: parseInt(id_venta) },
            data: {id_producto_fk, stock_vendido, precio_venta }
        });
        res.json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.error("Error al actualizar el item de venta:", error);  
    }       
}

export const updateTotatlVenta = async (id_venta) => {
 const detalles = await prisma.itemVenta.findMany({ where: { ventaId } });
 const total = detalles.reduce((acc, d) => acc + d.cantidad * d.precio, 0);

    try {
        const sale = await prisma.venta.update({    
            where: { id_venta: parseInt(id_venta) },
            data: { total }
        });
        return sale;
    } catch (error) {
        console.error("Error al actualizar el total de la venta:", error);  
        throw error;
    }
}