import { cva, type VariantProps } from 'class-variance-authority';

export const radioVariants = cva(
    [
        'rounded-full',
        'border',
        'transition-colors duration-150',
        'cursor-pointer',

        // Focus
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-[var(--border-focus)]',
        'focus:ring-offset-2',

        // Checked state
        'text-[var(--action-primary)]',

        // Disabled
        'disabled:opacity-[var(--opacity-disabled)]',
        'disabled:cursor-not-allowed',
    ],
    {
        variants: {
            size: {
                sm: 'w-4 h-4',
                md: 'w-5 h-5',
                lg: 'w-6 h-6',
            },

            state: {
                default: 'border-[var(--border-default)]',
                invalid: 'border-[var(--status-error)]',
            },
        },
        defaultVariants: {
            size: 'md',
            state: 'default',
        },
    }
);

export type RadioVariantProps = VariantProps<typeof radioVariants>;
