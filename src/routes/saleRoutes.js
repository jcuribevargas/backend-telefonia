import express from 'express';
import { 
    getSales,    
    getSaleById, 
    createSale, 
    updateSale, 
    deleteSale
} from '../controllers/saleController.js';      


const router = express.Router();
// Rutas para ventas
router.get('/sale', getSales);
router.get('/sale/:id', getSaleById);
router.post('/sale', createSale);
router.put('/sale/:id', updateSale);
router.delete('/sale/:id', deleteSale);

export default router;
