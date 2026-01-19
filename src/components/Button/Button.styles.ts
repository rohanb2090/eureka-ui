import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Button style variants
 * Uses ONLY semantic CSS variables from design tokens
 * NO hardcoded colors or primitives
 */
export const buttonVariants = cva(
    // Base styles (always applied)
    [
        // Layout & Display
        'inline-flex items-center justify-center',
        'gap-[var(--spacing-sm)]',

        // Typography
        'font-medium',
        'whitespace-nowrap',

        // Transitions
        'transition-colors duration-150',

        // Focus ring (accessibility)
        'focus-visible:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-[var(--border-focus)]',
        'focus-visible:ring-offset-2',

        // Disabled state
        'disabled:opacity-[var(--opacity-disabled)]',
        'disabled:pointer-events-none',
    ],
    {
        variants: {
            // Visual variant (semantic intent)
            variant: {
                primary: [
                    'bg-[var(--action-primary)]',
                    'text-[var(--action-text-on-primary)]',
                    'border border-transparent',
                    'hover:bg-[var(--action-primary-hover)]',
                    'active:bg-[var(--action-primary-active)]',
                ],
                secondary: [
                    'bg-[var(--bg-surface)]',
                    'text-[var(--text-primary)]',
                    'border border-[var(--border-default)]',
                    'hover:bg-[var(--bg-subtle)]',
                    'hover:border-[var(--border-strong)]',
                ],
                destructive: [
                    'bg-[var(--action-destructive)]',
                    'text-[var(--action-text-on-primary)]',
                    'border border-transparent',
                    'hover:opacity-90',
                ],
                ghost: [
                    'bg-transparent',
                    'text-[var(--text-secondary)]',
                    'border border-transparent',
                    'hover:bg-[var(--bg-subtle)]',
                    'hover:text-[var(--text-primary)]',
                ],
            },

            // Size variants
            size: {
                sm: [
                    'h-[var(--spacing-2xl)]', // ~28px
                    'px-[var(--spacing-sm)]',
                    'text-sm',
                    'rounded-[var(--radius-md)]',
                ],
                md: [
                    'h-[var(--spacing-3xl)]', // ~36px
                    'px-[var(--spacing-md)]',
                    'text-base',
                    'rounded-[var(--radius-md)]',
                ],
                lg: [
                    'h-[var(--spacing-4xl)]', // ~44px
                    'px-[var(--spacing-lg)]',
                    'text-base',
                    'rounded-[var(--radius-md)]',
                ],
            },

            // Density (affects padding, not height)
            density: {
                compact: 'px-[var(--spacing-sm)]',
                default: '', // Use size-based padding
            },

            // Full width layout
            fullWidth: {
                true: 'w-full',
                false: '',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
            density: 'default',
            fullWidth: false,
        },
    }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
