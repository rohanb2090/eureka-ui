import { cn } from '../../utils/cn';

export interface SkeletonProps {
    /** Width of skeleton (CSS value or preset) */
    width?: string | 'full' | '3/4' | '1/2' | '1/4';

    /** Height of skeleton */
    height?: string;

    /** Shape variant */
    variant?: 'text' | 'circular' | 'rectangular';

    /** Number of lines (for text variant) */
    lines?: number;

    className?: string;
}

const widthMap = {
    full: 'w-full',
    '3/4': 'w-3/4',
    '1/2': 'w-1/2',
    '1/4': 'w-1/4',
};

export function Skeleton({
    width = 'full',
    height,
    variant = 'text',
    lines = 1,
    className,
}: SkeletonProps) {
    const baseClasses = [
        'bg-[var(--bg-subtle)]',
        'animate-pulse',
    ];

    // Variant-specific classes
    const variantClasses = {
        text: 'h-4 rounded',
        circular: 'rounded-full',
        rectangular: 'rounded-[var(--radius-md)]',
    };

    // Width handling
    const widthClass = typeof width === 'string' && width in widthMap
        ? widthMap[width as keyof typeof widthMap]
        : '';

    const style = {
        ...(typeof width === 'string' && !(width in widthMap) && { width }),
        ...(height && { height }),
    };

    // Multiple lines for text variant
    if (variant === 'text' && lines > 1) {
        return (
            <div className="space-y-3">
                {Array.from({ length: lines }).map((_, i) => {
                    // Last line is shorter
                    const isLast = i === lines - 1;
                    return (
                        <div
                            key={i}
                            className={cn(
                                baseClasses,
                                variantClasses[variant],
                                isLast ? 'w-3/4' : widthClass,
                                className
                            )}
                            style={!isLast ? style : undefined}
                        />
                    );
                })}
            </div>
        );
    }

    return (
        <div
            className={cn(
                baseClasses,
                variantClasses[variant],
                widthClass,
                className
            )}
            style={style}
        />
    );
}
