import React from 'react';
import { Route, Switch } from 'react-router-dom';

interface InterfaceRoutes {
  key: string

  path: string

  exact: boolean

  component: React.FunctionComponent<any>
}

const renderRoutes = (routes: Array<InterfaceRoutes>) => (
  <Switch>
    {
      routes.map((route) => (
        <Route
          key={route.key}
          path={route.path}
          exact={route.exact}
          render={(props) => <route.component {...props} route={route} />}
        />
      ))
    }
  </Switch>
);

export default renderRoutes;
