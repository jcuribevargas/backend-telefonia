import prisma from "../prismaClient.js";

// Crear una venta nueva
export const createSale = async (req, res) => {
 // const { title, description, userId, categoryId } = req.body
 try {
    const sale = await prisma.task.create({
// data: { title, description, userId, categoryId },
 });
 res.json(task);
 } catch (error) {
 res.status(400).json({ error: error.message });
 // el error 400 indica que la solicitud no se pudo procesar debido a un error del cliente,
//como datos inválidos o faltantes.
 console.error("Error al crear la tarea:", error); 

 }
 }; 
 // Obtener todas las ventas
 export const getSales = async (req, res) => {
 try {
 const sales = await prisma.task.findMany();
 res.json(sales);
 } catch (error) {
 res.status(400).json({ error: error.message });
 console.error("Error al obtener las tareas:", error);
 }
 }