interface Item {
  name: string; // Déclaration de l'interface 'Item' avec une propriété 'name' de type chaîne de caractères.
}

let items: Item[] = []; // Initialisation d'un tableau vide 'items' pour stocker les éléments de type 'Item'.

export const getItems = (): Item[] => {
  // Fonction pour obtenir tous les éléments, renvoie le tableau 'items'.
  return items;
};

export const addItem = (item: Item): Item => {
  // Fonction pour ajouter un nouvel élément au tableau 'items' et renvoie l'élément ajouté.
  items.push(item);
  return item;
};
