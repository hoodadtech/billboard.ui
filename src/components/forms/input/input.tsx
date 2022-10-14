import React from 'react';
import {Field, FieldProps} from 'formik';
import {Input} from 'antd';
import {InputProps} from 'antd/es/input';
import {FormikInputProps} from '../control';
import {InputStyle} from './input.style';
import {Label} from '../label/label';
import {CustomErrorMessage} from '../error-message/error-message';

export const _Input = ({field, ...rest}: InputProps & FieldProps): React.ReactElement => {
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
    delete rest?.form

    return (
        <Input {...field} {...rest} bordered/>
    );
}

export const FormikInput = ({
                                label,
                                name,
                                errorMessage,
                                control,
                                size,
                                fullWidth,
                                ...rest
                            }: FormikInputProps & InputProps): React.ReactElement => {
    const getSize = () => {
        if (size) {
            return size
        }

        if (rest.className?.includes('large')) {
            return "large"
        }
    }

    return (
        <InputStyle size={getSize()} fullWidth={fullWidth}>
            <Label label={label} htmlFor={name}/>
            <Field
                name={name}
                id={name}
                as={control}
                component={_Input}
                label={label}
                {...rest}
                className={`${rest.className || ''} ${errorMessage ? 'error' : ''}`}
            />
            <CustomErrorMessage errorMessage={errorMessage}/>
        </InputStyle>
    );
}
