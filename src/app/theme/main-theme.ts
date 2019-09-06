import { Theme, Breakpoints, BreakpointsValues } from 'app/types';

function up(key: Breakpoints) {
    return `@media (min-width: ${BreakpointsValues[key]}px)`;
}

function down(key: Breakpoints) {
    return `@media (max-width: ${BreakpointsValues[key]}px)`;
}

const theme: Theme = {
    palette: {
        primary: {
            main: '#9fd533',
            dark: '#86b300',
            light: '#99cc33',
        },
        grey: {
            100:  '#e6e6e6',
            200:  '#cccccc',
        },
        text: {
            primary: {
                main: '#666666',
                light: '#999999',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#b3b3b3',
                dark: '#999',
                light: ' #f5f5f5',
            },
        },
        background: {
            main: '#ffffff',
            secondary: '#f5f5f5',
        },
    },
    shape: {
        borderRadius: '5px',
    },
    breakpoints: {
        up,
        down,
    },
};

export default theme;
