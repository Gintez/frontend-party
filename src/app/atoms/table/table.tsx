import * as React from 'react';
import injectSheet from 'react-jss';

const styles = {
    root: {
        width: '100%',
        borderCollapse: 'collapse',
    },
};

interface Styles {
    root: string;
}

interface OwnProps {
    children: any,
    classes: Styles,
}

const Table = ({ children, classes }: OwnProps) => (
    <table className={classes.root}>
        <tbody>
            {children}
        </tbody>
    </table>
);

export default injectSheet(styles)(Table);
