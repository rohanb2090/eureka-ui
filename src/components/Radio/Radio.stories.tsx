import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './Radio';

const meta = {
    title: 'Components/Radio',
    component: RadioGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isDisabled: {
            control: 'boolean',
        },
        isRequired: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <RadioGroup name="example" {...args}>
            <label className="flex items-center gap-2">
                <Radio value="option1" name="example" />
                <span>Option 1</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option2" name="example" />
                <span>Option 2</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option3" name="example" />
                <span>Option 3</span>
            </label>
        </RadioGroup>
    ),
};

export const DefaultSelected: Story = {
    render: (args) => (
        <RadioGroup name="example2" defaultValue="option2" {...args}>
            <label className="flex items-center gap-2">
                <Radio value="option1" name="example2" />
                <span>Option 1</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option2" name="example2" />
                <span>Option 2 (Selected)</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option3" name="example2" />
                <span>Option 3</span>
            </label>
        </RadioGroup>
    ),
};

export const Disabled: Story = {
    render: (args) => (
        <RadioGroup name="example3" isDisabled {...args}>
            <label className="flex items-center gap-2">
                <Radio value="option1" name="example3" />
                <span>Option 1 (Disabled)</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option2" name="example3" />
                <span>Option 2 (Disabled)</span>
            </label>
        </RadioGroup>
    ),
};
