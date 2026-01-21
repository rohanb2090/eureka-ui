import type { Meta, StoryObj } from '@storybook/react';
import { GaugeChart } from './GaugeChart';

const meta: Meta<typeof GaugeChart> = {
    title: 'Data Visualization/GaugeChart',
    component: GaugeChart,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GaugeChart>;

export const Default: Story = {
    args: {
        label: 'System Load',
        value: 65,
        unit: '%',
    },
};

export const Critical: Story = {
    args: {
        label: 'Temperature',
        value: 92,
        max: 100,
        unit: '°C',
        thresholds: [
            { value: 0, color: '#51CF66' },
            { value: 70, color: '#FF922B' },
            { value: 90, color: '#FF6B6B' },
        ],
    },
};

export const Speedometer: Story = {
    args: {
        label: 'Current Speed',
        value: 120,
        min: 0,
        max: 240,
        unit: ' km/h',
        color: '#339AF0',
    },
};
