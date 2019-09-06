import * as React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { compose } from 'ramda';

import * as authActions from 'app/redux/auth/actions';
import LogoImage from 'app/static/images/logo-dark.png';
import LogoutButton from 'app/atoms/logout-button';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: [33, 15],
    },
};

interface DispatchProps {
    actions: {
        auth: typeof authActions,
    }
}

interface Styles {
    root: string;
}

interface OwnProps {
    classes: Styles,
}

type Props = DispatchProps & OwnProps;

const Header = ({ classes, actions }: Props) => (
    <div className={classes.root}>
        <div>
            <img
                src={LogoImage}
                alt="Testio logo"
                height="30px"
                width="115px"
            />
        </div>
        <LogoutButton onClick={actions.auth.logoutRequest} />
    </div>
);

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    actions: {
        auth: bindActionCreators(authActions, dispatch),
    },
});

export default compose(
    injectSheet(styles),
    // @ts-ignore
    connect(null, mapDispatchToProps),
)(Header);
