import { SESSION_PROPERTY } from '../constants';

export default function authHeader() {
  const token = localStorage.getItem(SESSION_PROPERTY.TOKEN);

  const baseHeaders = {
    'Content-type': 'application/json',
  };

  if (token) {
    return {
      ...baseHeaders,
      Authorization: `Bearer ${token}`,
    };
  } 

  return baseHeaders;
}
