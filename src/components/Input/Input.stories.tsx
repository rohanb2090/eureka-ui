import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number'],
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
        isRequired: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
    },
};

export const WithValue: Story = {
    args: {
        defaultValue: 'Default value',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled input',
        isDisabled: true,
    },
};

export const ReadOnly: Story = {
    args: {
        value: 'Read-only value',
        isReadOnly: true,
    },
};

export const Invalid: Story = {
    args: {
        placeholder: 'Invalid input',
        isInvalid: true,
        value: 'invalid@',
    },
};

export const Required: Story = {
    args: {
        placeholder: 'Required field',
        isRequired: true,
    },
};

export const Password: Story = {
    args: {
        type: 'password',
        placeholder: 'Enter password',
    },
};

export const Email: Story = {
    args: {
        type: 'email',
        placeholder: 'email@example.com',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        placeholder: 'Small input',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        placeholder: 'Large input',
    },
};
