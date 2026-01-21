import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../components/Avatar/Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl'],
        },
        shape: {
            control: 'radio',
            options: ['circle', 'square'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
    args: {
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        alt: 'Tom Cook',
        fallback: 'TC',
    },
};

export const Fallback: Story = {
    args: {
        src: 'invalid-url',
        alt: 'Tom Cook',
        fallback: 'TC',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-end gap-4">
            <Avatar size="sm" fallback="SM" />
            <Avatar size="md" fallback="MD" />
            <Avatar size="lg" fallback="LG" />
            <Avatar size="xl" fallback="XL" />
        </div>
    ),
};

export const Square: Story = {
    args: {
        shape: 'square',
        fallback: 'SQ',
        size: 'lg',
    },
};
