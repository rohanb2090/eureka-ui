import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/Tabs/Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () => (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="p-4 border border-border-subtle mt-2">
                <h3 className="text-lg font-medium">Account</h3>
                <p className="text-text-secondary">Make changes to your account here.</p>
            </TabsContent>
            <TabsContent value="password" className="p-4 border border-border-subtle mt-2">
                <h3 className="text-lg font-medium">Password</h3>
                <p className="text-text-secondary">Change your password here.</p>
            </TabsContent>
        </Tabs>
    ),
};

export const Compact: Story = {
    render: () => (
        <Tabs defaultValue="day">
            <TabsList>
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
                <TabsTrigger value="all" disabled>
                    All Time
                </TabsTrigger>
            </TabsList>
        </Tabs>
    ),
};
