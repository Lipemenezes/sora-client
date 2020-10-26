import http from '../http-common';
import { SESSION_PROPERTY, API_ROUTES } from '../constants';

export async function register(email, password, firstName, lastName) {
  try {
    const response = await http.post(API_ROUTES.REGISTER, { email, password, firstName, lastName });
    
    if (response.data.token) {
      window.localStorage.setItem(SESSION_PROPERTY.TOKEN);
    }

    return response.data;
  } catch (e) {
    console.error(e.message);
    return false;
  }
};

export async function login(email, password) {
  try {
    const response = await http.post(API_ROUTES.LOGIN, { email, password });
    
    if (response.data.token) {
      window.localStorage.setItem(SESSION_PROPERTY.TOKEN, response.data.token);
    }

    return response.data;
  } catch (e) {
    console.error(e.message);
    return false;
  }
};

export default function logout() {
  window.localStorage.removeItem(SESSION_PROPERTY.TOKEN);
} 
