import { Router } from 'express';
import { getItems, addItem } from '../controllers/itemsController';

const router = Router();

router.get('/', getItems); // Définition de la route GET '/' pour obtenir les éléments, en utilisant la fonction 'getItems' comme gestionnaire.
router.post('/', addItem); // Définition de la route POST '/' pour ajouter un nouvel élément, en utilisant la fonction 'addItem' comme gestionnaire.

export default router;
