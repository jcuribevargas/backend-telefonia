import express from 'express';
import { 
    getUsers,     
    createUser, 
    updateUser, 
    deleteUser
} from '../controllers/userControllers.js';

const router = express.Router();

// Rutas para usuarios

router.get('/user', getUsers);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;