import { useState, useMemo, useCallback } from 'react';
import { UseBarChartProps, UseBarChartReturn, BarDimensions } from './BarChart.types';

const CHART_WIDTH = 400;
const CHART_HEIGHT = 300;
const PADDING = { top: 20, right: 20, bottom: 40, left: 60 };

/**
 * Headless BarChart hook
 * 
 * Responsibilities:
 * - Data normalization and scaling
 * - Bar dimension calculations
 * - Hover/focus state management
 * - Grid line calculations
 * - ARIA attributes
 * 
 * Does NOT handle:
 * - SVG rendering
 * - Visual styling
 * - Colors (passed through from data or component)
 */
export function useBarChart(props: UseBarChartProps): UseBarChartReturn {
    const {
        data,
        orientation = 'vertical',
        maxValue: customMaxValue,
        showGrid = true,
        gridLines: customGridLines = 5,
        width = CHART_WIDTH,
        height = CHART_HEIGHT,
        padding = PADDING,
    } = props;

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Calculate max value from data or use custom
    const maxValue = useMemo(() => {
        if (customMaxValue !== undefined) return customMaxValue;
        return Math.max(...data.map(d => d.value), 0);
    }, [data, customMaxValue]);

    // Calculate available space for bars
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Calculate bar dimensions
    const bars: BarDimensions[] = useMemo(() => {
        const barCount = data.length;
        const barGap = 8;

        if (orientation === 'vertical') {
            const totalGapWidth = barGap * (barCount - 1);
            const barWidth = (chartWidth - totalGapWidth) / barCount;

            return data.map((point, index) => {
                const barHeight = (point.value / maxValue) * chartHeight;
                return {
                    x: padding.left + index * (barWidth + barGap),
                    y: padding.top + (chartHeight - barHeight),
                    width: barWidth,
                    height: barHeight,
                    value: point.value,
                    label: point.label,
                    color: point.color || 'var(--action-primary)',
                };
            });
        } else {
            // Horizontal orientation
            const totalGapHeight = barGap * (barCount - 1);
            const barHeight = (chartHeight - totalGapHeight) / barCount;

            return data.map((point, index) => {
                const barWidth = (point.value / maxValue) * chartWidth;
                return {
                    x: padding.left,
                    y: padding.top + index * (barHeight + barGap),
                    width: barWidth,
                    height: barHeight,
                    value: point.value,
                    label: point.label,
                    color: point.color || 'var(--action-primary)',
                };
            });
        }
    }, [data, orientation, maxValue, chartWidth, chartHeight, padding]);

    // Calculate grid lines
    const gridLines = useMemo(() => {
        if (!showGrid) return [];
        const lines: number[] = [];
        for (let i = 0; i <= customGridLines; i++) {
            lines.push((maxValue / customGridLines) * i);
        }
        return lines;
    }, [showGrid, customGridLines, maxValue]);

    // Hover/focus handlers
    const handleBarEnter = useCallback((index: number) => {
        setHoveredIndex(index);
    }, []);

    const handleBarLeave = useCallback(() => {
        setHoveredIndex(null);
    }, []);

    // Get props for individual bar
    const getBarProps = useCallback((index: number) => {
        const bar = bars[index];
        return {
            tabIndex: 0 as const,
            role: 'graphics-symbol' as const,
            'aria-label': `${bar.label}: ${bar.value}`,
            onMouseEnter: () => handleBarEnter(index),
            onMouseLeave: handleBarLeave,
            onFocus: () => handleBarEnter(index),
            onBlur: handleBarLeave,
        };
    }, [bars, handleBarEnter, handleBarLeave]);

    // Chart container props
    const chartProps = useMemo(() => ({
        role: 'img' as const,
        'aria-label': `Bar chart with ${data.length} bars`,
    }), [data.length]);

    return {
        bars,
        maxValue,
        chartProps,
        getBarProps,
        gridLines,
        hoveredIndex,
    };
}
