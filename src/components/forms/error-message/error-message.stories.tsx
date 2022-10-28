import * as React from 'react';
import { Meta } from '@storybook/react';
import ErrorMessage from './error-message';

const meta: Meta = {
	title: 'Components/ErrorMessage',
	component: ErrorMessage,
};

export default meta;

export const _Default = (): React.ReactElement => <ErrorMessage errorMessage="text" />;
