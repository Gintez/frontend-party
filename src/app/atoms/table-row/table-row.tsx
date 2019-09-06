import * as React from 'react';
import injectSheet from 'react-jss';

import { Theme } from 'app/types';

const styles = (theme: Theme) => ({
    root: {
        border: `1px solid ${theme.palette.grey[100]}`,
    },
});

interface Styles {
    root: string;
}

interface OwnProps {
    children: any,
    classes: Styles,
}

const TableRow = ({ children, classes }: OwnProps) => (
    <tr className={classes.root}>
        {children}
    </tr>
);

export default injectSheet(styles)(TableRow);
