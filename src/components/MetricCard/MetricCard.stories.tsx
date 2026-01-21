import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './MetricCard';

const meta: Meta<typeof MetricCard> = {
    title: 'Data Visualization/MetricCard',
    component: MetricCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

export const Default: Story = {
    args: {
        label: 'Total Revenue',
        value: '45,231.89',
        unit: '$',
        trend: {
            value: '20.1%',
            direction: 'up',
            label: 'from last month',
        },
    },
};

export const NegativeTrend: Story = {
    args: {
        label: 'Active Users',
        value: '2,350',
        trend: {
            value: '12%',
            direction: 'down',
            label: 'vs yesterday',
        },
    },
};

export const NeutralTrend: Story = {
    args: {
        label: 'System Load',
        value: '64',
        unit: '%',
        trend: {
            value: 'Stable',
            direction: 'neutral',
        },
    },
};

export const Simple: Story = {
    args: {
        label: 'Active Projects',
        value: '12',
        helperText: '3 pending approval',
    },
};
