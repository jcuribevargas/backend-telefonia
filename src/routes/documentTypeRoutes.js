import express from 'express';
import { 
    getDocumentTypes, 
    createDocumentType, 
    updateDocumentType, 
    deleteDocumentType 
} from '../controllers/documentTypeControllers.js';

const router = express.Router();

// Rutas para tipos de documento    

router.get('/document-types', getDocumentTypes);
router.post('/document-types', createDocumentType);
router.put('/document-types/:id', updateDocumentType);
router.delete('/document-types/:id', deleteDocumentType);   

export default router;