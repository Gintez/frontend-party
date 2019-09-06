import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import paths from 'app/routes/paths';
import { getAccessToken } from 'app/helpers/storage';

interface OwnProps {
    component: any,
}

type Props = OwnProps & RouteProps;

const ProtectedRoute = ({ component: Component, ...rest }: Props) => {
    const RouteComponent = (props: RouteProps) => (
        getAccessToken()
            ? <Component {...props} />
            : <Redirect to={paths.login} />
        );

    return (
        <Route {...rest} render={RouteComponent} />
    );
};

export default ProtectedRoute;
