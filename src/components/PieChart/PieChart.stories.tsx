import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from './PieChart';

const marketShareData = [
    { label: 'Product A', value: 35 },
    { label: 'Product B', value: 25 },
    { label: 'Product C', value: 20 },
    { label: 'Product D', value: 15 },
    { label: 'Others', value: 5 },
];

const expenseData = [
    { label: 'Salaries', value: 45000, color: 'var(--action-primary)' },
    { label: 'Marketing', value: 20000, color: 'var(--status-info)' },
    { label: 'Operations', value: 15000, color: 'var(--status-success)' },
    { label: 'R&D', value: 12000, color: 'var(--status-warning)' },
    { label: 'Other', value: 8000, color: 'var(--status-error)' },
];

const meta = {
    title: 'Components/PieChart',
    component: PieChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['pie', 'donut'],
        },
        showLabels: {
            control: 'boolean',
        },
        showPercentages: {
            control: 'boolean',
        },
        size: {
            control: 'number',
            min: 100,
            max: 400,
        },
    },
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pie: Story = {
    args: {
        data: marketShareData,
        variant: 'pie',
        showLabels: true,
        showPercentages: true,
    },
};

export const Donut: Story = {
    args: {
        data: marketShareData,
        variant: 'donut',
        showLabels: true,
        showPercentages: true,
    },
};

export const WithCustomColors: Story = {
    args: {
        data: expenseData,
        variant: 'donut',
        showLabels: true,
        showPercentages: true,
    },
};

export const NoPercentages: Story = {
    args: {
        data: marketShareData,
        variant: 'pie',
        showLabels: true,
        showPercentages: false,
    },
};

export const NoLabels: Story = {
    args: {
        data: marketShareData,
        variant: 'donut',
        showLabels: false,
    },
};

export const Large: Story = {
    args: {
        data: marketShareData,
        variant: 'donut',
        size: 300,
        showLabels: true,
        showPercentages: true,
    },
};

export const TwoSegments: Story = {
    args: {
        data: [
            { label: 'Completed', value: 75 },
            { label: 'Remaining', value: 25 },
        ],
        variant: 'donut',
        showLabels: true,
        showPercentages: true,
    },
};
