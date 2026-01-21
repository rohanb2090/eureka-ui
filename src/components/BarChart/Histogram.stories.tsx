import type { Meta, StoryObj } from '@storybook/react';
import { Histogram } from './Histogram';

const meta: Meta<typeof Histogram> = {
    title: 'Data Visualization/Histogram',
    component: Histogram,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Histogram>;

export const Default: Story = {
    args: {
        data: [
            { label: '0-10', value: 12, color: '#339AF0' },
            { label: '10-20', value: 45, color: '#339AF0' },
            { label: '20-30', value: 78, color: '#339AF0' },
            { label: '30-40', value: 54, color: '#339AF0' },
            { label: '40-50', value: 23, color: '#339AF0' },
        ],
        width: 500,
        height: 300,
    },
};
