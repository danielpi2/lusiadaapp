import { categories, spots } from './dataArrays.js';


// Função para pegar uma categoria pelo ID
export function getCategoryById(categoryId) {
  const category = categories.find(data => data.id === categoryId);
  return category || null;  // Retorna null se a categoria não for encontrada
}

// Função para pegar o nome de uma categoria pelo ID
export function getCategoryName(categoryId) {
  const category = getCategoryById(categoryId);
  return category ? category.name : 'Categoria Desconhecida';
}

// Função para pegar todos os spots de uma categoria
export function getSpotsByCategory(categoryId) {
  return spots.filter(data => data.categoryId === categoryId);  // Retorna todos os spots que pertencem à categoria
}

// Função para pegar um spot pelo ID
export function getSpotById(spotId) {
  const spot = spots.find(data => data.id === spotId);
  return spot || null;  // Retorna null se o spot não for encontrado
}

// Função para pegar todos os spots
export function getAllSpots() {
  return spots;  // Retorna todos os spots
}

// Função para pegar spots por localização
export function getSpotsByLocation(location) {
  return spots.filter(data => data.location.toLowerCase().includes(location.toLowerCase()));  // Retorna spots que contém a localização
}

// Função para pegar todas as categorias
export function getAllCategories() {
  return categories;  // Retorna todas as categorias
}

// Função para pegar spots por avaliação mínima
export function getSpotsByRating(minRating) {
  return spots.filter(data => data.rating >= minRating);  // Retorna spots com avaliação maior ou igual ao mínimo
}

// Função para pegar spots por nome ou localização
export function getSpotsByNameOrLocation(searchText) {
  const normalizedSearchText = searchText.trim().toLowerCase(); // Remove espaços e converte para minúsculas
  return spots.filter(spot => 
    spot.title.toLowerCase().includes(normalizedSearchText) || 
    spot.location.toLowerCase().includes(normalizedSearchText)
  );
}
export const loginUser = async (email, password) => {
  const users = [
    {
      id: 1,
      email: 'grupo7@gmail.com',
      password: '123456',
      name: 'Usuário Fictício',
    },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        resolve(user);
      } else {
        reject('Email ou senha incorretos');
      }
    }, 1000);
  });
};

