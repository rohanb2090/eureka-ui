import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
];

const columns = [
    { id: 'name', header: 'Name', isSortable: true },
    { id: 'email', header: 'Email', isSortable: true },
    { id: 'role', header: 'Role', isSortable: false },
];

const meta = {
    title: 'Components/Table',
    component: Table,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        selectable: {
            control: 'boolean',
            description: 'Enable row selection',
        },
        striped: {
            control: 'boolean',
            description: 'Striped row background',
        },
    },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: sampleData,
        columns,
    },
};

export const Sortable: Story = {
    args: {
        data: sampleData,
        columns,
    },
};

export const Selectable: Story = {
    args: {
        data: sampleData,
        columns,
        selectable: true,
    },
};

export const Striped: Story = {
    args: {
        data: sampleData,
        columns,
        striped: true,
    },
};

export const SelectableStriped: Story = {
    args: {
        data: sampleData,
        columns,
        selectable: true,
        striped: true,
    },
};

export const Empty: Story = {
    args: {
        data: [],
        columns,
    },
};
