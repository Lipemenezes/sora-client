import http from '../httpCommon';
import { API_ROUTES } from '../constants';

export async function whoToAsk(skillId) {
  try {
    const response = await http.get(API_ROUTES.ASK_QUESTION, { params: { skillId } });
    
    if (response.data) {
      return { success: true, whoToAsk: response.data.data };
    }

    throw new Error('Try again');
  } catch (e) {
    return { success: false, message: e.response.data.error };
  }
};

