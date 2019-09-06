import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import createRootReducer from './root-reducer';
import sagas from './root-saga';

export const history = createBrowserHistory();

const setUpStore = () => {
    const middlewares = [];
    const sagaMiddleware = createSagaMiddleware();

    middlewares.push(sagaMiddleware);
    middlewares.push(routerMiddleware(history));

    const store = createStore(
        createRootReducer(history),
        composeWithDevTools(applyMiddleware(...middlewares)),
    );

    sagaMiddleware.run(sagas);

    return store;
};

export default setUpStore();
