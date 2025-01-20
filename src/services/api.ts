import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spoonacular.com/', // Reemplazar con la API base
  params: {
    apiKey: 'TU_API_KEY', // Reemplazar con tu clave de Spoonacular
  },
});

export default api;
