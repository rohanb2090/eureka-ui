import { useMemo } from 'react';
import { UseSparkLineProps, UseSparkLineReturn } from './SparkLine.types';

/**
 * Headless SparkLine hook
 */
export function useSparkLine(props: UseSparkLineProps): UseSparkLineReturn {
    const { data } = props;

    // Calculate min/max/current
    const { min, max, current } = useMemo(() => {
        const values = data.filter(v => typeof v === 'number' && !isNaN(v));
        return {
            min: Math.min(...values),
            max: Math.max(...values),
            current: values[values.length - 1] || 0,
        };
    }, [data]);

    // Determine trend
    const trend = useMemo(() => {
        if (data.length < 2) return 'stable';
        const first = data[0];
        const last = data[data.length - 1];
        if (last > first * 1.05) return 'up';
        if (last < first * 0.95) return 'down';
        return 'stable';
    }, [data]);

    // Generate path with normalized coordinates
    const { pathData, lastPoint } = useMemo(() => {
        if (data.length === 0) {
            return { pathData: '', lastPoint: null };
        }

        const width = 100;
        const height = 32;
        const range = max - min || 1;

        const points = data.map((value, index) => {
            const x = (index / (data.length - 1 || 1)) * width;
            const normalizedY = (value - min) / range;
            const y = height - normalizedY * height; // Invert Y
            return { x, y, value };
        });

        // Simple smoothing using quadratic bezier curves
        let path = `M ${points[0].x} ${points[0].y}`;
        for (let i = 0; i < points.length - 1; i++) {
            const current = points[i];
            const next = points[i + 1];
            const controlX = (current.x + next.x) / 2;
            path += ` Q ${controlX} ${current.y}, ${controlX} ${(current.y + next.y) / 2}`;
            path += ` Q ${controlX} ${next.y}, ${next.x} ${next.y}`;
        }

        return {
            pathData: path,
            lastPoint: points[points.length - 1] || null,
        };
    }, [data, min, max]);

    const chartProps = useMemo(() => ({
        role: 'img' as const,
        'aria-label': `Trend: ${trend}, Current: ${current}, Min: ${min}, Max: ${max}`,
    }), [trend, current, min, max]);

    return {
        pathData,
        lastPoint,
        min,
        max,
        current,
        trend,
        chartProps,
    };
}
