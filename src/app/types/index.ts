export interface Color {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
}

export interface Theme {
    palette: {
        primary: {
            main: string;
            dark: string;
            light: string;
        },
        grey: Color;
        text: {
            primary: {
                main: string;
                light: string;
                contrastText: string;
            },
            secondary: {
                main: string;
                dark: string;
                light: string;
            },
        },
        background: {
            main: string;
            secondary: string;
        },
    },
    shape: {
        borderRadius: string;
    },
    breakpoints: {
        up: (key: Breakpoints) => string;
        down: (key: Breakpoints) => string;
    }
}

export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export enum BreakpointsValues {
    xs = 0,
    sm = 600,
    md = 960,
    lg = 1280,
    xl = 1920,
}

export interface LoginFormData {
    username: string;
    password: string;
}

export interface ServerModel {
    distance: string;
    name: string;
}

export type ServersModel = Array<ServerModel>;

export enum SortOrderValues {
    ascend = 'ascend',
    descend = 'descend',
}
