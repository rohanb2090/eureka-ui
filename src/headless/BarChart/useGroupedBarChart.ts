import { useState, useMemo } from 'react';
import { UseGroupedBarChartProps, UseGroupedBarChartReturn, GroupedBarDimensions } from './GroupedBarChart.types';

const CHART_WIDTH = 400;
const CHART_HEIGHT = 300;
const PADDING = { top: 20, right: 20, bottom: 40, left: 60 };

export function useGroupedBarChart(props: UseGroupedBarChartProps): UseGroupedBarChartReturn {
    const {
        data,
        maxValue: customMaxValue,
        showGrid = true,
        gridLines: customGridLines = 5,
    } = props;

    const [hoveredBar, setHoveredBar] = useState<{ groupIndex: number; barIndex: number } | null>(null);

    const chartWidth = CHART_WIDTH - PADDING.left - PADDING.right;
    const chartHeight = CHART_HEIGHT - PADDING.top - PADDING.bottom;

    const maxValue = useMemo(() => {
        if (customMaxValue !== undefined) return customMaxValue;
        let max = 0;
        data.forEach(group => {
            group.values.forEach(v => {
                if (v.value > max) max = v.value;
            });
        });
        return max || 10;
    }, [data, customMaxValue]);

    const groups = useMemo(() => {
        const groupCount = data.length;
        const groupGap = 20;
        const barGap = 2;

        const availableWidthForGroups = chartWidth - (groupGap * (groupCount - 1));
        const groupWidth = availableWidthForGroups / groupCount;

        return data.map((group, groupIndex) => {
            const barCountInGroup = group.values.length;
            const barWidth = (groupWidth - (barGap * (barCountInGroup - 1))) / barCountInGroup;

            const bars: GroupedBarDimensions[] = group.values.map((v, barIndex) => {
                const barHeight = (v.value / maxValue) * chartHeight;
                return {
                    id: v.id,
                    groupLabel: group.label,
                    x: PADDING.left + groupIndex * (groupWidth + groupGap) + barIndex * (barWidth + barGap),
                    y: PADDING.top + chartHeight - barHeight,
                    width: barWidth,
                    height: barHeight,
                    value: v.value,
                    label: v.label,
                    color: v.color || `var(--color-primary-${(barIndex + 1) * 100})`,
                };
            });

            return {
                label: group.label,
                bars,
            };
        });
    }, [data, maxValue, chartWidth, chartHeight]);

    const gridLineValues = useMemo(() => {
        if (!showGrid) return [];
        const lines: number[] = [];
        for (let i = 0; i <= customGridLines; i++) {
            lines.push((maxValue / customGridLines) * i);
        }
        return lines;
    }, [showGrid, customGridLines, maxValue]);

    return {
        groups,
        maxValue,
        gridLines: gridLineValues,
        hoveredBar,
        setHoveredBar,
    };
}
