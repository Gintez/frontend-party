import * as React from 'react';
import injectSheet from 'react-jss';
import RobotoLight from 'app/static/fonts/roboto-light.ttf';
import RobotoBold from 'app/static/fonts/roboto-bold.ttf';
import RobotoRegular from 'app/static/fonts/roboto-regular.ttf';

import { Theme } from 'app/types';

const styles: any = (theme: Theme) => ({
    '@global': {
        '@font-face': [
            {
                fontFamily: 'RobotoLight',
                src: `url(${RobotoLight})`,
            },
            {
                fontFamily: 'RobotoBold',
                src: `url(${RobotoBold})`,
            },
            {
                fontFamily: 'RobotoRegular',
                src: `url(${RobotoRegular})`,
            },
        ],
        'html': {
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            boxSizing: 'border-box',
        },
        '*, *::before, *::after': {
            boxSizing: 'inherit',
        },
        'body': {
            margin: '0px',
            fontFamily: ['RobotoRegular', 'Arial', 'Helvetica', 'sans-serif'],
            fontSize: '16px',
            letterSpacing: '.4px',
            lineHeight: '30px',
            color: theme.palette.text.primary.main,
        },
    },
});

const GlobalStyles = () => React.createElement(React.Fragment, null);

export default injectSheet(styles)(GlobalStyles);
