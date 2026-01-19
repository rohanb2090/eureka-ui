import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4', isDisabled: true },
];

const meta = {
    title: 'Components/Select',
    component: Select,
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
        isInvalid: {
            control: 'boolean',
        },
        isRequired: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        options,
        placeholder: 'Select an option',
    },
};

export const WithDefaultValue: Story = {
    args: {
        options,
        defaultValue: '2',
    },
};

export const Disabled: Story = {
    args: {
        options,
        placeholder: 'Disabled select',
        isDisabled: true,
    },
};

export const Invalid: Story = {
    args: {
        options,
        isInvalid: true,
    },
};

export const Required: Story = {
    args: {
        options,
        placeholder: 'Required field',
        isRequired: true,
    },
};

export const Small: Story = {
    args: {
        options,
        size: 'sm',
        placeholder: 'Small select',
    },
};

export const Large: Story = {
    args: {
        options,
        size: 'lg',
        placeholder: 'Large select',
    },
};
