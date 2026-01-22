import { useScatterPlot } from '../../headless/ScatterPlot/useScatterPlot';
import { UseScatterPlotProps } from '../../headless/ScatterPlot/ScatterPlot.types';
import { cn } from '../../utils/cn';
import { useChartTheme } from '../../utils/useChartTheme';

export interface ScatterPlotProps extends UseScatterPlotProps {
    className?: string;
    width?: number;
    height?: number;
}

const DEFAULT_WIDTH = 450;
const DEFAULT_HEIGHT = 350;
const PADDING = { top: 20, right: 40, bottom: 50, left: 60 };

export function ScatterPlot({
    data,
    xLabel,
    yLabel,
    xMin,
    xMax,
    yMin,
    yMax,
    showGrid = true,
    showYAxis = true,
    className,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
}: ScatterPlotProps & { showYAxis?: boolean }) {
    const theme = useChartTheme();

    const {
        points,
        xTicks,
        yTicks,
        xMin: calculatedXMin,
        xMax: calculatedXMax,
        yMin: calculatedYMin,
        yMax: calculatedYMax,
        hoveredPoint,
        setHoveredPoint,
    } = useScatterPlot({ data, xMin, xMax, yMin, yMax, showGrid, width, height });

    const chartWidth = width - PADDING.left - PADDING.right;
    const chartHeight = height - PADDING.top - PADDING.bottom;

    // Use calculated bounds for reliable positioning
    const finalXMin = calculatedXMin ?? 0;
    const finalXMax = calculatedXMax ?? 10;
    const finalYMin = calculatedYMin ?? 0;
    const finalYMax = calculatedYMax ?? 10;

    // Helper to resolve point colors
    const resolveColor = (colorString?: string) => {
        if (!colorString) return theme.actionPrimary;
        if (colorString.includes('var(--action-primary)')) return theme.actionPrimary;
        if (colorString.includes('var(--status-success)')) return theme.statusSuccess;
        if (colorString.includes('var(--status-warning)')) return theme.statusWarning;
        if (colorString.includes('var(--status-error)')) return theme.statusError;
        if (colorString.includes('var(--status-info)')) return theme.statusInfo;
        return colorString;
    };

    return (
        <div className={cn('inline-block bg-bg-surface p-4', className)} style={{ backgroundColor: theme.bgSurface }}>
            <svg
                width={width}
                height={height}
                className="select-none"
                style={{ overflow: 'visible' }}
            >
                {/* Y-Axis Grid & Ticks */}
                {yTicks.map((tick, i) => {
                    const yPct = (tick - finalYMin) / (finalYMax - finalYMin || 1);
                    const y = PADDING.top + chartHeight - yPct * chartHeight;
                    return (
                        <g key={`y-${i}`}>
                            {showGrid && (
                                <line
                                    x1={PADDING.left}
                                    y1={y}
                                    x2={PADDING.left + chartWidth}
                                    y2={y}
                                    stroke={theme.borderSubtle}
                                    strokeWidth="1"
                                    strokeDasharray="4 2"
                                />
                            )}
                            {showYAxis && (
                                <text
                                    x={PADDING.left - 8}
                                    y={y + 4}
                                    textAnchor="end"
                                    className="text-[10px]"
                                    fill={theme.textSecondary}
                                    style={{ fontFamily: 'inherit' }}
                                >
                                    {tick.toFixed(1)}
                                </text>
                            )}
                        </g>
                    );
                })}

                {/* X-Axis Ticks */}
                {xTicks.map((tick, i) => {
                    const xPct = (tick - finalXMin) / (finalXMax - finalXMin || 1);
                    const x = PADDING.left + xPct * chartWidth;
                    return (
                        <g key={`x-${i}`}>
                            <text
                                x={x}
                                y={PADDING.top + chartHeight + 20}
                                textAnchor="middle"
                                className="text-[10px]"
                                fill={theme.textSecondary}
                                style={{ fontFamily: 'inherit' }}
                            >
                                {tick.toFixed(1)}
                            </text>
                        </g>
                    );
                })}

                {/* Points */}
                {points.map((p) => {
                    const isHovered = hoveredPoint === p.id;
                    return (
                        <circle
                            key={p.id}
                            cx={p.cx}
                            cy={p.cy}
                            r={isHovered ? p.r + 2 : p.r}
                            fill={resolveColor(p.color)}
                            className={cn(
                                'transition-all duration-150 cursor-pointer',
                                hoveredPoint && !isHovered && 'opacity-30'
                            )}
                            onMouseEnter={() => setHoveredPoint(p.id!)}
                            onMouseLeave={() => setHoveredPoint(null)}
                        />
                    );
                })}

                {/* Axes Lines */}
                <line
                    x1={PADDING.left}
                    y1={PADDING.top + chartHeight}
                    x2={PADDING.left + chartWidth}
                    y2={PADDING.top + chartHeight}
                    stroke={theme.borderDefault}
                    strokeWidth="2"
                />
                <line
                    x1={PADDING.left}
                    y1={PADDING.top}
                    x2={PADDING.left}
                    y2={PADDING.top + chartHeight}
                    stroke={theme.borderDefault}
                    strokeWidth="2"
                />

                {/* Labels */}
                {xLabel && (
                    <text
                        x={PADDING.left + chartWidth / 2}
                        y={height + 10}
                        textAnchor="middle"
                        className="text-xs font-semibold"
                        fill={theme.textSecondary}
                        style={{ fontFamily: 'inherit' }}
                    >
                        {xLabel}
                    </text>
                )}
                {yLabel && (
                    <text
                        transform={`rotate(-90, ${PADDING.left / 2}, ${PADDING.top + chartHeight / 2})`}
                        x={PADDING.left / 2}
                        y={PADDING.top + chartHeight / 2}
                        textAnchor="middle"
                        className="text-xs font-semibold"
                        fill={theme.textSecondary}
                        style={{ fontFamily: 'inherit' }}
                    >
                        {yLabel}
                    </text>
                )}
            </svg>
        </div>
    );
}
