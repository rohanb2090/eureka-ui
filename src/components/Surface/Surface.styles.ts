import { cva, type VariantProps } from 'class-variance-authority';

export const surfaceVariants = cva(
    [
        'bg-[var(--bg-surface)]',
        'rounded-[var(--radius-md)]',
    ],
    {
        variants: {
            variant: {
                page: 'bg-[var(--bg-page)]',
                panel: 'bg-[var(--bg-surface)] border border-[var(--border-default)]',
                card: 'bg-[var(--bg-surface)] border border-[var(--border-default)]',
                inset: 'bg-[var(--bg-subtle)]',
                elevated: 'bg-[var(--bg-elevated)] border border-[var(--border-default)] shadow-lg',
            },

            padding: {
                none: 'p-0',
                sm: 'p-[var(--spacing-md)]',
                md: 'p-[var(--spacing-lg)]',
                lg: 'p-[var(--spacing-xl)]',
            },
        },
        defaultVariants: {
            variant: 'card',
            padding: 'md',
        },
    }
);

export type SurfaceVariantProps = VariantProps<typeof surfaceVariants>;
