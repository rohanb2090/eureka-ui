import type { Meta, StoryObj } from '@storybook/react';
import { DonutChart } from './DonutChart';

const meta: Meta<typeof DonutChart> = {
    title: 'Data Visualization/DonutChart',
    component: DonutChart,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

export const Default: Story = {
    args: {
        data: [
            { label: 'Cloud Services', value: 45, color: '#339AF0' },
            { label: 'On-Premise', value: 25, color: '#51CF66' },
            { label: 'Hybrid', value: 30, color: '#FF922B' },
        ],
        size: 300,
    },
};

export const Security: Story = {
    args: {
        data: [
            { label: 'Passed', value: 85, color: '#51CF66' },
            { label: 'Failed', value: 5, color: '#FF6B6B' },
            { label: 'Warning', value: 10, color: '#FF922B' },
        ],
        size: 250,
    },
};
