import type { Meta, StoryObj } from '@storybook/react';
import { AreaChart } from './AreaChart';

const trafficData = [
    { x: '00:00', y: 120 },
    { x: '04:00', y: 80 },
    { x: '08:00', y: 240 },
    { x: '12:00', y: 380 },
    { x: '16:00', y: 320 },
    { x: '20:00', y: 200 },
    { x: '23:59', y: 150 },
];

const salesData = [
    { x: 'Jan', y: 4500 },
    { x: 'Feb', y: 5200 },
    { x: 'Mar', y: 4800 },
    { x: 'Apr', y: 6100 },
    { x: 'May', y: 5500 },
    { x: 'Jun', y: 6700 },
];

const meta = {
    title: 'Components/AreaChart',
    component: AreaChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        smooth: {
            control: 'boolean',
        },
        showGrid: {
            control: 'boolean',
        },
        showLabels: {
            control: 'boolean',
        },
        fillOpacity: {
            control: 'number',
            min: 0,
            max: 1,
            step: 0.1,
        },
    },
} satisfies Meta<typeof AreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: trafficData,
        showGrid: true,
        showLabels: true,
    },
};

export const Smooth: Story = {
    args: {
        data: trafficData,
        smooth: true,
        showGrid: true,
        showLabels: true,
    },
};

export const Sales: Story = {
    args: {
        data: salesData,
        fillColor: 'var(--status-success)',
        lineColor: 'var(--status-success)',
        fillOpacity: 0.3,
        showGrid: true,
        showLabels: true,
    },
};

export const HighOpacity: Story = {
    args: {
        data: trafficData,
        fillOpacity: 0.5,
        smooth: true,
        showGrid: true,
        showLabels: true,
    },
};

export const NoGrid: Story = {
    args: {
        data: trafficData,
        smooth: true,
        showGrid: false,
        showLabels: true,
    },
};

export const Warning: Story = {
    args: {
        data: trafficData,
        fillColor: 'var(--status-warning)',
        lineColor: 'var(--status-warning)',
        fillOpacity: 0.25,
        smooth: true,
        showGrid: true,
        showLabels: true,
    },
};
