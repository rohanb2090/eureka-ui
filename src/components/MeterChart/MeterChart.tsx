import { cn } from '../../utils/cn';

export interface MeterChartProps {
    /** Current value */
    value: number;
    /** Maximum possible value */
    max?: number;
    /** Label for the metric */
    label?: string;
    /** Optional unit (e.g., "%", "GB") */
    unit?: string;
    /** Optional thresholds for color coding */
    thresholds?: {
        value: number;
        color: string;
        label?: string;
    }[];
    /** Default bar color */
    color?: string;
    className?: string;
    /** Whether to show the value text */
    showValue?: boolean;
}

export function MeterChart({
    value,
    max = 100,
    label,
    unit,
    thresholds,
    color = 'var(--action-primary)',
    className,
    showValue = true,
}: MeterChartProps) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    // Determine color based on thresholds
    let activeColor = color;
    if (thresholds) {
        const sortedThresholds = [...thresholds].sort((a, b) => b.value - a.value);
        const activeThreshold = sortedThresholds.find(t => value >= t.value);
        if (activeThreshold) {
            activeColor = activeThreshold.color;
        }
    }

    return (
        <div className={cn('flex flex-col gap-2 w-full', className)}>
            {(label || showValue) && (
                <div className="flex justify-between items-baseline gap-2">
                    {label && (
                        <span className="text-sm font-medium text-[var(--text-secondary)]">
                            {label}
                        </span>
                    )}
                    {showValue && (
                        <span className="text-sm font-bold text-[var(--text-primary)]">
                            {value}
                            {unit && <span className="ml-0.5 font-normal text-[var(--text-tertiary)]">{unit}</span>}
                            <span className="ml-1 font-normal text-[var(--text-tertiary)]">/ {max}{unit}</span>
                        </span>
                    )}
                </div>
            )}

            <div className="relative h-2 w-full bg-[var(--bg-subtle)] overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-full transition-all duration-500 ease-out"
                    style={{
                        width: `${percentage}%`,
                        backgroundColor: activeColor,
                    }}
                />
            </div>

            {thresholds && (
                <div className="flex justify-between mt-1 h-1 w-full relative">
                    {thresholds.map((t, i) => (
                        <div
                            key={i}
                            className="absolute h-1 w-0.5 bg-[var(--border-strong)]"
                            style={{ left: `${(t.value / max) * 100}%` }}
                            title={t.label || `${t.value}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
