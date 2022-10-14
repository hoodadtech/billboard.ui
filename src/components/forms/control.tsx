import React from 'react';
import {
    SelectProps,
    RadioGroupProps,
    CheckboxProps,
    SwitchProps,
    CheckboxOptionType,
    AutoCompleteProps,
} from "antd";
import {InputProps, TextAreaProps} from "antd/es/input";
import {DefaultOptionType} from "rc-cascader";
import {SizeType} from "antd/es/config-provider/SizeContext";

import {FormikTextarea} from './textarea/textarea';
import {FormikInput} from './input/input';
import {FormikSelect} from "./select/select";
import {FormikRadio} from "./radio/radio";
import {FormikCheckbox} from "./checkbox/checkbox";
import {FormikSwitch} from "./switch/switch";
import {FormikSearch} from "./search/search";
import {FormikPassword} from './password/password';
import {FormikAutoComplete} from './auto-complete/auto-complete';

export interface FormikInputProps {
    errorMessage?: any;
    type?: string
    label?: string;
    name?: string;
    control?: string;
    options?: DefaultOptionType[] & (string | number | CheckboxOptionType | { label: string, value: string })[];
    size?: SizeType;
    fullWidth?: boolean
}

interface FormControlProps extends FormikInputProps {
    control: 'textarea' | 'input' | 'select' | 'search' | 'radio' | 'checkbox' | 'switch' | 'password' |'autoComplete';
}

const FormControl = (
    {
        control,
        ...rest
    }: FormControlProps & TextAreaProps & InputProps &
        SelectProps & RadioGroupProps & CheckboxProps & SwitchProps & AutoCompleteProps
): React.ReactElement | null => {
    switch (control) {
        case 'textarea':
            return <FormikTextarea {...rest} />;
        case 'input':
            return <FormikInput {...rest} control={control}/>;
        case 'select':
            return <FormikSelect {...rest} />;
        case 'radio':
            return <FormikRadio {...rest} />;
        case 'checkbox':
            return <FormikCheckbox {...rest} />;
        case 'switch':
            return <FormikSwitch {...rest} />;
        case 'search':
            return <FormikSearch {...rest} />;
        case 'password':
            return <FormikPassword {...rest} />;
        case 'autoComplete':
            return <FormikAutoComplete {...rest} />;
        default:
            return null;
    }
};

export default FormControl;
