import { Redirect, Route } from 'react-router-dom';
import { ROUTES } from '../constants';

import { isAuthenticated } from '../services/auth';

const PublicRoute = ({ ...props }) => {
  const isAuth = isAuthenticated();

  if (isAuth) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  return <Route {...props} />;
};

export default PublicRoute;
