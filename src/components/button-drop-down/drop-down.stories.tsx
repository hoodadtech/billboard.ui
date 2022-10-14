import * as React from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withDesign} from 'storybook-addon-designs';

import CustomDropDown, {DropdownProps} from './drop-down';

const meta: Meta = {
    title: 'Components/Button-dropDown',
    component: CustomDropDown,
    argTypes: {
        onFocus: action('Focused'),
    },
    decorators: [withDesign],
};

export default meta;

const Template: Story<DropdownProps> = (args: any) => <CustomDropDown {...args} />;
export const Default = Template.bind({});

Default.args = {
    text: 'Hello world',
    placement: "bottomLeft",
    menu: [
        {
            key:"first-item",
            title:"First Item"
        },
        {
            key:"second-item",
            title:"Second Item"
        },
        {
            key:"third-item",
            title:"Third Item"
        },
    ],
    onSelectItem: (key: string) => {
        // eslint-disable-next-line no-console
        console.log('onSelectItem:',key)
    }
};
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Tfxj5lgugfkT6snH4o4mjS/Armani-Dashboard?node-id=43%3A837',
    },
};
