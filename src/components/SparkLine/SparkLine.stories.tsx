import type { Meta, StoryObj } from '@storybook/react';
import { SparkLine } from './SparkLine';

const upTrend = [20, 25, 22, 30, 28, 35, 40];
const downTrend = [40, 38, 35, 30, 28, 25, 20];
const volatile = [25, 35, 20, 40, 15, 38, 30];
const stable = [30, 31, 29, 30, 32, 30, 31];

const meta = {
    title: 'Components/SparkLine',
    component: SparkLine,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        showDot: {
            control: 'boolean',
        },
        width: {
            control: 'number',
            min: 50,
            max: 200,
        },
        height: {
            control: 'number',
            min: 20,
            max: 60,
        },
    },
} satisfies Meta<typeof SparkLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UpTrend: Story = {
    args: {
        data: upTrend,
        showDot: true,
        lineColor: 'var(--status-success)',
        dotColor: 'var(--status-success)',
    },
};

export const DownTrend: Story = {
    args: {
        data: downTrend,
        showDot: true,
        lineColor: 'var(--status-error)',
        dotColor: 'var(--status-error)',
    },
};

export const Volatile: Story = {
    args: {
        data: volatile,
        showDot: true,
        lineColor: 'var(--status-warning)',
        dotColor: 'var(--status-warning)',
    },
};

export const Stable: Story = {
    args: {
        data: stable,
        showDot: true,
    },
};

export const NoDot: Story = {
    args: {
        data: upTrend,
        showDot: false,
    },
};

export const Large: Story = {
    args: {
        data: upTrend,
        width: 150,
        height: 50,
        showDot: true,
    },
};

export const Small: Story = {
    args: {
        data: upTrend,
        width: 60,
        height: 24,
        showDot: true,
    },
};

export const InlineExample: Story = {
    args: {
        data: [45, 52, 48, 61, 55, 67],
        width: 60,
        height: 20,
        lineColor: 'var(--status-success)',
    },
    render: (args) => (
        <div className="flex items-center gap-2">
            <span className="text-sm text-text-secondary">Revenue:</span>
            <SparkLine {...args} />
            <span className="text-sm font-semibold text-text-primary">$67k</span>
        </div>
    ),
};
