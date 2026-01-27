import { useState, useMemo, useCallback } from 'react';
import { UsePieChartProps, UsePieChartReturn, PieSegment } from './PieChart.types';

const DEFAULT_COLORS = [
    'var(--chart-1)',
    'var(--chart-2)',
    'var(--chart-3)',
    'var(--chart-4)',
    'var(--chart-5)',
];

/**
 * Headless PieChart hook
 */
export function usePieChart(props: UsePieChartProps): UsePieChartReturn {
    const { data, variant = 'pie' } = props;

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Calculate total
    const total = useMemo(() => {
        return data.reduce((sum, item) => sum + item.value, 0);
    }, [data]);

    // Calculate segments
    const segments: PieSegment[] = useMemo(() => {
        if (total === 0) return [];

        let currentAngle = -90; // Start at top

        return data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const angleDelta = (item.value / total) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angleDelta;

            // Generate SVG path
            const radius = 100;
            const innerRadius = variant === 'donut' ? 60 : 0;

            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;

            const x1 = 100 + radius * Math.cos(startRad);
            const y1 = 100 + radius * Math.sin(startRad);
            const x2 = 100 + radius * Math.cos(endRad);
            const y2 = 100 + radius * Math.sin(endRad);

            const largeArc = angleDelta > 180 ? 1 : 0;

            let path: string;
            if (variant === 'donut') {
                const ix1 = 100 + innerRadius * Math.cos(startRad);
                const iy1 = 100 + innerRadius * Math.sin(startRad);
                const ix2 = 100 + innerRadius * Math.cos(endRad);
                const iy2 = 100 + innerRadius * Math.sin(endRad);

                path = [
                    `M ${x1} ${y1}`,
                    `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
                    `L ${ix2} ${iy2}`,
                    `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix1} ${iy1}`,
                    `Z`,
                ].join(' ');
            } else {
                path = [
                    `M 100 100`,
                    `L ${x1} ${y1}`,
                    `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
                    `Z`,
                ].join(' ');
            }

            currentAngle = endAngle;

            return {
                startAngle,
                endAngle,
                value: item.value,
                percentage,
                label: item.label,
                color: item.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length],
                path,
            };
        });
    }, [data, total, variant]);

    // Hover handlers
    const handleSegmentEnter = useCallback((index: number) => {
        setHoveredIndex(index);
    }, []);

    const handleSegmentLeave = useCallback(() => {
        setHoveredIndex(null);
    }, []);

    const getSegmentProps = useCallback((index: number) => {
        const segment = segments[index];
        return {
            tabIndex: 0 as const,
            role: 'graphics-symbol' as const,
            'aria-label': `${segment.label}: ${segment.value} (${segment.percentage.toFixed(1)}%)`,
            onMouseEnter: () => handleSegmentEnter(index),
            onMouseLeave: handleSegmentLeave,
            onFocus: () => handleSegmentEnter(index),
            onBlur: handleSegmentLeave,
        };
    }, [segments, handleSegmentEnter, handleSegmentLeave]);

    const chartProps = useMemo(() => ({
        role: 'img' as const,
        'aria-label': `${variant === 'donut' ? 'Donut' : 'Pie'} chart with ${data.length} segments`,
    }), [data.length, variant]);

    return {
        segments,
        total,
        chartProps,
        getSegmentProps,
        hoveredIndex,
    };
}
