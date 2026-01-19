import type { Meta, StoryObj } from '@storybook/react';
import { Surface, Card } from './Surface';

const meta = {
    title: 'Components/Surface',
    component: Surface,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['page', 'panel', 'card', 'inset', 'elevated'],
        },
        padding: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg'],
        },
        as: {
            control: 'select',
            options: ['div', 'section', 'article', 'aside'],
        },
    },
} satisfies Meta<typeof Surface>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
    args: {
        variant: 'page',
        children: 'Page surface (matches page background)',
    },
};

export const Panel: Story = {
    args: {
        variant: 'panel',
        children: 'Panel surface with border',
    },
};

export const CardVariant: Story = {
    args: {
        variant: 'card',
        children: 'Card surface with border',
    },
};

export const Inset: Story = {
    args: {
        variant: 'inset',
        children: 'Inset surface (subtle background)',
    },
};

export const Elevated: Story = {
    args: {
        variant: 'elevated',
        children: 'Elevated surface with shadow',
    },
};

export const NoPadding: Story = {
    args: {
        variant: 'card',
        padding: 'none',
        children: 'Card with no padding',
    },
};

export const LargePadding: Story = {
    args: {
        variant: 'card',
        padding: 'lg',
        children: 'Card with large padding',
    },
};

export const ComplexCard: Story = {
    args: {
        children: null
    },
    render: () => (
        <Card variant="card" padding="lg" className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">Card Title</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
                This is a more complex card example with multiple content sections.
            </p>
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-[var(--action-primary)] text-[var(--action-text-on-primary)] rounded">
                    Action
                </button>
                <button className="px-4 py-2 border border-[var(--border-default)] rounded">
                    Cancel
                </button>
            </div>
        </Card>
    ),
};
