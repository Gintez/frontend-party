import * as React from 'react';
import { ThemeProvider } from 'react-jss';

import Routes from 'app/routes';
import theme from 'app/theme';
import GlobalStyles from 'app/theme/global-styles';

const App = () => (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <GlobalStyles />
            <Routes />
        </React.Fragment>
    </ThemeProvider>
);

export default App;
