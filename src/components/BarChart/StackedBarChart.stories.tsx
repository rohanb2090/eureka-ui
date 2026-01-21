import type { Meta, StoryObj } from '@storybook/react';
import { StackedBarChart } from './StackedBarChart';

const meta: Meta<typeof StackedBarChart> = {
    title: 'Data Visualization/StackedBarChart',
    component: StackedBarChart,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StackedBarChart>;

export const Default: Story = {
    args: {
        data: [
            {
                label: 'Q1',
                values: [
                    { id: '1', value: 40, label: 'Product A', color: '#339AF0' },
                    { id: '2', value: 30, label: 'Product B', color: '#51CF66' },
                    { id: '3', value: 20, label: 'Product C', color: '#FF922B' },
                ],
            },
            {
                label: 'Q2',
                values: [
                    { id: '1', value: 50, label: 'Product A', color: '#339AF0' },
                    { id: '2', value: 25, label: 'Product B', color: '#51CF66' },
                    { id: '3', value: 35, label: 'Product C', color: '#FF922B' },
                ],
            },
            {
                label: 'Q3',
                values: [
                    { id: '1', value: 45, label: 'Product A', color: '#339AF0' },
                    { id: '2', value: 40, label: 'Product B', color: '#51CF66' },
                    { id: '3', value: 15, label: 'Product C', color: '#FF922B' },
                ],
            },
        ],
    },
};
