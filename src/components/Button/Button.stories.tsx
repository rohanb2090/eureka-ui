import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'destructive', 'ghost'],
            description: 'Visual variant indicating semantic intent',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Button size',
        },
        density: {
            control: 'select',
            options: ['compact', 'default'],
            description: 'Density mode (affects padding)',
        },
        isDisabled: {
            control: 'boolean',
            description: 'Disabled state (non-interactive)',
        },
        isLoading: {
            control: 'boolean',
            description: 'Loading state (blocks input, shows spinner)',
        },
        fullWidth: {
            control: 'boolean',
            description: 'Full width layout',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Action',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Action',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Delete',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost Action',
    },
};

export const Disabled: Story = {
    args: {
        variant: 'primary',
        isDisabled: true,
        children: 'Disabled Button',
    },
};

export const Loading: Story = {
    args: {
        variant: 'primary',
        isLoading: true,
        children: 'Processing...',
    },
};

export const Small: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Small Button',
    },
};

export const Large: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        children: 'Large Button',
    },
};

export const WithIcons: Story = {
    args: {
        variant: 'secondary',
        leftIcon: <span>→</span>,
        children: 'With Icon',
    },
};

export const FullWidth: Story = {
    args: {
        variant: 'primary',
        fullWidth: true,
        children: 'Full Width Button',
    },
    parameters: {
        layout: 'padded',
    },
};
