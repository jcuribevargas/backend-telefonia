import prisma from "../prismaClient.js";

// Crear una venta nueva
export const createSale = async (req, res) => {
 const { numero_factura, fecha_venta, id_usuario_fk, total } = req.body;
 try {
    const sale = await prisma.task.create({
    data: { numero_factura, fecha_venta, id_usuario_fk, total}
   
 });
 res.json(task);
 } catch (error) {
 res.status(400).json({ error: error.message });
 // el error 400 indica que la solicitud no se pudo procesar debido a un error del cliente,
//como datos inválidos o faltantes.
 console.error("Error al crear la venta:", error); 

 }
 }; 
 // Obtener todas las ventas
 export const getSales = async (req, res) => {
 try {
 const sales = await prisma.task.findMany({
  include: { ItemVenta: true } 
 });
 
 res.json(sales);
 } catch (error) {
 res.status(400).json({ error: error.message });
 console.error("Error al obtener las ventas:", error);
 }
 }

    // Obtener una venta por ID

    export const getSaleById = async (req, res) => {
    const { id } = req.params;
    try{
        const sale = await prisma.task.findUnique({
            where: { id_venta: parseInt(id) },
            include: { ItemVenta: true } 
        });
        res.json(sale);
    }catch (error) {
        res.status(400).json({ error: error.message });
        console.error("Error al obtener la venta por ID:", error);  
    }
    }

    // Actualizar una venta por ID
    export const updateSale = async (req, res) => {
        const { id } = req.params;
        const { numero_factura, fecha_venta, id_usuario_fk, total } = req.body;
        try {
            const sale = await prisma.task.update({ 
                where: { id_venta: parseInt(id) },
                data: { numero_factura, fecha_venta, id_usuario_fk, total }
            });
            res.json(sale);
        } catch (error) {
            res.status(400).json({ error: error.message });
            console.error("Error al actualizar la venta:", error);
        }   
    }

    // Eliminar una venta por ID        
    export const deleteSale = async (req, res) => {
        const { id } = req.params;
        try {
            await prisma.task.delete({
                where: { id_venta: parseInt(id) }
            });
            res.json({ message: "Venta eliminada correctamente" });
        } catch (error) {
            res.status(400).json({ error: error.message });
            console.error("Error al eliminar la venta:", error);
        }   
    }
