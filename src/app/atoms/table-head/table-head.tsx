import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import { Theme, SortOrderValues } from 'app/types';

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
    arrowIcon: {
        padding: 5,
    },
    clickableHead: {
        cursor: 'pointer',
    },
});

interface Styles {
    root: string;
    arrowIcon: string;
    clickableHead: string;
}

interface OwnProps {
    children: any;
    classes: Styles;
    align?: 'left' | 'right' | 'center';
    sortProp?: string;
    onSort?: (sortOrder: string) => void;
    currentSortOrder?: SortOrderValues;
    currentSortProp?: string;
}

const TableHead = ({
    children,
    classes,
    align = 'left',
    sortProp,
    currentSortProp,
    currentSortOrder,
    onSort,
}: OwnProps) => {

    function handleClick() {
        onSort && onSort(sortProp);
    }

    function renderSortArror() {
        if (currentSortProp !== sortProp) {
            return null;
        }

        if (currentSortOrder === SortOrderValues.ascend) {
            return <span className={classes.arrowIcon}>&uarr;</span>;
        }

        return <span className={classes.arrowIcon}>&darr;</span>;
    }

    const rootClassName = classNames(
        classes.root,
        { [classes.clickableHead]: sortProp },
    );

    return (
        <th
            className={rootClassName}
            align={align}
            onClick={handleClick}
        >
            {children}
            {renderSortArror()}
        </th>
    );
};

export default injectSheet(styles)(TableHead);
