import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const badgeVariants = cva(
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
        variants: {
            variant: {
                neutral: "bg-surface-neutral text-text-primary border border-border-default",
                success: "bg-status-success-subtle text-status-success border border-transparent",
                warning: "bg-status-warning-subtle text-status-warning border border-transparent",
                error: "bg-status-danger-subtle text-status-danger border border-transparent",
                info: "bg-status-info-subtle text-status-info border border-transparent",
                primary: "bg-action-primary text-action-text-on-primary border border-transparent",
            },
            size: {
                sm: "text-xs px-2 py-0.5 h-5",
                md: "text-sm px-2.5 py-0.5 h-6",
                lg: "text-sm px-3 py-1 h-7",
            },
            rounded: {
                true: "rounded-full",
                false: "rounded-none", // Enforce sharp edges by default if desired, or allow override
            }
        },
        defaultVariants: {
            variant: "neutral",
            size: "md",
            rounded: false, // Defaulting to sharp edges as per recent aesthetic changes
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
    label?: string;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant, size, rounded, label, children, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(badgeVariants({ variant, size, rounded }), className)}
                {...props}
            >
                {label || children}
            </span>
        );
    }
);

Badge.displayName = "Badge";
