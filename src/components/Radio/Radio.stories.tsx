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
    args: {
        name: "example"
    },
    render: (args) => (
        <RadioGroup {...args}>
            <label className="flex items-center gap-2">
                <Radio value="option1" name={args.name} />
                <span>Option 1</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option2" name={args.name} />
                <span>Option 2</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option3" name={args.name} />
                <span>Option 3</span>
            </label>
        </RadioGroup>
    ),
};

export const DefaultSelected: Story = {
    args: {
        name: "example2",
        defaultValue: "option2"
    },
    render: (args) => (
        <RadioGroup {...args}>
            <label className="flex items-center gap-2">
                <Radio value="option1" name={args.name} />
                <span>Option 1</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option2" name={args.name} />
                <span>Option 2 (Selected)</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option3" name={args.name} />
                <span>Option 3</span>
            </label>
        </RadioGroup>
    ),
};

export const Disabled: Story = {
    args: {
        name: "example3",
        isDisabled: true
    },
    render: (args) => (
        <RadioGroup {...args}>
            <label className="flex items-center gap-2">
                <Radio value="option1" name={args.name} />
                <span>Option 1 (Disabled)</span>
            </label>
            <label className="flex items-center gap-2">
                <Radio value="option2" name={args.name} />
                <span>Option 2 (Disabled)</span>
            </label>
        </RadioGroup>
    ),
};
