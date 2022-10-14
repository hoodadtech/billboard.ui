import * as React from 'react';
import {Formik, Form} from 'formik';
import { Meta } from '@storybook/react';
import FormControl from '../control';

const meta: Meta = {
    title: 'Components/Textarea',
    component: FormControl,
};
export default meta;

export const _Textarea = (): React.ReactElement => (
    <Formik
        initialValues={{textarea: "hello world"}}
        onSubmit={(values, formikHelpers) => formikHelpers.setFieldValue('textarea', values)}
    >
        {() => (
            <Form>
                <FormControl
                    control="textarea"
                    name="textarea"
                    label="Hello world"
                />
            </Form>
        )}
    </Formik>
);
