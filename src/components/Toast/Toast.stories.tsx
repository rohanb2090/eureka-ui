import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from './Toast';
import { Button } from '../Button';

function ToastDemo() {
    const { show } = useToast();

    return (
        <div className="flex flex-col gap-4">
            <Button onClick={() => show({ message: 'This is an info toast', severity: 'info' })}>
                Show Info Toast
            </Button>
            <Button
                onClick={() => show({ message: 'Successfully saved!', severity: 'success' })}
                variant="secondary"
            >
                Show Success Toast
            </Button>
            <Button
                onClick={() => show({ message: 'Warning: Check your input', severity: 'warning' })}
                variant="secondary"
            >
                Show Warning Toast
            </Button>
            <Button
                onClick={() => show({ message: 'Error: Something went wrong', severity: 'error' })}
                variant="destructive"
            >
                Show Error Toast
            </Button>
            <Button
                onClick={() => show({
                    message: 'Item deleted',
                    severity: 'info',
                    action: { label: 'Undo', onClick: () => alert('Undoing...') }
                })}
                variant="ghost"
            >
                Show Toast with Action
            </Button>
        </div>
    );
}

const meta = {
    title: 'Components/Toast',
    component: ToastProvider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: 'select',
            options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
        },
    },
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
    render: (args) => (
        <ToastProvider {...args}>
            <ToastDemo />
        </ToastProvider>
    ),
    args: {
        position: 'bottom-right',
    },
};

export const TopRight: Story = {
    render: (args) => (
        <ToastProvider {...args}>
            <ToastDemo />
        </ToastProvider>
    ),
    args: {
        position: 'top-right',
    },
};

export const BottomCenter: Story = {
    render: (args) => (
        <ToastProvider {...args}>
            <ToastDemo />
        </ToastProvider>
    ),
    args: {
        position: 'bottom-center',
    },
};
