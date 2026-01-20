import { useLineChart, UseLineChartProps } from '../../headless/LineChart';
import { cn } from '../../utils/cn';

export interface LineChartProps extends UseLineChartProps {
    className?: string;
    height?: number;
    width?: number;
    lineColor?: string;
    pointColor?: string;
    showLabels?: boolean;
}

const CHART_WIDTH = 400;
const CHART_HEIGHT = 300;
const PADDING = { top: 20, right: 20, bottom: 40, left: 60 };

export function LineChart({
    data,
    maxY,
    minY,
    smooth = false,
    showPoints = true,
    showGrid = true,
    gridLines = 5,
    showLabels = true,
    lineColor = 'var(--action-primary)',
    pointColor = 'var(--action-primary)',
    className,
    width = CHART_WIDTH,
    height = CHART_HEIGHT,
}: LineChartProps) {
    const {
        pathData,
        points,
        maxY: calculatedMaxY,
        minY: calculatedMinY,
        chartProps,
        getPointProps,
        gridLines: gridLineValues,
        hoveredIndex,
    } = useLineChart({ data, maxY, minY, smooth, showPoints, showGrid, gridLines, width, height });

    const chartWidth = width - PADDING.left - PADDING.right;
    const chartHeight = height - PADDING.top - PADDING.bottom;
    const yRange = calculatedMaxY - calculatedMinY || 1;

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
                    const normalizedY = (value - calculatedMinY) / yRange;
                    const y = PADDING.top + chartHeight - normalizedY * chartHeight;

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
                            <text
                                x={PADDING.left - 8}
                                y={y + 4}
                                textAnchor="end"
                                className="text-xs pointer-events-none"
                                fill="var(--text-secondary)"
                            >
                                {Math.round(value)}
                            </text>
                        </g>
                    );
                })}

                {/* Line path */}
                <path
                    d={pathData}
                    fill="none"
                    stroke={lineColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Points */}
                {showPoints && points.map((point, index) => (
                    <g key={`point-${index}`}>
                        <circle
                            {...getPointProps(index)}
                            cx={point.x}
                            cy={point.y}
                            r={hoveredIndex === index ? 6 : 4}
                            fill="white"
                            stroke={pointColor}
                            strokeWidth="2"
                            className={cn(
                                'transition-all cursor-pointer',
                                'focus:outline-none focus:ring-2 focus:ring-border-focus'
                            )}
                        />

                        {/* Labels */}
                        {showLabels && (
                            <text
                                x={point.x}
                                y={PADDING.top + chartHeight + 20}
                                textAnchor="middle"
                                className="text-xs pointer-events-none"
                                fill="var(--text-secondary)"
                            >
                                {point.label}
                            </text>
                        )}

                        {/* Value on hover */}
                        {hoveredIndex === index && (
                            <text
                                x={point.x}
                                y={point.y - 12}
                                textAnchor="middle"
                                className="text-sm font-medium pointer-events-none"
                                fill="var(--text-primary)"
                            >
                                {point.value}
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
