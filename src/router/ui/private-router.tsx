import { Route, Redirect, RouteProps } from 'react-router-dom';
import * as user from 'shared/entities/user';
import { URLS } from '../urls';

export const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...props
}) => {
  const isAuth = user.selectors.useIsAuth();

  return (
    <Route
      {...props}
      render={({ location }) =>
        isAuth ? (
          // @ts-ignore
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: URLS.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
