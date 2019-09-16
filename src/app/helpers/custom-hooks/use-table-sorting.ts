import * as React from 'react';

import { SortOrderValues } from 'app/types';

export default function useTableSorting() {
    const [ currentSortProp, setSortProp ] = React.useState(null);
    const [ sortOrder, setSortOrder ] = React.useState(null);

    function resetSorting() {
        setSortProp(null);
        setSortOrder(null);
    }

    function setPropToAscending() {
        setSortOrder(SortOrderValues.ascend);
    }

    function setPropToDescending(propName: string) {
        setSortProp(propName);
        setSortOrder(SortOrderValues.descend);
    }

    function handleSortClick(propName: string) {
        if (currentSortProp !== propName) {
            return setPropToDescending(propName);
        }

        if (currentSortProp === propName && sortOrder === SortOrderValues.descend) {
            return setPropToAscending();
        }

        resetSorting();
    }

    return [currentSortProp, handleSortClick, sortOrder];
}
