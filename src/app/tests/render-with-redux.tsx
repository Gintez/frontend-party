import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import createRootReducer from 'app/redux/root-reducer';

export default (
    ui: any,
    { initialEntries = [] }: { initialEntries: Array<string> },
) => {
    const history = createMemoryHistory({ initialEntries });
    const store = createStore(createRootReducer(history));

    return {
        ...render(
            <Router history={history}>
                <Provider store={store}>{ui}</Provider>
            </Router>,
        ),
        store,
    };
};
