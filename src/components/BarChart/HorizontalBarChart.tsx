import { useBarChart, UseBarChartProps } from '../../headless/BarChart';
import { cn } from '../../utils/cn';

export interface HorizontalBarChartProps extends UseBarChartProps {
    className?: string;
    height?: number;
    width?: number;
    showLabels?: boolean;
}

const DEFAULT_WIDTH = 400;
const DEFAULT_HEIGHT = 300;
const PADDING = { top: 20, right: 40, bottom: 40, left: 100 };

export function HorizontalBarChart({
    data,
    maxValue,
    showGrid = true,
    gridLines = 5,
    showLabels = true,
    className,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
}: HorizontalBarChartProps) {
    const {
        bars,
        maxValue: calculatedMax,
        chartProps,
        getBarProps,
        gridLines: gridLineValues,
        hoveredIndex,
    } = useBarChart({
        data,
        orientation: 'horizontal',
        maxValue,
        showGrid,
        gridLines,
        width,
        height,
        padding: PADDING
    });

    const chartWidth = width - PADDING.left - PADDING.right;
    const chartHeight = height - PADDING.top - PADDING.bottom;

    return (
        <div className={cn('inline-block', className)}>
            <svg
                {...chartProps}
                width={width}
                height={height}
                className="select-none"
                style={{ overflow: 'visible' }}
            >
                {/* Vertical Grid lines and X-axis labels */}
                {gridLineValues.map((value, index) => {
                    const x = PADDING.left + (value / calculatedMax) * chartWidth;

                    return (
                        <g key={`grid-${index}`}>
                            {index > 0 && showGrid && ( // Don't draw dashed line over the solid Y-axis, check showGrid
                                <line
                                    x1={x}
                                    y1={PADDING.top}
                                    x2={x}
                                    y2={PADDING.top + chartHeight}
                                    stroke="var(--border-subtle)"
                                    strokeWidth="1"
                                    strokeDasharray="4 2"
                                />
                            )}
                            <text
                                x={x}
                                y={PADDING.top + chartHeight + 16}
                                textAnchor="middle"
                                className="text-[10px]"
                                fill="var(--text-tertiary)"
                            >
                                {Math.round(value)}
                            </text>
                        </g>
                    );
                })}

                {/* Bars */}
                {bars.map((bar, index) => (
                    <g key={`bar-${index}`}>
                        <rect
                            {...getBarProps(index)}
                            x={bar.x + 1} // 1px offset from Y-axis
                            y={bar.y}
                            width={Math.max(0, bar.width - 1)}
                            height={bar.height}
                            fill={bar.color}
                            className={cn(
                                'transition-opacity cursor-pointer',
                                'focus:outline-none focus:ring-2 focus:ring-border-focus',
                                hoveredIndex !== null && hoveredIndex !== index && 'opacity-50'
                            )}
                        />

                        {/* Labels (Categories) - Moved OUTSIDE the bars (left) */}
                        {showLabels && (
                            <text
                                x={PADDING.left - 12}
                                y={bar.y + bar.height / 2 + 4}
                                textAnchor="end"
                                className="text-xs font-medium"
                                fill="var(--text-secondary)"
                            >
                                {bar.label}
                            </text>
                        )}

                        {/* Value display (On hover) */}
                        {hoveredIndex === index && (
                            <text
                                x={bar.x + bar.width + 8}
                                y={bar.y + bar.height / 2 + 4}
                                textAnchor="start"
                                className="text-xs font-bold"
                                fill="var(--text-primary)"
                            >
                                {bar.value}
                            </text>
                        )}
                    </g>
                ))}

                {/* Y-Axis Line */}
                <line
                    x1={PADDING.left}
                    y1={PADDING.top}
                    x2={PADDING.left}
                    y2={PADDING.top + chartHeight}
                    stroke="var(--border-default)"
                    strokeWidth="2"
                />

                {/* X-Axis Line (Moved down by 1px to avoid clipping the last bar) */}
                <line
                    x1={PADDING.left}
                    y1={PADDING.top + chartHeight + 1}
                    x2={PADDING.left + chartWidth}
                    y2={PADDING.top + chartHeight + 1}
                    stroke="var(--border-default)"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}
