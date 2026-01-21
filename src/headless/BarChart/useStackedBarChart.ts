import { useState, useMemo } from 'react';
import { UseStackedBarChartProps, UseStackedBarChartReturn, StackedBarSegment } from './StackedBarChart.types';

const CHART_WIDTH = 400;
const CHART_HEIGHT = 300;
const PADDING = { top: 20, right: 20, bottom: 40, left: 60 };

export function useStackedBarChart(props: UseStackedBarChartProps): UseStackedBarChartReturn {
    const {
        data,
        maxValue: customMaxValue,
        showGrid = true,
        gridLines: customGridLines = 5,
    } = props;

    const [hoveredSegment, setHoveredSegment] = useState<{ barIndex: number; segmentIndex: number } | null>(null);

    const chartWidth = CHART_WIDTH - PADDING.left - PADDING.right;
    const chartHeight = CHART_HEIGHT - PADDING.top - PADDING.bottom;

    const barsData = useMemo(() => {
        return data.map(bar => ({
            ...bar,
            total: bar.values.reduce((sum, v) => sum + v.value, 0)
        }));
    }, [data]);

    const maxValue = useMemo(() => {
        if (customMaxValue !== undefined) return customMaxValue;
        return Math.max(...barsData.map(d => d.total), 0);
    }, [barsData, customMaxValue]);

    const bars = useMemo(() => {
        const barCount = data.length;
        const barGap = 12;
        const totalGapWidth = barGap * (barCount - 1);
        const barWidth = (chartWidth - totalGapWidth) / barCount;

        return barsData.map((bar, barIndex) => {
            let currentY = PADDING.top + chartHeight;
            const segments: StackedBarSegment[] = bar.values.map((v, segmentIndex) => {
                const segmentHeight = (v.value / maxValue) * chartHeight;
                const y = currentY - segmentHeight;
                const segment: StackedBarSegment = {
                    id: v.id,
                    x: PADDING.left + barIndex * (barWidth + barGap),
                    y,
                    width: barWidth,
                    height: segmentHeight,
                    value: v.value,
                    label: v.label,
                    color: v.color || `var(--color-primary-${(segmentIndex + 1) * 100})`,
                };
                currentY = y;
                return segment;
            });

            return {
                label: bar.label,
                segments,
                totalValue: bar.total
            };
        });
    }, [barsData, maxValue, chartWidth, chartHeight]);

    const gridLineValues = useMemo(() => {
        if (!showGrid) return [];
        const lines: number[] = [];
        for (let i = 0; i <= customGridLines; i++) {
            lines.push((maxValue / customGridLines) * i);
        }
        return lines;
    }, [showGrid, customGridLines, maxValue]);

    return {
        bars,
        maxValue,
        gridLines: gridLineValues,
        hoveredSegment,
        setHoveredSegment
    };
}
