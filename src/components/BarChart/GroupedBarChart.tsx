import { useGroupedBarChart, UseGroupedBarChartProps } from '../../headless/BarChart/useGroupedBarChart';
import { cn } from '../../utils/cn';

export interface GroupedBarChartProps extends UseGroupedBarChartProps {
    className?: string;
    width?: number;
    height?: number;
    showLabels?: boolean;
}

const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 300;
const PADDING = { top: 20, right: 20, bottom: 40, left: 60 };

export function GroupedBarChart({
    data,
    maxValue,
    showGrid = true,
    gridLines = 5,
    showLabels = true,
    className,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
}: GroupedBarChartProps) {
    const {
        groups,
        maxValue: calculatedMax,
        gridLines: gridLineValues,
        hoveredBar,
        setHoveredBar,
    } = useGroupedBarChart({ data, maxValue, showGrid, gridLines });

    const chartWidth = width - PADDING.left - PADDING.right;
    const chartHeight = height - PADDING.top - PADDING.bottom;

    return (
        <div className={cn('inline-block bg-[var(--bg-surface)] p-4', className)}>
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

                {/* Groups & Bars */}
                {groups.map((group, groupIndex) => (
                    <g key={`group-${groupIndex}`}>
                        {group.bars.map((bar, barIndex) => {
                            const isHovered =
                                hoveredBar?.groupIndex === groupIndex &&
                                hoveredBar?.barIndex === barIndex;

                            return (
                                <rect
                                    key={`bar-${barIndex}`}
                                    x={bar.x}
                                    y={bar.y}
                                    width={bar.width}
                                    height={bar.height}
                                    fill={bar.color}
                                    className={cn(
                                        'transition-all duration-150 cursor-pointer',
                                        hoveredBar && !isHovered && 'opacity-40'
                                    )}
                                    onMouseEnter={() => setHoveredBar({ groupIndex, barIndex })}
                                    onMouseLeave={() => setHoveredBar(null)}
                                />
                            );
                        })}

                        {/* X-Axis Label */}
                        {showLabels && (
                            <text
                                x={group.bars[0].x + (group.bars[group.bars.length - 1].x + group.bars[group.bars.length - 1].width - group.bars[0].x) / 2}
                                y={PADDING.top + chartHeight + 20}
                                textAnchor="middle"
                                className="text-xs font-bold"
                                fill="var(--text-secondary)"
                            >
                                {group.label}
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

                {/* Legend */}
                <g transform={`translate(${PADDING.left}, ${height + 25})`}>
                    {data[0]?.values.map((v, i) => (
                        <g key={i} transform={`translate(${i * 120}, 0)`}>
                            <rect width={12} height={12} fill={v.color || `var(--color-primary-${(i + 1) * 100})`} />
                            <text x={18} y={11} className="text-[10px] font-medium" fill="var(--text-secondary)">{v.label}</text>
                        </g>
                    ))}
                </g>
            </svg>
        </div>
    );
}
