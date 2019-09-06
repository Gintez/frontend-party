import * as React from 'react';
import injectSheet from 'react-jss';

import { Theme } from 'app/types';

const styles = (theme: Theme) => ({
    root: {
        padding: [22, 14],
        textTransform: 'uppercase',
        background: theme.palette.background.secondary,
        fontSize: '14px',
        letterSpacing: '1.4px',
        color: theme.palette.text.primary.light,
        fontFamily: 'RobotoLight',
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

const TableHead = ({ children, classes, align = 'left' }: OwnProps) => (
    <th className={classes.root} align={align}>
        {children}
    </th>
);

export default injectSheet(styles)(TableHead);
