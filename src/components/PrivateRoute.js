import { Redirect, Route } from 'react-router-dom';
import { SESSION_PROPERTY, ROUTES } from '../constants';

const storage = window.localStorage;

const isUserAuthenticated = () => {
  const token = storage.getItem(SESSION_PROPERTY.TOKEN);
  // const email = storage.getItem(SESSION_PROPERTY.EMAIL);

  if (!token) return false;
  
  return true;
};

const PrivateRoute = ({ ...props }) => {
  const isAuth = isUserAuthenticated();

  if (!isAuth) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
