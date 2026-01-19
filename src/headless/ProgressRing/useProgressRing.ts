import { useMemo } from 'react';
import { UseProgressRingProps, UseProgressRingReturn } from './ProgressRing.types';

const SIZE_MAP = {
    sm: { viewBox: 48, radius: 18, thickness: 4 },
    md: { viewBox: 64, radius: 26, thickness: 5 },
    lg: { viewBox: 96, radius: 42, thickness: 6 },
};

/**
 * Headless ProgressRing hook
 */
export function useProgressRing(props: UseProgressRingProps): UseProgressRingReturn {
    const { value, size = 'md', thickness } = props;

    const config = SIZE_MAP[size];
    const strokeWidth = thickness ?? config.thickness;
    const radius = config.radius;
    const viewBoxSize = config.viewBox;

    // Normalize value to 0-100
    const normalizedValue = useMemo(() => {
        return Math.max(0, Math.min(100, value));
    }, [value]);

    // Calculate circumference and offset
    const circumference = useMemo(() => {
        return 2 * Math.PI * radius;
    }, [radius]);

    const strokeDashoffset = useMemo(() => {
        const progress = normalizedValue / 100;
        return circumference * (1 - progress);
    }, [normalizedValue, circumference]);

    const progressProps = useMemo(() => ({
        role: 'progressbar' as const,
        'aria-valuenow': normalizedValue,
        'aria-valuemin': 0 as const,
        'aria-valuemax': 100 as const,
        'aria-label': `Progress: ${normalizedValue}%`,
    }), [normalizedValue]);

    return {
        normalizedValue,
        circumference,
        strokeDashoffset,
        radius,
        strokeWidth,
        viewBoxSize,
        progressProps,
    };
}
