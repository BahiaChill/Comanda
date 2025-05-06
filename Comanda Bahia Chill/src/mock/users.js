const users = [
  { username: "JUAN", password: "7294" },
  { username: "SANTIAGO", password: "3168" },
  { username: "SOFIA", password: "4835" },
  { username: "JULIAN", password: "1590" },
  { username: "INVITADO", password: "6247" }
];

const products = [
  // Cervezas
  { id: 1, name: "Aguila", price: 3.500, category: "cerveza" },
  { id: 2, name: "Poker", price: 3.500, category: "cerveza" },
  { id: 3, name: "Budweiser", price: 3.000, category: "cerveza" }, 
  { id: 4, name: "Costeña", price: 3.000, category: "cerveza" }, 
  { id: 5, name: "Coronita", price: 4.000, category: "cerveza" },
  { id: 6, name: "Corona", price: 8.000, category: "cerveza" },
  { id: 7, name: "Stella Artois", price: 8.000, category: "cerveza" },

  // Licores
  { id: 8, name: "1/2 Lider", price: 45.000, category: "licor" }, 
  { id: 9, name: "1 Lider", price: 85.000, category: "licor" },
  { id: 10, name: "1/2 Ron", price: 40.000, category: "licor" }, 
  { id: 11, name: "1 Ron", price: 80.000, category: "licor" },
  { id: 12, name: "Buchanan's", price: 220.000, category: "licor" },
  { id: 13, name: "Onix Negro", price: 80.000, category: "licor" },
  { id: 14, name: "Bacardi", price: 80.000, category: "licor" },
  { id: 15, name: "Onix Amarillo", price: 90.000, category: "licor" },

  // Otros
  { id: 16, name: "Cigarrillo", price: 1.000, category: "otros" },
  { id: 22, name: "Michelada", price: 2.000, category: "Otros" },
  
  // Bebidas
  { id: 17, name: "Agua", price: 3.000, category: "bebida" },
  { id: 18, name: "Cafe", price: 3.000, category: "bebida" }, 
  { id: 19, name: "Coca Cola", price: 4.000, category: "bebida" },
  { id: 20, name: "Soda", price: 4.000, category: "bebida" },
  { id: 21, name: "Sprite", price: 4.000, category: "bebida" },

  // Cocteles
  
  { id: 23, name: "Ron con Cola", price: 28.000, category: "coctel" },
  { id: 24, name: "Piña Chill", price: 28.000, category: "coctel" }, 
  { id: 25, name: "Mojito", price: 28.000, category: "coctel" },
  { id: 26, name: "Vodka Martini", price: 40.000, category: "coctel" },
  { id: 27, name: "Pescera", price: 40.000, category: "coctel" },
  
  // Shots
  { id: 28, name: "Fuego de Bahia", price: 12.000, category: "shots" },
  { id: 29, name: "Extasis Tropical", price: 12.000, category: "shots" },
  { id: 30, name: "Seduccion Tropical", price: 12.000, category: "shots" }, 
  { id: 31, name: "Mar de Pasion", price: 12.000, category: "shots" }, 
  { id: 32, name: "Atardecer Tropical", price: 12.000, category: "shots" },
  { id: 33, name: "Naufragio", price: 12.000, category: "shots" },
  { id: 34, name: "Brisa Acida", price: 12.000, category: "shots" }, 
  { id: 35, name: "Tormenta Azul", price: 12.000, category: "shots" },
  { id: 36, name: "Rayo Caribeño", price: 12.000, category: "shots" },

  // Snacks
  { id: 37, name: "Mani", price: 3000, category: "snack" } 
];

export { users, products };
