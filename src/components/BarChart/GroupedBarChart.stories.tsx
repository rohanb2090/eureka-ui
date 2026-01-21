import type { Meta, StoryObj } from '@storybook/react';
import { GroupedBarChart } from './GroupedBarChart';

const meta: Meta<typeof GroupedBarChart> = {
    title: 'Data Visualization/GroupedBarChart',
    component: GroupedBarChart,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GroupedBarChart>;

export const Default: Story = {
    args: {
        data: [
            {
                label: 'USA',
                values: [
                    { id: '1', value: 80, label: 'Desktop', color: '#339AF0' },
                    { id: '2', value: 65, label: 'Mobile', color: '#51CF66' },
                ],
            },
            {
                label: 'UK',
                values: [
                    { id: '1', value: 45, label: 'Desktop', color: '#339AF0' },
                    { id: '2', value: 55, label: 'Mobile', color: '#51CF66' },
                ],
            },
            {
                label: 'Germany',
                values: [
                    { id: '1', value: 60, label: 'Desktop', color: '#339AF0' },
                    { id: '2', value: 40, label: 'Mobile', color: '#51CF66' },
                ],
            },
        ],
    },
};
