import type { Meta, StoryObj } from '@storybook/react';
import { InlineAlert } from './InlineAlert';

const meta = {
    title: 'Components/InlineAlert',
    component: InlineAlert,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        severity: {
            control: 'select',
            options: ['info', 'success', 'warning', 'error'],
        },
    },
} satisfies Meta<typeof InlineAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
    args: {
        severity: 'info',
        message: 'This is an informational message.',
    },
};

export const Success: Story = {
    args: {
        severity: 'success',
        message: 'Operation completed successfully.',
    },
};

export const Warning: Story = {
    args: {
        severity: 'warning',
        message: 'Please review this cautionary notice.',
    },
};

export const Error: Story = {
    args: {
        severity: 'error',
        message: 'An error occurred. Please try again.',
    },
};

export const WithTitle: Story = {
    args: {
        severity: 'info',
        title: 'Important Information',
        message: 'This alert has both a title and a message.',
    },
};

export const WithAction: Story = {
    args: {
        severity: 'warning',
        message: 'You have unsaved changes.',
        action: {
            label: 'Save now',
            onClick: () => alert('Saving...'),
        },
    },
};

export const Dismissible: Story = {
    args: {
        severity: 'info',
        message: 'This alert can be dismissed.',
        onDismiss: () => alert('Dismissed'),
    },
};
