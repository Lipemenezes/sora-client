import { Redirect, Route } from 'react-router-dom';
import { ROUTES } from '../constants';

import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({ ...props }) => {
  const isAuth = isAuthenticated();

  if (!isAuth) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
