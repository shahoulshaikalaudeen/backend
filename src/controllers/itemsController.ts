import { Request, Response } from 'express';
import { getItems as getItemsService, addItem as addItemService } from '../services/itemsService';

export const getItems = (req: Request, res: Response) => {
  // Récupère les éléments via le service et les renvoie au client en réponse JSON.
  const items = getItemsService();
  res.json(items);
};

export const addItem = (req: Request, res: Response) => {
  // Ajoute un nouvel élément via le service et renvoie l'élément créé avec le statut HTTP 201.
  const newItem = req.body;
  const createdItem = addItemService(newItem);
  res.status(201).json(createdItem);
};
