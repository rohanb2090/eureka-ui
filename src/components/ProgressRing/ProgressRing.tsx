import { useProgressRing, UseProgressRingProps } from '../../headless/ProgressRing';
import { cn } from '../../utils/cn';

export interface ProgressRingProps extends UseProgressRingProps {
    className?: string;
    color?: string;
    trackColor?: string;
    showLabel?: boolean;
    label?: string;
}

export function ProgressRing({
    value,
    size = 'md',
    thickness,
    color = 'var(--action-primary)',
    trackColor = 'var(--border-subtle)',
    showLabel = true,
    label,
    className,
}: ProgressRingProps) {
    const {
        normalizedValue,
        circumference,
        strokeDashoffset,
        radius,
        strokeWidth,
        viewBoxSize,
        progressProps,
    } = useProgressRing({ value, size, thickness });

    const center = viewBoxSize / 2;

    return (
        <div className={cn('inline-flex items-center justify-center', className)}>
            <div className="relative" style={{ width: viewBoxSize, height: viewBoxSize }}>
                <svg
                    {...progressProps}
                    width={viewBoxSize}
                    height={viewBoxSize}
                    viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
                    className="transform -rotate-90"
                >
                    {/* Track (background circle) */}
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke={trackColor}
                        strokeWidth={strokeWidth}
                        fill="none"
                    />

                    {/* Progress circle */}
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-500 ease-out"
                    />
                </svg>

                {/* Center label */}
                {showLabel && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span
                            className={cn(
                                'font-semibold text-text-primary',
                                size === 'sm' && 'text-xs',
                                size === 'md' && 'text-sm',
                                size === 'lg' && 'text-lg'
                            )}
                        >
                            {label ?? `${normalizedValue}%`}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
