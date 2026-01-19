import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';

const meta = {
    title: 'Components/EmptyState',
    component: EmptyState,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['no-data', 'filtered', 'error', 'permission'],
        },
    },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoData: Story = {
    args: {
        type: 'no-data',
        icon: '📭',
        title: 'No items found',
        description: 'Get started by creating your first item.',
    },
};

export const WithAction: Story = {
    args: {
        type: 'no-data',
        icon: '📋',
        title: 'No projects yet',
        description: 'Create your first project to get started.',
        action: {
            label: 'Create Project',
            onClick: () => alert('Creating project...'),
        },
    },
};

export const FilteredNoResults: Story = {
    args: {
        type: 'filtered',
        icon: '🔍',
        title: 'No results found',
        description: 'Try adjusting your search or filter criteria.',
        action: {
            label: 'Clear filters',
            onClick: () => alert('Clearing filters...'),
        },
    },
};

export const Error: Story = {
    args: {
        type: 'error',
        icon: '⚠️',
        title: 'Failed to load data',
        description: 'There was a problem loading this content.',
        action: {
            label: 'Try again',
            onClick: () => alert('Retrying...'),
        },
    },
};

export const Permission: Story = {
    args: {
        type: 'permission',
        icon: '🔒',
        title: 'Access denied',
        description: 'You don\'t have permission to view this content.',
    },
};

export const WithSecondaryAction: Story = {
    args: {
        type: 'no-data',
        icon: '📭',
        title: 'No items found',
        description: 'Get started by creating your first item.',
        action: {
            label: 'Create Item',
            onClick: () => alert('Creating...'),
        },
        secondaryAction: {
            label: 'Learn more',
            onClick: () => alert('Opening docs...'),
        },
    },
};
