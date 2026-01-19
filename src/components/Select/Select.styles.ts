import { cva, type VariantProps } from 'class-variance-authority';

export const selectVariants = cva(
    [
        'w-full',
        'px-[var(--spacing-md)]',
        'bg-[var(--bg-surface)]',
        'border',
        'rounded-[var(--radius-md)]',
        'text-[var(--text-primary)]',
        'cursor-pointer',

        // Transitions
        'transition-colors duration-150',

        // Focus
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-[var(--border-focus)]',
        'focus:border-transparent',

        // Disabled
        'disabled:opacity-[var(--opacity-disabled)]',
        'disabled:cursor-not-allowed',
    ],
    {
        variants: {
            size: {
                sm: 'h-[var(--spacing-2xl)] text-sm',
                md: 'h-[var(--spacing-3xl)] text-base',
                lg: 'h-[var(--spacing-4xl)] text-base',
            },

            state: {
                default: 'border-[var(--border-default)] hover:border-[var(--border-strong)]',
                invalid: 'border-[var(--status-error)]',
            },
        },
        defaultVariants: {
            size: 'md',
            state: 'default',
        },
    }
);

export type SelectVariantProps = VariantProps<typeof selectVariants>;
