import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './BarChart';

const salesData = [
    { label: 'Jan', value: 45 },
    { label: 'Feb', value: 52 },
    { label: 'Mar', value: 61 },
    { label: 'Apr', value: 48 },
    { label: 'May', value: 67 },
    { label: 'Jun', value: 71 },
];

const categoryData = [
    { label: 'Electronics', value: 234, color: 'var(--status-info)' },
    { label: 'Clothing', value: 189, color: 'var(--status-success)' },
    { label: 'Food', value: 156, color: 'var(--status-warning)' },
    { label: 'Books', value: 98, color: 'var(--action-primary)' },
];

const meta = {
    title: 'Components/BarChart',
    component: BarChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: 'select',
            options: ['vertical', 'horizontal'],
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
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
    args: {
        data: salesData,
        orientation: 'vertical',
        showGrid: true,
        showLabels: true,
    },
};

export const Horizontal: Story = {
    args: {
        data: salesData,
        orientation: 'horizontal',
        showGrid: true,
        showLabels: true,
    },
};

export const WithColors: Story = {
    args: {
        data: categoryData,
        orientation: 'vertical',
        showGrid: true,
        showLabels: true,
    },
};

export const NoGrid: Story = {
    args: {
        data: salesData,
        orientation: 'vertical',
        showGrid: false,
        showLabels: true,
    },
};

export const NoLabels: Story = {
    args: {
        data: salesData,
        orientation: 'vertical',
        showGrid: true,
        showLabels: false,
    },
};

export const CustomMaxValue: Story = {
    args: {
        data: salesData,
        orientation: 'vertical',
        maxValue: 100,
        showGrid: true,
        showLabels: true,
    },
};

export const SmallDataset: Story = {
    args: {
        data: [
            { label: 'A', value: 25 },
            { label: 'B', value: 18 },
            { label: 'C', value: 32 },
        ],
        orientation: 'vertical',
        showGrid: true,
        showLabels: true,
    },
};
