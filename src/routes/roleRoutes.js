import express from 'express';

import{
  getRoles,
  createRole,
  updateRole,
  deleteRole  
}from '../controllers/roleController.js';

const router = express.Router();

// Rutas para roles
router.get('/roles', getRoles);
router.post('/roles', createRole);
router.put('/roles/:id', updateRole);
router.delete('/roles/:id', deleteRole);

export default router;