import prisma from "../prismaClient.js"; 

// Crear un nuevo producto

export const createProduct = async (req, res) => { 
const {referencia, pantalla, almacenamiento, ram, imagen, stock, precio_costo, precio_venta } = req.body;
try { 
const newProduct = await prisma.producto.create({ 
 data: {referencia,pantalla, almacenamiento, ram, imagen, stock, precio_costo, precio_venta }, 
    }); 
    res.json(newProduct); 
  } catch (error) { 
    console.error("Error al crear el producto:", error); 
     if (error.code === 'P2002') {
        res.status(409).json({ error: "Producto con esta referencia ya existe." });
      } else {  
    res.status(400).json({ error: error.message });
      } 
};


// Obtener todos los productos

export const getProducts = async (req, res) => { 
  try { 
    const products = await prisma.producto.findMany(); 
    res.json(products); 
  } catch (error) { 
    res.status(500).json({ error: error.message }); 
    console.error("Error al obtener los productos:", error); 
  } 
}; 
 
// Actualizar un producto existente

export const updateProduct = async (req, res) => {
const { id } = req.params; 
const {referencia, pantalla, almacenamiento, ram, imagen, stock, precio_costo, precio_venta } = req.body;
try { 
const product = await prisma.producto.update({ 
 where: { id_producto: parseInt(id) }, 
 data: {referencia, pantalla, almacenamiento, ram, imagen, stock, precio_costo, precio_venta }, 
    }); 
    res.json(product); 
  } catch (error) { 
    res.status(400).json({ error: error.message }); 
  }  
}       

// Eliminar un producto

export const deleteProduct = async (req, res) => {
const { id } = req.params; 
try { 
const product = await prisma.producto.delete({ 
 where: { id_producto: parseInt(id) }, 
    }); 
    res.json(product); 
  } catch (error) { 
    res.status(400).json({ error: error.message }); 
  }
};