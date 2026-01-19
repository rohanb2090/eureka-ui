import type { Meta, StoryObj } from '@storybook/react';
import { Dashboard } from './Dashboard';

const meta = {
    title: 'Examples/Dashboard',
    component: Dashboard,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isLoading: false,
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
