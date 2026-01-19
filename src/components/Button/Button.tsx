import { ReactNode, forwardRef } from 'react';
import { useButton, UseButtonProps } from '../../headless/Button';
import { buttonVariants, ButtonVariantProps } from './Button.styles';
import { cn } from '../../utils/cn';

/**
 * Styled Button Props
 * Extends headless props with visual-only props
 */
export interface ButtonProps extends UseButtonProps, ButtonVariantProps {
    /** Button content */
    children?: ReactNode;

    /** Icon displayed before text */
    leftIcon?: ReactNode;

    /** Icon displayed after text */
    rightIcon?: ReactNode;

    /** Additional Tailwind classes (escape hatch) */
    className?: string;
}

/**
 * Loading spinner component
 * Simple inline implementation
 */
function Spinner({ className }: { className?: string }) {
    return (
        <svg
            className={cn('animate-spin', className)}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="10 32"
            />
        </svg>
    );
}

/**
 * Styled Button Component
 * 
 * Responsibilities:
 * - Visual presentation via Tailwind + CSS variables
 * - Variant, size, and density styling
 * - Loading state visual feedback
 * - Icon composition
 * 
 * Does NOT handle:
 * - Keyboard logic (in useButton)
 * - Event handlers (in useButton)
 * - State management (in useButton)
 * - ARIA attributes (in useButton)
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            // Visual props
            variant = 'primary',
            size = 'md',
            density = 'default',
            fullWidth = false,
            className,

            // Content
            children,
            leftIcon,
            rightIcon,

            // Behavioral props (passed to useButton)
            ...behavioralProps
        },
        ref
    ) => {
        // Get behavior from headless hook
        const { buttonProps, state } = useButton(behavioralProps);

        // Determine if we should show content or loading spinner
        const showLoading = state.isLoading;

        return (
            <button
                ref={ref}
                {...buttonProps}
                className={cn(
                    buttonVariants({ variant, size, density, fullWidth }),
                    className
                )}
            >
                {/* Left icon (hidden during loading) */}
                {!showLoading && leftIcon && (
                    <span className="flex-shrink-0" aria-hidden="true">
                        {leftIcon}
                    </span>
                )}

                {/* Loading spinner (replaces icons during loading) */}
                {showLoading && <Spinner className="flex-shrink-0" />}

                {/* Button text content */}
                {children && <span>{children}</span>}

                {/* Right icon (hidden during loading) */}
                {!showLoading && rightIcon && (
                    <span className="flex-shrink-0" aria-hidden="true">
                        {rightIcon}
                    </span>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';
