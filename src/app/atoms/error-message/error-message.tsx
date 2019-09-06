import * as React from 'react';
import injectSheet from 'react-jss';

import { Theme } from 'app/types';

const styles = (theme: Theme) => ({
    root: {
        color: theme.palette.text.secondary.light,
        marginTop: '5px',
    },
});

interface Styles {
    root: string;
}

interface OwnProps {
    children: string;
    classes: Styles;
}

const ErrorMessage = ({ children, classes }: OwnProps) => (
    <div className={classes.root}>{children}</div>
);

export default injectSheet(styles)(ErrorMessage);
