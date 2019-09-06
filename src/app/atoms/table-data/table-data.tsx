import * as React from 'react';
import injectSheet from 'react-jss';

import { Theme } from 'app/types';

const styles = (theme: Theme) => ({
    root: {
        padding: [21, 15],
        lineHeight: 1,
    },
});

interface Styles {
    root: string;
}

interface OwnProps {
    children: any,
    classes: Styles,
    align?: 'left' | 'right' | 'center',
}

const TableData = ({ children, classes, align = 'left' }: OwnProps) => (
    <td className={classes.root} align={align}>
        {children}
    </td>
);

export default injectSheet(styles)(TableData);
