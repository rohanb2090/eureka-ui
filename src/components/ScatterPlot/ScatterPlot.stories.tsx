import type { Meta, StoryObj } from '@storybook/react';
import { ScatterPlot } from './ScatterPlot';

const meta: Meta<typeof ScatterPlot> = {
    title: 'Data Visualization/ScatterPlot',
    component: ScatterPlot,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScatterPlot>;

export const Default: Story = {
    args: {
        data: [
            { x: 2, y: 5, label: 'A', color: '#339AF0' },
            { x: 4, y: 8, label: 'B', color: '#339AF0' },
            { x: 6, y: 3, label: 'C', color: '#339AF0' },
            { x: 8, y: 7, label: 'D', color: '#339AF0' },
            { x: 3, y: 9, label: 'E', color: '#339AF0' },
            { x: 7, y: 4, label: 'F', color: '#339AF0' },
        ],
        xLabel: 'Time (s)',
        yLabel: 'Velocity (m/s)',
        xMin: 0,
        xMax: 10,
        yMin: 0,
        yMax: 10,
    },
};

export const Bubble: Story = {
    args: {
        data: [
            { x: 10, y: 20, size: 8, label: 'Large', color: '#FF6B6B' },
            { x: 40, y: 60, size: 15, label: 'X-Large', color: '#51CF66' },
            { x: 70, y: 30, size: 5, label: 'Small', color: '#339AF0' },
            { x: 90, y: 80, size: 12, label: 'Large', color: '#FF922B' },
        ],
        xMin: 0,
        xMax: 100,
        yMin: 0,
        yMax: 100,
        xLabel: 'Market Share',
        yLabel: 'Growth Rate',
    },
};
