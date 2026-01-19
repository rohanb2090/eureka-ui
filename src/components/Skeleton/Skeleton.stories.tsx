import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'Components/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['text', 'circular', 'rectangular'],
        },
        width: {
            control: 'select',
            options: ['full', '3/4', '1/2', '1/4'],
        },
    },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        variant: 'text',
        width: 'full',
    },
};

export const MultipleLines: Story = {
    args: {
        variant: 'text',
        width: 'full',
        lines: 3,
    },
};

export const Circular: Story = {
    args: {
        variant: 'circular',
        width: '48px',
        height: '48px',
    },
};

export const Rectangular: Story = {
    args: {
        variant: 'rectangular',
        width: 'full',
        height: '200px',
    },
};

export const CardSkeleton: Story = {
    render: () => (
        <div className="space-y-4 w-full max-w-md">
            <div className="flex items-center gap-4">
                <Skeleton variant="circular" width="48px" height="48px" />
                <div className="flex-1 space-y-2">
                    <Skeleton variant="text" width="3/4" />
                    <Skeleton variant="text" width="1/2" />
                </div>
            </div>
            <Skeleton variant="rectangular" width="full" height="200px" />
            <Skeleton variant="text" lines={3} />
        </div>
    ),
};
