import http from '../httpCommon';
import { API_ROUTES } from '../constants';

export async function getSkills() {
  try {
    const response = await http.get(API_ROUTES.GET_SKILLS);
    
    if (response.data) {
      return { success: true, skills: response.data.data };
    }

    throw new Error('Try again');
  } catch (e) {
    return { success: false, message: e.response.data.error };
  }
};

