import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { ROUTES } from './constants';

const theme = createMuiTheme({});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path={[ ROUTES.DEFAULT, ROUTES.LOGIN ]} render={props => (<Login/>)}/>
          <Route exact path={ ROUTES.REGISTER } render={props => (<Register/>)}/>
          <PrivateRoute exact path={ ROUTES.DASHBOARD } render={props => (<Dashboard/>)}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
