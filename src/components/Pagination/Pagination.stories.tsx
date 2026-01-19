import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta = {
    title: 'Components/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['page', 'cursor'],
        },
        isDisabled: {
            control: 'boolean',
        },
        showPageNumbers: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageBased: Story = {
    args: {
        type: 'page',
        totalItems: 100,
        pageSize: 10,
        defaultPage: 1,
    },
};

export const CurrentPageMiddle: Story = {
    args: {
        type: 'page',
        totalItems: 100,
        pageSize: 10,
        defaultPage: 5,
    },
};

export const CursorBased: Story = {
    args: {
        type: 'cursor',
        hasNextPage: true,
        hasPreviousPage: true,
    },
};

export const Disabled: Story = {
    args: {
        type: 'page',
        totalItems: 100,
        pageSize: 10,
        defaultPage: 1,
        isDisabled: true,
    },
};

export const WithoutPageNumbers: Story = {
    args: {
        type: 'page',
        totalItems: 100,
        pageSize: 10,
        defaultPage: 1,
        showPageNumbers: false,
    },
};
