import type { Meta, StoryObj } from '@storybook/react';
import { ProgressRing } from './ProgressRing';

const meta = {
    title: 'Components/ProgressRing',
    component: ProgressRing,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: 'number',
            min: 0,
            max: 100,
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        showLabel: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof ProgressRing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        value: 65,
        size: 'sm',
        showLabel: true,
    },
};

export const Medium: Story = {
    args: {
        value: 75,
        size: 'md',
        showLabel: true,
    },
};

export const Large: Story = {
    args: {
        value: 85,
        size: 'lg',
        showLabel: true,
    },
};

export const Success: Story = {
    args: {
        value: 100,
        size: 'md',
        color: 'var(--status-success)',
        showLabel: true,
    },
};

export const Warning: Story = {
    args: {
        value: 45,
        size: 'md',
        color: 'var(--status-warning)',
        showLabel: true,
    },
};

export const Error: Story = {
    args: {
        value: 25,
        size: 'md',
        color: 'var(--status-error)',
        showLabel: true,
    },
};

export const CustomLabel: Story = {
    args: {
        value: 67,
        size: 'lg',
        showLabel: true,
        label: '2/3',
    },
};

export const NoLabel: Story = {
    args: {
        value: 50,
        size: 'md',
        showLabel: false,
    },
};

export const AlmostComplete: Story = {
    args: {
        value: 95,
        size: 'lg',
        color: 'var(--status-success)',
        showLabel: true,
    },
};

export const JustStarted: Story = {
    args: {
        value: 5,
        size: 'md',
        showLabel: true,
    },
};
