import { cn } from '../../utils/cn';

export interface GaugeChartProps {
    /** Current value */
    value: number;
    /** Minimum value (default 0) */
    min?: number;
    /** Maximum value (default 100) */
    max?: number;
    /** Label for the gauge */
    label?: string;
    /** Unit (e.g., "%", "ms") */
    unit?: string;
    /** Optional thresholds for color segments */
    thresholds?: {
        value: number;
        color: string;
    }[];
    /** Default color if no threshold matches */
    color?: string;
    /** Size of the gauge in pixels (default: 200) */
    size?: number;
    className?: string;
}

export function GaugeChart({
    value,
    min = 0,
    max = 100,
    label,
    unit,
    thresholds,
    color = 'var(--action-primary)',
    size = 200,
    className,
}: GaugeChartProps) {
    const strokeWidth = size * 0.1; // Scale stroke width relative to size
    const radius = size / 2 - strokeWidth;
    const center = size / 2;

    // Calculate percentage (restricted to 0-100)
    const normalizedValue = Math.min(Math.max(value, min), max);
    const percentage = ((normalizedValue - min) / (max - min)) * 100;

    // Gauge is a semi-circle (180 degrees)
    // SVG stroke-dasharray approach
    const circumference = Math.PI * radius;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    // Determine active color
    let activeColor = color;
    if (thresholds) {
        const sortedThresholds = [...thresholds].sort((a, b) => b.value - a.value);
        const activeThreshold = sortedThresholds.find(t => normalizedValue >= t.value);
        if (activeThreshold) {
            activeColor = activeThreshold.color;
        }
    }

    return (
        <div className={cn('flex flex-col items-center gap-2', className)}>
            <div className="relative" style={{ width: size, height: size / 2 + 20 }}>
                <svg width={size} height={size / 2 + 20} viewBox={`0 0 ${size} ${size / 2 + 20}`}>
                    {/* Background Track */}
                    <path
                        d={`M ${strokeWidth},${center} A ${radius},${radius} 0 0,1 ${size - strokeWidth},${center}`}
                        fill="none"
                        stroke="var(--bg-subtle)"
                        strokeWidth={strokeWidth}
                        strokeLinecap="butt"
                    />

                    {/* Progress Arc */}
                    <path
                        d={`M ${strokeWidth},${center} A ${radius},${radius} 0 0,1 ${size - strokeWidth},${center}`}
                        fill="none"
                        stroke={activeColor}
                        strokeWidth={strokeWidth}
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="butt"
                        className="transition-all duration-700 ease-out"
                    />

                    {/* Threshold Markers */}
                    {thresholds && thresholds.map((t, i) => {
                        const tPercentage = ((t.value - min) / (max - min)) * 180;
                        const angle = 180 - tPercentage;
                        const rad = (angle * Math.PI) / 180;
                        const x = center + radius * Math.cos(rad);
                        const y = center - radius * Math.sin(rad);

                        return (
                            <circle
                                key={i}
                                cx={x}
                                cy={y}
                                r={2}
                                fill="var(--bg-surface)"
                                stroke="var(--border-strong)"
                                strokeWidth={1}
                            />
                        );
                    })}
                </svg>

                {/* Central Value Display */}
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end h-full">
                    <span className="text-3xl font-bold text-[var(--text-primary)]">
                        {value}
                        {unit && <span className="text-sm font-normal text-[var(--text-tertiary)] ml-0.5">{unit}</span>}
                    </span>
                    {label && (
                        <span className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                            {label}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
