import { useState, useMemo, useCallback } from 'react';
import { UseLineChartProps, UseLineChartReturn } from './LineChart.types';

const PADDING = { top: 20, right: 20, bottom: 40, left: 60 };

/**
 * Headless LineChart hook
 */
export function useLineChart(props: UseLineChartProps): UseLineChartReturn {
    const {
        data,
        maxY: customMaxY,
        minY: customMinY,
        smooth = false,
        showGrid = true,
        gridLines: customGridLines = 5,
        width = 400,
        height = 300,
    } = props;

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Calculate min/max values
    const { minY, maxY } = useMemo(() => {
        const values = data.map(d => d.y);
        return {
            minY: customMinY ?? Math.min(...values, 0),
            maxY: customMaxY ?? Math.max(...values),
        };
    }, [data, customMinY, customMaxY]);

    // Calculate point positions and chart dimensions in one memo block
    const { points, chartWidth, chartHeight } = useMemo(() => {
        const innerWidth = width - PADDING.left - PADDING.right;
        const innerHeight = height - PADDING.top - PADDING.bottom;
        const xStep = innerWidth / (data.length - 1 || 1);
        const yRange = maxY - minY || 1;

        const calculatedPoints = data.map((point, index) => {
            const x = PADDING.left + index * xStep;
            const normalizedY = (point.y - minY) / yRange;
            const y = PADDING.top + innerHeight - normalizedY * innerHeight;

            return {
                x,
                y,
                value: point.y,
                label: String(point.x),
            };
        });

        return {
            points: calculatedPoints,
            chartWidth: innerWidth,
            chartHeight: innerHeight,
        };
    }, [data, width, height, maxY, minY]);

    // Generate SVG path
    const pathData = useMemo(() => {
        if (points.length === 0) return '';

        if (smooth) {
            // Bezier curve path
            let path = `M ${points[0].x} ${points[0].y}`;
            for (let i = 0; i < points.length - 1; i++) {
                const current = points[i];
                const next = points[i + 1];
                const controlX = (current.x + next.x) / 2;
                path += ` Q ${controlX} ${current.y}, ${controlX} ${(current.y + next.y) / 2}`;
                path += ` Q ${controlX} ${next.y}, ${next.x} ${next.y}`;
            }
            return path;
        } else {
            // Straight line path
            return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
        }
    }, [points, smooth]);

    // Calculate grid lines
    const gridLines = useMemo(() => {
        if (!showGrid) return [];
        const lines: number[] = [];
        const step = (maxY - minY) / customGridLines;
        for (let i = 0; i <= customGridLines; i++) {
            lines.push(minY + step * i);
        }
        return lines;
    }, [showGrid, customGridLines, maxY, minY]);

    // Hover/focus handlers
    const handlePointEnter = useCallback((index: number) => {
        setHoveredIndex(index);
    }, []);

    const handlePointLeave = useCallback(() => {
        setHoveredIndex(null);
    }, []);

    const getPointProps = useCallback((index: number) => {
        const point = points[index];
        return {
            tabIndex: 0 as const,
            role: 'graphics-symbol' as const,
            'aria-label': `${point.label}: ${point.value}`,
            onMouseEnter: () => handlePointEnter(index),
            onMouseLeave: handlePointLeave,
            onFocus: () => handlePointEnter(index),
            onBlur: handlePointLeave,
        };
    }, [points, handlePointEnter, handlePointLeave]);

    const chartProps = useMemo(() => ({
        role: 'img' as const,
        'aria-label': `Line chart with ${data.length} data points`,
    }), [data.length]);

    return {
        pathData,
        points,
        maxY,
        minY,
        chartProps,
        getPointProps,
        gridLines,
        hoveredIndex,
    };
}
