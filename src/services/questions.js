import http from '../httpCommon';
import { API_ROUTES } from '../constants';
import authHeader from './authHeader';

export async function whoToAsk(skillId) {
  try {
    const headers = authHeader();
    const response = await http.get(API_ROUTES.ASK_QUESTION, { params: { skillId }, headers });
    
    if (response.data) {
      return { success: true, whoToAsk: response.data.data };
    }

    throw new Error('Try again');
  } catch (e) {
    return { success: false, message: e.response.data.error };
  }
};

