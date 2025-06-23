import axios from 'axios';

// Configurar la URL base de la API
const api = axios.create({
  baseURL: 'http://localhost:3001', // Asegúrate que esta URL sea correcta para tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Funciones para obtener casos clínicos
export const getCases = async () => {
  try {
    const response = await api.get('/cases');  // Cambiado de /projects a /cases
    return response.data; // Devuelve los datos de los casos clínicos
  } catch (error) {
    console.error('Error al obtener casos clínicos', error);
    throw error;
  }
};

// Función para crear un nuevo caso clínico
export const createCase = async (caseData) => {
  try {
    const response = await api.post('/cases', caseData);
    return response.data;
  } catch (error) {
    console.error('Error al crear caso clínico', error);
    throw error;
  }
};

// Función para crear un mensaje de contacto (queda igual)
export const sendContactMessage = async (contact) => {
  try {
    const response = await api.post('/contact', contact);
    return response.data;
  } catch (error) {
    console.error('Error al enviar mensaje de contacto', error);
    throw error;
  }
};

// Función para obtener los detalles de un caso clínico específico
export const getCaseDetails = async (id) => {
  try {
    const response = await api.get(`/cases/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los detalles del caso clínico", error);
    throw error;
  }
};

export default api;
