import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LoginPage from 'app/pages/login';
import ServerListPage from 'app/pages/server-list';
import ProtectedRoute from 'app/atoms/protected-route';
import paths from './paths';

export default () => (
    <Switch>
        <ProtectedRoute exact path={paths.serverList} component={ServerListPage} />
        <Route exact path={paths.login} component={LoginPage} />
        <Redirect to={paths.login} />
    </Switch>
);
