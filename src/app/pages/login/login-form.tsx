import * as React from 'react';
import { Form, FormikProps } from 'formik';
import injectSheet from 'react-jss';
import * as Yup from 'yup';

import TextInputField from 'app/atoms/text-input-field';
import Button from 'app/atoms/button';
import LoackIcon from 'app/static/icons/lock-icon.svg';
import UserIcon from 'app/static/icons/user-icon.svg';

export const styles = {
    root: {
        width: '100%',
    },
    buttonBox: {
        marginTop: 20,
        width: '100%',
    },
};

interface Styles {
    root: string;
    buttonBox: string;
}

interface OwnProps {
    classes: Styles,
}

type Props = OwnProps & FormikProps<any>;

export const LoginFormValidationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required').min(2, 'Must be at least 2 symbols'),
    password: Yup.string().required('This field is required').min(2, 'Must be at least 2 symbols'),
});

const LoginForm = ({ classes }: Props) => (
    <Form className={classes.root} data-qa="login-form">
        <TextInputField
            name="username"
            placeholder="Username"
            prefix={UserIcon}
        />
        <TextInputField
            name="password"
            placeholder="Password"
            type="password"
            prefix={LoackIcon}
        />
        <div className={classes.buttonBox}>
            <Button type="submit">Log In</Button>
        </div>
    </Form>
);

export default injectSheet(styles)(LoginForm);
