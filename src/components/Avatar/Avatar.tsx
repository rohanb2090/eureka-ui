import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const avatarVariants = cva(
    "relative flex shrink-0 overflow-hidden",
    {
        variants: {
            size: {
                sm: "h-8 w-8 text-xs",
                md: "h-10 w-10 text-sm",
                lg: "h-14 w-14 text-base",
                xl: "h-20 w-20 text-xl",
            },
            shape: {
                circle: "rounded-full",
                square: "rounded-none", // Sharp edges by default if desired? Or stay with rounded-full for avatars specifically?
                // Usually avatars are circular, but strict adherence to system might imply square. 
                // Let's offer both but default to circle as it's standard for profiles.
            }
        },
        defaultVariants: {
            size: "md",
            shape: "circle",
        },
    }
);

export interface AvatarProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    fallback?: string;
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
    ({ className, size, shape, src, alt, fallback, ...props }, ref) => {
        const [hasError, setHasError] = useState(false);

        return (
            <span
                ref={ref}
                className={cn(avatarVariants({ size, shape }), "bg-bg-muted border border-border-default flex items-center justify-center", className)}
                {...props}
            >
                {!hasError && src ? (
                    <img
                        src={src}
                        alt={alt || "Avatar"}
                        className="aspect-square h-full w-full object-cover"
                        onError={() => setHasError(true)}
                    />
                ) : (
                    <span className="font-medium text-text-secondary uppercase select-none">
                        {fallback ? fallback.slice(0, 2) : (alt ? alt.slice(0, 2) : "?")}
                    </span>
                )}
            </span>
        );
    }
);
Avatar.displayName = "Avatar";
