import express from "express";

import{
    createItemVenta,
    getItemVentas,
    deleteItemVenta,
    updateItemVenta
} from '../controllers/itemSaleControllers.js';

const router = express.Router();    
// Rutas para items de venta
router.post('/itemVenta', createItemVenta);
router.get('/itemVenta/:id_venta', getItemVentas);
router.delete('/itemVenta/:id/:id_venta', deleteItemVenta);
router.put('/itemVenta/:id/:id_venta', updateItemVenta);


export default router;