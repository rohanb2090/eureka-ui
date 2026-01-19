import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        isDisabled: {
            control: 'boolean',
        },
        isReadOnly: {
            control: 'boolean',
        },
        isInvalid: {
            control: 'boolean',
        },
        isIndeterminate: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Checked: Story = {
    args: {
        defaultChecked: true,
    },
};

export const Indeterminate: Story = {
    args: {
        isIndeterminate: true,
    },
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        defaultChecked: true,
        isDisabled: true,
    },
};

export const Invalid: Story = {
    args: {
        isInvalid: true,
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
};
