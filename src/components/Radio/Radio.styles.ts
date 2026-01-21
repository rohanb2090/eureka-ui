import { cva, type VariantProps } from 'class-variance-authority';

export const radioVariants = cva(
    [
        'rounded-full',
        'border',
        'transition-colors duration-150',
        'cursor-pointer',
        'appearance-none',
        'grid place-content-center',

        // Focus
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-[var(--border-focus)]',
        'focus:ring-offset-2',

        // Dot (pseudo-element)
        'before:content-[""]',
        'before:block', // Explicitly block
        'before:w-[0.65em] before:h-[0.65em]',
        'before:rounded-full',
        'before:scale-0 checked:before:scale-100',
        'before:transition-transform before:duration-150',
        'before:bg-current', // Use current text color

        // Checked state
        'checked:border-[var(--action-primary)]',
        'checked:text-[var(--action-primary)]', // Text color determines dot color

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
