import type { Meta, StoryObj } from '@storybook/react';
import { MeterChart } from './MeterChart';

const meta: Meta<typeof MeterChart> = {
    title: 'Data Visualization/MeterChart',
    component: MeterChart,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MeterChart>;

export const Default: Story = {
    args: {
        label: 'Storage Usage',
        value: 45,
        max: 100,
        unit: 'GB',
    },
};

export const WithThresholds: Story = {
    args: {
        label: 'System CPU',
        value: 85,
        max: 100,
        unit: '%',
        thresholds: [
            { value: 0, color: '#51CF66', label: 'Healthy' },
            { value: 70, color: '#FF922B', label: 'Warning' },
            { value: 90, color: '#FF6B6B', label: 'Critical' },
        ],
    },
};

export const Progress: Story = {
    args: {
        label: 'Project Completion',
        value: 12,
        max: 20,
        unit: ' tasks',
        color: '#339AF0',
    },
};
