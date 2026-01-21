import { useStackedBarChart } from '../../headless/BarChart/useStackedBarChart';
import { UseStackedBarChartProps } from '../../headless/BarChart/StackedBarChart.types';
import { cn } from '../../utils/cn';

export interface StackedBarChartProps extends UseStackedBarChartProps {
    className?: string;
    width?: number;
    height?: number;
    showLabels?: boolean;
}

const DEFAULT_WIDTH = 450;
const DEFAULT_HEIGHT = 300;
const PADDING = { top: 20, right: 20, bottom: 40, left: 60 };

export function StackedBarChart({
    data,
    maxValue,
    showGrid = true,
    gridLines = 5,
    showLabels = true,
    className,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
}: StackedBarChartProps) {
    const {
        bars,
        maxValue: calculatedMax,
        gridLines: gridLineValues,
        hoveredSegment,
        setHoveredSegment,
    } = useStackedBarChart({ data, maxValue, showGrid, gridLines });

    const chartWidth = width - PADDING.left - PADDING.right;
    const chartHeight = height - PADDING.top - PADDING.bottom;

    return (
        <div className={cn('inline-block', className)}>
            <svg
                width={width}
                height={height}
                className="select-none"
                style={{ overflow: 'visible' }}
            >
                {/* Horizontal Grid lines */}
                {showGrid && gridLineValues.map((value, index) => {
                    const y = PADDING.top + chartHeight - (value / calculatedMax) * chartHeight;

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
                                className="text-[10px]"
                                fill="var(--text-tertiary)"
                            >
                                {Math.round(value)}
                            </text>
                        </g>
                    );
                })}

                {/* Bars & Segments */}
                {bars.map((bar, barIndex) => (
                    <g key={`bar-${barIndex}`}>
                        {bar.segments.map((segment, segmentIndex) => {
                            const isHovered =
                                hoveredSegment?.barIndex === barIndex &&
                                hoveredSegment?.segmentIndex === segmentIndex;

                            return (
                                <rect
                                    key={`segment-${segmentIndex}`}
                                    x={segment.x}
                                    y={segment.y}
                                    width={segment.width}
                                    height={segment.height}
                                    fill={segment.color}
                                    className={cn(
                                        'transition-all duration-150 cursor-pointer',
                                        hoveredSegment && !isHovered && 'opacity-40'
                                    )}
                                    onMouseEnter={() => setHoveredSegment({ barIndex, segmentIndex })}
                                    onMouseLeave={() => setHoveredSegment(null)}
                                />
                            );
                        })}

                        {/* X-Axis Label */}
                        {showLabels && (
                            <text
                                x={bar.segments[0].x + bar.segments[0].width / 2}
                                y={PADDING.top + chartHeight + 20}
                                textAnchor="middle"
                                className="text-xs font-medium"
                                fill="var(--text-secondary)"
                            >
                                {bar.label}
                            </text>
                        )}
                    </g>
                ))}

                {/* X-Axis Line */}
                <line
                    x1={PADDING.left}
                    y1={PADDING.top + chartHeight}
                    x2={PADDING.left + chartWidth}
                    y2={PADDING.top + chartHeight}
                    stroke="var(--border-default)"
                    strokeWidth="2"
                />

                {/* Legend (Quick Inline) */}
                <g transform={`translate(${PADDING.left}, ${height + 20})`}>
                    {data[0]?.values.map((v, i) => (
                        <g key={i} transform={`translate(${i * 100}, 0)`}>
                            <rect width={10} height={10} fill={v.color || `var(--color-primary-${(i + 1) * 100})`} />
                            <text x={15} y={10} className="text-[10px]" fill="var(--text-secondary)">{v.label}</text>
                        </g>
                    ))}
                </g>
            </svg>
        </div>
    );
}
