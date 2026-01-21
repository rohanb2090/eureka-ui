import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button';
import { useState } from 'react';

const ModalDemo = (args: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="p-8">
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
                {...args}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button onClick={() => setIsOpen(false)}>Save Changes</Button>
                    </>
                }
            >
                <div className="space-y-4">
                    <p>This is a portal-based modal component with sharp edges, adhering to the Eureka design system.</p>
                    <p>It supports various sizes, has an overlay backdrop, and handles Escape key for closing.</p>
                    <div className="h-64 bg-bg-subtle border border-border-subtle flex items-center justify-center italic text-text-tertiary">
                        Placeholder for complex content
                    </div>
                </div>
            </Modal>
        </div>
    );
};

const meta = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {} as any,
    render: (args) => <ModalDemo {...args} size="sm" title="Small Modal" />,
};

export const Medium: Story = {
    args: {} as any,
    render: (args) => <ModalDemo {...args} size="md" title="Standard Modal" />,
};

export const Large: Story = {
    args: {} as any,
    render: (args) => <ModalDemo {...args} size="lg" title="Large Modal" />,
};

export const ExtraLarge: Story = {
    args: {} as any,
    render: (args) => <ModalDemo {...args} size="xl" title="Extra Large Modal" />,
};

export const FullScreen: Story = {
    args: {} as any,
    render: (args) => <ModalDemo {...args} size="full" title="Full Screen Modal" />,
};
