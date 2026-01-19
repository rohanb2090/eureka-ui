import { useLineChart, UseLineChartProps } from '../../headless/LineChart';
import { cn } from '../../utils/cn';

export interface AreaChartProps extends UseLineChartProps {
    className?: string;
    height?: number;
    width?: number;
    fillColor?: string;
    fillOpacity?: number;
    lineColor?: string;
    showLabels?: boolean;
}

const CHART_WIDTH = 400;
const CHART_HEIGHT = 300;
const PADDING = { top: 20, right: 20, bottom: 40, left: 60 };

export function AreaChart({
    data,
    maxY,
    minY,
    smooth = false,
    showGrid = true,
    gridLines = 5,
    showLabels = true,
    fillColor = 'var(--action-primary)',
    fillOpacity = 0.2,
    lineColor = 'var(--action-primary)',
    className,
    width = CHART_WIDTH,
    height = CHART_HEIGHT,
}: AreaChartProps) {
    const {
        pathData,
        points,
        maxY: calculatedMaxY,
        minY: calculatedMinY,
        chartProps,
        gridLines: gridLineValues,
    } = useLineChart({ data, maxY, minY, smooth, showPoints: false, showGrid, gridLines });

    const chartWidth = width - PADDING.left - PADDING.right;
    const chartHeight = height - PADDING.top - PADDING.bottom;
    const yRange = calculatedMaxY - calculatedMinY || 1;

    // Create area path (line + bottom edge)
    const areaPath = points.length > 0
        ? `${pathData} L ${points[points.length - 1].x} ${PADDING.top + chartHeight} L ${points[0].x} ${PADDING.top + chartHeight} Z`
        : '';

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

                {/* Area fill */}
                <path
                    d={areaPath}
                    fill={fillColor}
                    opacity={fillOpacity}
                />

                {/* Line path */}
                <path
                    d={pathData}
                    fill="none"
                    stroke={lineColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Labels */}
                {showLabels && points.map((point, index) => (
                    <text
                        key={`label-${index}`}
                        x={point.x}
                        y={PADDING.top + chartHeight + 20}
                        textAnchor="middle"
                        className="text-xs pointer-events-none"
                        fill="var(--text-secondary)"
                    >
                        {point.label}
                    </text>
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
