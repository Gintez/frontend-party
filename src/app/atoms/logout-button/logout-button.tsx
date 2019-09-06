import * as React from 'react';
import injectSheet from 'react-jss';

import { Theme } from 'app/types';
import LogoutIcon from 'app/static/icons/logout-icon.svg';

const styles = (theme: Theme) => ({
    root: {
        'display': 'flex',
        'alignItems': 'center',
        'cursor': 'pointer',
        'fontSize': 14,
        'lineHeight': 0,
        '&:hover': {
            'color': theme.palette.primary.light,
            '& svg': {
                '& path': {
                    fill: theme.palette.primary.light,
                },
            },
        },
    },
    icon: {
        marginRight: 10,
        display: 'flex',
    },
});

interface Styles {
    root: string;
    icon: string;
}

interface OwnProps {
    classes: Styles;
    onClick: () => void;
}

const LogoutButton = ({ classes, onClick }: OwnProps) => (
    <div onClick={onClick} className={classes.root}>
        <div className={classes.icon}>
            <LogoutIcon />
        </div>
        <div>Logout</div>
    </div>
);

export default injectSheet(styles)(LogoutButton);
