import { useBarChart, UseBarChartProps } from '../../headless/BarChart';
import { cn } from '../../utils/cn';

export interface BarChartProps extends UseBarChartProps {
    className?: string;
    height?: number;
    width?: number;
    showLabels?: boolean;
}

const CHART_WIDTH = 400;
const CHART_HEIGHT = 300;
const PADDING = { top: 20, right: 20, bottom: 40, left: 60 };

export function BarChart({
    data,
    orientation = 'vertical',
    maxValue,
    showGrid = true,
    gridLines = 5,
    showLabels = true,
    className,
    width = CHART_WIDTH,
    height = CHART_HEIGHT,
}: BarChartProps) {
    const {
        bars,
        maxValue: calculatedMax,
        chartProps,
        getBarProps,
        gridLines: gridLineValues,
        hoveredIndex,
    } = useBarChart({ data, orientation, maxValue, showGrid, gridLines });

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
                {/* Grid lines */}
                {showGrid && gridLineValues.map((value, index) => {
                    const y = orientation === 'vertical'
                        ? PADDING.top + chartHeight - (value / calculatedMax) * chartHeight
                        : PADDING.top + (index / gridLines) * chartHeight;

                    return (
                        <g key={`grid-${index}`}>
                            <line
                                x1={PADDING.left}
                                y1={y}
                                x2={PADDING.left + chartWidth}
                                y2={y}
                                stroke="var(--border-subtle)"
                                strokeWidth="1"
                                strokeDasharray="4 2"
                            />
                            {orientation === 'vertical' && (
                                <text
                                    x={PADDING.left - 8}
                                    y={y + 4}
                                    textAnchor="end"
                                    className="text-xs"
                                    fill="var(--text-secondary)"
                                >
                                    {Math.round(value)}
                                </text>
                            )}
                        </g>
                    );
                })}

                {/* Bars */}
                {bars.map((bar, index) => (
                    <g key={`bar-${index}`}>
                        <rect
                            {...getBarProps(index)}
                            x={bar.x}
                            y={bar.y}
                            width={bar.width}
                            height={bar.height}
                            fill={bar.color}
                            className={cn(
                                'transition-opacity cursor-pointer',
                                'focus:outline-none focus:ring-2 focus:ring-border-focus',
                                hoveredIndex !== null && hoveredIndex !== index && 'opacity-50'
                            )}
                            rx={orientation === 'vertical' ? 2 : 0}
                            ry={orientation === 'vertical' ? 2 : 0}
                        />

                        {/* Labels */}
                        {showLabels && (
                            <text
                                x={orientation === 'vertical' ? bar.x + bar.width / 2 : PADDING.left - 8}
                                y={
                                    orientation === 'vertical'
                                        ? PADDING.top + chartHeight + 20
                                        : bar.y + bar.height / 2 + 4
                                }
                                textAnchor={orientation === 'vertical' ? 'middle' : 'end'}
                                className="text-xs pointer-events-none"
                                fill="var(--text-secondary)"
                            >
                                {bar.label}
                            </text>
                        )}

                        {/* Value on hover */}
                        {hoveredIndex === index && (
                            <text
                                x={orientation === 'vertical' ? bar.x + bar.width / 2 : bar.x + bar.width + 8}
                                y={orientation === 'vertical' ? bar.y - 8 : bar.y + bar.height / 2 + 4}
                                textAnchor={orientation === 'vertical' ? 'middle' : 'start'}
                                className="text-sm font-medium pointer-events-none"
                                fill="var(--text-primary)"
                            >
                                {bar.value}
                            </text>
                        )}
                    </g>
                ))}

                {/* Axes */}
                <line
                    x1={PADDING.left}
                    y1={PADDING.top + chartHeight}
                    x2={PADDING.left + chartWidth}
                    y2={PADDING.top + chartHeight}
                    stroke="var(--border-default)"
                    strokeWidth="2"
                />
                <line
                    x1={PADDING.left}
                    y1={PADDING.top}
                    x2={PADDING.left}
                    y2={PADDING.top + chartHeight}
                    stroke="var(--border-default)"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}
