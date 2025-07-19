import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
});

export const createProduct = (product: any) => API.post('/products', product);
export const getProducts = () => API.get('/products').then(res => res.data);

export const createEntry = (entry: any) => API.post('/inventory/entries', entry);
export const createExit = (exit: any) => API.post('/inventory/exits', exit);
export const getInventory = () => API.get('/inventory').then(res => res.data);
