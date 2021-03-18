import { Switch, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { PageARoutes } from './PageARoutes';
import { PageBRoutes } from './PageBRoutes';
import { Page404 } from '../components/Page404';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/pageA"
        render={({ match: { url } }) => (
          <Switch>
            {PageARoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/pageB"
        render={({ match: { url } }) => (
          <Switch>
            {PageBRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
