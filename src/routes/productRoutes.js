import express from 'express';
import { 
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct } 
    from '../controllers/productController.js';

const router = express.Router();

// Rutas para productos
router.get('/products', getProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;