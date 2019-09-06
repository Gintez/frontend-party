import pathOr from 'ramda/es/pathOr';

import { NAME } from './constants';

export const getServersList = pathOr(null, [NAME, 'servers']);
