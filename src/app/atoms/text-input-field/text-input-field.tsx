import * as React from 'react';
import injectSheet from 'react-jss';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

import { Theme } from 'app/types';
import ErrorMessageStyled from 'app/atoms/error-message';

const styles = (theme: Theme) => ({
    root: {
        '&:not(:last-of-type)': {
            marginBottom: 20,
        },
        position: 'relative',
    },
    input: {
        'display': 'block',
        'width': '100%',
        'height': 56,
        'border': 'none',
        'borderRadius': theme.shape.borderRadius,
        'backgroundColor': theme.palette.background.main,
        'fontSize': 16,
        'fontWeight': 300,
        'color': theme.palette.text.secondary.main,
        'paddingLeft': 25,
        'outline': 'none',
        'fontFamily': 'inherit',
        '&::placeholder': {
            color: theme.palette.text.secondary.main,
        },
        '&:focus': {
            color: theme.palette.text.secondary.dark,
        },
    },
    inputWithPrefix: {
        'paddingLeft': 54,
    },
    prefix: {
        position: 'absolute',
        height: '100%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        width: 54,
        '& svg': {
            '& path': {
                fill: theme.palette.grey[200],
            }
        },
    }
});

interface Styles {
    root: string;
    input: string;
    inputWithPrefix: string;
}

interface OwnProps {
    classes: Styles;
    placeholder: string;
    type?: 'text' | 'number' | 'password',
    name: string,
    disabled?: boolean,
    prefix?: React.ElementType,
}

type Props = OwnProps;

const TextInputField = ({
    classes,
    placeholder,
    type = 'text',
    name,
    disabled,
    prefix: Prefix,
}: Props) => (
    <Field name={name}>
        {({ field }: any) => (
            <div className={classes.root}>
                {Prefix &&
                    <div className={classes.prefix}>
                        <Prefix />
                    </div>}
                <input
                    className={classNames(classes.input, { [classes.inputWithPrefix]: !!Prefix })}
                    placeholder={placeholder}
                    disabled={disabled}
                    type={type}
                    value={field.value}
                    name={field.name}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                />
                <ErrorMessage name={field.name}>
                    {msg => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
                </ErrorMessage>
            </div>
        )}
    </Field>
);

export default injectSheet(styles)(TextInputField);
