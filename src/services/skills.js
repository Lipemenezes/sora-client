import http from '../httpCommon';
import { API_ROUTES } from '../constants';
import authHeader from './authHeader';

export async function getSkills() {
  try {
    const headers = authHeader();
    const response = await http.get(API_ROUTES.GET_SKILLS,  { headers });
    
    if (response.data) {
      return { success: true, skills: response.data.data };
    }

    throw new Error('Try again');
  } catch (e) {
    return { success: false, message: e.response.data.error };
  }
};

