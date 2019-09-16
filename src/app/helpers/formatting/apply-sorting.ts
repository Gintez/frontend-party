import { sortWith, prop, descend, ascend } from 'ramda';

import { SortOrderValues } from 'app/types';

interface ApplySortingProps {
    propName: string;
    order: SortOrderValues;
    list: Array<{}>;
}

// ({
//    propName: 'name',
//    order: 'descend',
//    list: [{ name: 'b' }, { name: 'a' }]
// }) => [{ name: 'a' }, { name: 'b' }]

export default function applySorting({ propName, order, list }: ApplySortingProps) {
    if (!propName || !order) { return list; }
    if (order === 'ascend') {
        return sortWith([ascend(prop(propName))])(list);
    }

    return sortWith([descend(prop(propName))])(list);
}
