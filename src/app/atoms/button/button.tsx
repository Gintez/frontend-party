import * as React from 'react';
import injectSheet from 'react-jss';

import { Theme } from 'app/types';

const styles = (theme: Theme) => ({
    root: {
        'background': theme.palette.primary.main,
        'cursor': 'pointer',
        'outline': 'none',
        'border': 0,
        'height': 56,
        'fontWeight': 700,
        'width': '100%',
        'fontSize': 16,
        'borderRadius': theme.shape.borderRadius,
        'transition': 'background-color 0.25s',
        'color': theme.palette.text.primary.contrastText,
        'fontFamily': 'inherit',
        '&:hover': {
            background: theme.palette.primary.dark,
        },
    },
});

interface Styles {
    root: string;
}

interface OwnProps {
    children: string;
    classes: Styles;
    onClick?: () => void;
    type?: 'button' | 'submit',
}

type Props = OwnProps;

const Button = ({
    children,
    classes,
    onClick,
    type = 'button',
}: Props) => (
    <button
        type={type}
        onClick={onClick}
        className={classes.root}
    >
        {children}
    </button>
);

export default injectSheet(styles)(Button);
