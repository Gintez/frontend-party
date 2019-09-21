import * as React from 'react';
import injectSheet from 'react-jss';
import { FormikProps, Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { compose } from 'ramda';

import { Theme } from 'app/types';
import BackgroundImage from 'app/static/images/surfing.png';
import LogoImage from 'app/static/images/logo-light.png';
import * as authActions from 'app/redux/auth/actions';
import LoginForm, { LoginFormValidationSchema } from './login-form';

const styles = (theme: Theme) => ({
    root: {
        color: theme.palette.primary.main,
        backgroundImage: [
            `url(${BackgroundImage})`,
            'linear-gradient(#0B0F27, #0B0F27)',
        ],
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoBox: {
        marginBottom: 70,
    },
    loginForm: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            width: 360,
        },
    },
});

interface Styles {
    root: string;
    logoBox: string;
    loginForm: string;
}

interface OwnProps {
    classes: Styles,
}

interface DispatchProps {
    actions: {
        auth: typeof authActions;
    }
}

type Props = OwnProps & DispatchProps;

const LoginPage = ({ classes, actions }: Props) => {
    function renderForm(props: FormikProps<any>) {
        return <LoginForm {...props} />;
    }

    // TODO: remove inital values
    const initialValues = {
        username: 'tesonet',
        password: 'partyanimal',
    };

    return (
        <div className={classes.root}>
            <div className={classes.loginForm}>
                <div className={classes.logoBox}>
                    <img
                        src={LogoImage}
                        alt="Testio logo"
                        height="64px"
                        width="246px"
                    />
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={actions.auth.loginRequest}
                    render={renderForm}
                    validationSchema={LoginFormValidationSchema}
                />
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    actions: {
        auth: bindActionCreators(authActions, dispatch),
    },
});

export default compose(
    injectSheet(styles),
    // @ts-ignore
    connect(null, mapDispatchToProps),
)(LoginPage);
