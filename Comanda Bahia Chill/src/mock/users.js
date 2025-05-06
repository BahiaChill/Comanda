const users = [
  { username: "JUAN", password: "7294" },
  { username: "SANTIAGO", password: "3168" },
  { username: "SOFIA", password: "4835" },
  { username: "JULIAN", password: "1590" },
  { username: "INVITADO", password: "6247" }
];

const products = [
  // Cervezas
  { id: 1, name: "Aguila", price: 3500, category: "cerveza" },
  { id: 2, name: "Poker", price: 3500, category: "cerveza" },
  { id: 3, name: "Budweiser", price: 3000, category: "cerveza" }, 
  { id: 4, name: "Costeña", price: 3000, category: "cerveza" }, 
  { id: 5, name: "Coronita", price: 4000, category: "cerveza" },
  { id: 6, name: "Corona", price: 8000, category: "cerveza" },
  { id: 7, name: "Stella Artois", price: 8000, category: "cerveza" },

  // Licores
  { id: 8, name: "1/2 Lider", price: 45000, category: "licor" }, 
  { id: 9, name: "1 Lider", price: 85000, category: "licor" },
  { id: 10, name: "1/2 Ron", price: 40000, category: "licor" }, 
  { id: 11, name: "1 Ron", price: 80000, category: "licor" },
  { id: 12, name: "Buchanan's", price: 220000, category: "licor" },
  { id: 13, name: "Onix Negro", price: 80000, category: "licor" },
  { id: 14, name: "Bacardi", price: 80000, category: "licor" },
  { id: 15, name: "Onix Amarillo", price: 90000, category: "licor" },

  // Otros
  { id: 16, name: "Cigarrillo", price: 1000, category: "otros" },
  
  // Bebidas
  { id: 17, name: "Agua", price: 3000, category: "bebida" },
  { id: 18, name: "Cafe", price: 3000, category: "bebida" }, 
  { id: 19, name: "Coca Cola", price: 4000, category: "bebida" },
  { id: 20, name: "Soda", price: 4000, category: "bebida" },
  { id: 21, name: "Sprite", price: 4000, category: "bebida" },

  // Cocteles
  { id: 22, name: "Michelada", price: 2000, category: "coctel" },
  { id: 23, name: "Ron con Cola", price: 28000, category: "coctel" },
  { id: 24, name: "Piña Chill", price: 28000, category: "coctel" }, 
  { id: 25, name: "Mojito", price: 28000, category: "coctel" },
  { id: 26, name: "Vodka Martini", price: 40000, category: "coctel" },
  { id: 27, name: "Pescera", price: 40000, category: "coctel" },
  
  // Shots
  { id: 28, name: "Fuego de Bahia", price: 12000, category: "coctel" },
  { id: 29, name: "Extasis Tropical", price: 12000, category: "coctel" },
  { id: 30, name: "Seduccion Tropical", price: 12000, category: "coctel" }, 
  { id: 31, name: "Mar de Pasion", price: 12000, category: "coctel" }, 
  { id: 32, name: "Atardecer Tropical", price: 12000, category: "coctel" },
  { id: 33, name: "Naufragio", price: 12000, category: "coctel" },
  { id: 34, name: "Brisa Acida", price: 12000, category: "coctel" }, 
  { id: 35, name: "Tormenta Azul", price: 12000, category: "coctel" },
  { id: 36, name: "Rayo Caribeño", price: 12000, category: "coctel" },

  // Snacks
  { id: 37, name: "Mani", price: 3000, category: "snack" } 
];

export { users, products };
