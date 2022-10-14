import { withDesign } from 'storybook-addon-designs';
import { Story, Meta } from '@storybook/react';
import * as React from 'react';
import {useArgs} from "@storybook/client-api";
import Accordion, { AccordionProps } from './accordion';
import ButtonCustom from '../button/index';

const meta: Meta = {
	title: 'Components/Accordion',
	component: Accordion,
	decorators: [withDesign],
};

export default meta;

const Template: Story<AccordionProps> = (args: any) => {
	const [{ isAccordionOpen }, updateArgs] = useArgs();
	const handleClose = () => updateArgs({ isAccordionOpen: !isAccordionOpen });

	return <Accordion {...args} onToggleAccordion={handleClose} />
};

export const Default = Template.bind({});

Default.args = {
	title: 'New Region',
	isAccordionOpen: true,
	onToggleAccordion: () => {
		if(Default.args) {
			Default.args.isAccordionOpen = false
		}
	},
	filters: <div className="flex gap-x-4">
		<ButtonCustom size="middle" variant={'secondary'} text="cancel" />
		<ButtonCustom size="middle" variant={'primary'} text="save" />
	</div>,
	children:
		'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum d',
};

Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=304%3A1294',
	},
};
