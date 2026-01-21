import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../components/Badge/Badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['neutral', 'success', 'warning', 'error', 'info', 'primary'],
        },
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
        },
        rounded: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        label: 'Badge',
        variant: 'neutral',
    },
};

export const Primary: Story = {
    args: {
        label: 'New Feature',
        variant: 'primary',
    },
};

export const Success: Story = {
    args: {
        label: 'Completed',
        variant: 'success',
    },
};

export const Warning: Story = {
    args: {
        label: 'Pending',
        variant: 'warning',
    },
};

export const Error: Story = {
    args: {
        label: 'Failed',
        variant: 'error',
    },
};

export const Info: Story = {
    args: {
        label: 'In Progress',
        variant: 'info',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Badge size="sm" label="Small" />
            <Badge size="md" label="Medium" />
            <Badge size="lg" label="Large" />
        </div>
    ),
};

export const Rounded: Story = {
    args: {
        label: 'Rounded Badge',
        rounded: true,
    },
};
