import http from '../httpCommon';
import { SESSION_PROPERTY, API_ROUTES } from '../constants';

export async function register(email, password, firstName, lastName) {
  try {
    const response = await http.post(API_ROUTES.REGISTER, { email, password, firstName, lastName });
    
    if (response.data.token) {
      window.localStorage.setItem(SESSION_PROPERTY.TOKEN, response.data.token);
      return { success: true };
    }

    throw new Error('Try again');
  } catch (e) {
    return { success: false, message: e.response.data.error };
  }
};

export async function login(email, password) {
  try {
    const response = await http.post(API_ROUTES.LOGIN, { email, password });
    
    if (response.data.token) {
      window.localStorage.setItem(SESSION_PROPERTY.TOKEN, response.data.token);
      return { success: true };
    }

    throw new Error('Try again');
  } catch (e) {
    return { success: false, message: e.response.data.error };
  }
};

export default function logout() {
  window.localStorage.removeItem(SESSION_PROPERTY.TOKEN);
} 

export function isAuthenticated() {
  const token = window.localStorage.getItem(SESSION_PROPERTY.TOKEN);
  return !!token;
}
