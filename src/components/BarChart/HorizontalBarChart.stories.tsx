import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalBarChart } from './HorizontalBarChart';

const meta: Meta<typeof HorizontalBarChart> = {
    title: 'Data Visualization/HorizontalBarChart',
    component: HorizontalBarChart,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HorizontalBarChart>;

export const Default: Story = {
    args: {
        data: [
            { label: 'Chrome', value: 65, color: '#339AF0' },
            { label: 'Safari', value: 18, color: '#51CF66' },
            { label: 'Firefox', value: 12, color: '#FF922B' },
            { label: 'Edge', value: 5, color: '#94D82D' },
        ],
        width: 500,
        height: 250,
    },
};

export const Performance: Story = {
    args: {
        data: [
            { label: 'LCP', value: 2.5, color: '#FF6B6B' },
            { label: 'FID', value: 100, color: '#51CF66' },
            { label: 'CLS', value: 0.1, color: '#339AF0' },
        ],
        maxValue: 300,
        width: 500,
        height: 200,
    },
};
