import * as React from 'react';
import { FormikProps, Formik } from 'formik';
import { ThemeProvider } from 'react-jss';
import { render, fireEvent, wait } from '@testing-library/react';

import theme from 'app/theme';
import LoginForm, { LoginFormValidationSchema } from './login-form';

describe('<LoginForm />', () => {
    let container: any;
    let loginRequestMock: any;

    beforeEach(() => {
        loginRequestMock = jest.fn();
        function renderForm(props: FormikProps<any>) {
            return <LoginForm {...props} />;
        }

        const initialValues = {
            username: '',
            password: '',
        };

        container = render(
            <ThemeProvider theme={theme}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={loginRequestMock}
                    render={renderForm}
                    validationSchema={LoginFormValidationSchema}
                />
            </ThemeProvider>,
        );
    });

    it('renders a login form', () => {
        expect(container.getByTestId('login-form')).toBeTruthy();
    });

    it('renders username field', () => {
        expect(document.querySelector('[name="username"]')).toBeTruthy();
    });

    it('renders password field', () => {
        expect(document.querySelector('[name="password"]')).toBeTruthy();
    });

    it('does not call submit function if fields are empty', async () => {
        fireEvent.click(container.getByText('Log In'));
        await wait(() => expect(loginRequestMock).toBeCalledTimes(0));
    });

    it('call submit function if required fields are filled', async () => {
        fireEvent.change(container.getByPlaceholderText('Username'), { target: { value: 'username' } });
        fireEvent.change(container.getByPlaceholderText('Password'), { target: { value: 'password' } });
        fireEvent.click(container.getByText('Log In'));
        container.getByPlaceholderText('Username');
        await wait(() => expect(loginRequestMock).toBeCalledTimes(1));
    });
});
