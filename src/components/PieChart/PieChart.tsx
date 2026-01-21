import { usePieChart, UsePieChartProps } from '../../headless/PieChart';
import { cn } from '../../utils/cn';

export interface PieChartProps extends UsePieChartProps {
    className?: string;
    size?: number;
    showLabels?: boolean;
    showPercentages?: boolean;
}

export function PieChart({
    data,
    variant = 'pie',
    size = 200,
    showLabels = true,
    showPercentages = true,
    className,
}: PieChartProps) {
    const {
        segments,
        total,
        chartProps,
        getSegmentProps,
        hoveredIndex,
    } = usePieChart({ data, variant });

    return (
        <div className={cn('inline-flex flex-col items-center gap-4', className)}>
            <svg
                {...chartProps}
                width={size}
                height={size}
                viewBox="-5 -5 210 210"
                className="select-none"
            >
                {segments.map((segment, index) => (
                    <path
                        key={`segment-${index}`}
                        {...getSegmentProps(index)}
                        d={segment.path}
                        fill={segment.color}
                        className={cn(
                            'transition-opacity cursor-pointer',
                            'focus:outline-none focus:ring-2 focus:ring-border-focus',
                            hoveredIndex !== null && hoveredIndex !== index && 'opacity-50'
                        )}
                        style={{
                            transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                            transformOrigin: '100px 100px',
                            transition: 'transform 200ms, opacity 200ms',
                        }}
                    />
                ))}

                {/* Center label for donut */}
                {variant === 'donut' && (
                    <text
                        x="100"
                        y="105"
                        textAnchor="middle"
                        className="text-2xl font-bold pointer-events-none"
                        fill="var(--text-primary)"
                    >
                        {total}
                    </text>
                )}
            </svg>

            {/* Legend */}
            {showLabels && (
                <div className="flex flex-wrap gap-3 justify-center max-w-xs">
                    {segments.map((segment, index) => (
                        <div
                            key={`legend-${index}`}
                            className="flex items-center gap-2"
                        >
                            <div
                                className="w-3 h-3"
                                style={{ backgroundColor: segment.color }}
                            />
                            <span className="text-sm text-text-secondary">
                                {segment.label}
                                {showPercentages && (
                                    <span className="text-text-tertiary ml-1">
                                        ({segment.percentage.toFixed(1)}%)
                                    </span>
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
