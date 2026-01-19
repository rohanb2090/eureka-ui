import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from './LineChart';

const temperatureData = [
    { x: 'Mon', y: 22 },
    { x: 'Tue', y: 24 },
    { x: 'Wed', y: 19 },
    { x: 'Thu', y: 27 },
    { x: 'Fri', y: 25 },
    { x: 'Sat', y: 29 },
    { x: 'Sun', y: 23 },
];

const revenueData = [
    { x: 'Jan', y: 45000 },
    { x: 'Feb', y: 52000 },
    { x: 'Mar', y: 48000 },
    { x: 'Apr', y: 61000 },
    { x: 'May', y: 55000 },
    { x: 'Jun', y: 67000 },
];

const meta = {
    title: 'Components/LineChart',
    component: LineChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        smooth: {
            control: 'boolean',
        },
        showPoints: {
            control: 'boolean',
        },
        showGrid: {
            control: 'boolean',
        },
        showLabels: {
            control: 'boolean',
        },
        gridLines: {
            control: 'number',
            min: 2,
            max: 10,
        },
    },
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: temperatureData,
        showPoints: true,
        showGrid: true,
        showLabels: true,
    },
};

export const Smooth: Story = {
    args: {
        data: temperatureData,
        smooth: true,
        showPoints: true,
        showGrid: true,
        showLabels: true,
    },
};

export const WithoutPoints: Story = {
    args: {
        data: temperatureData,
        showPoints: false,
        showGrid: true,
        showLabels: true,
    },
};

export const Revenue: Story = {
    args: {
        data: revenueData,
        showPoints: true,
        showGrid: true,
        showLabels: true,
        lineColor: 'var(--status-success)',
        pointColor: 'var(--status-success)',
    },
};

export const NoGrid: Story = {
    args: {
        data: temperatureData,
        showPoints: true,
        showGrid: false,
        showLabels: true,
    },
};

export const SmoothNoPoints: Story = {
    args: {
        data: temperatureData,
        smooth: true,
        showPoints: false,
        showGrid: true,
        showLabels: true,
    },
};
