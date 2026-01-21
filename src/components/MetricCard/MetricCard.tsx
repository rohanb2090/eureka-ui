import { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { Surface } from '../Surface/Surface';

export interface MetricCardProps {
    /** The main label for the metric */
    label: string;
    /** The actual value to display */
    value: string | number;
    /** Optional unit (e.g., "$", "%") */
    unit?: string;
    /** Optional trend information */
    trend?: {
        value: string | number;
        direction: 'up' | 'down' | 'neutral';
        label?: string;
    };
    /** Optional icon to display next to the label */
    icon?: ReactNode;
    /** Optional helper text or description */
    helperText?: string;
    className?: string;
    onClick?: () => void;
}

export function MetricCard({
    label,
    value,
    unit,
    trend,
    icon,
    helperText,
    className,
    onClick,
}: MetricCardProps) {
    return (
        <Surface
            variant="card"
            className={cn(
                'flex flex-col gap-2 min-w-[200px] transition-colors',
                onClick && 'cursor-pointer hover:border-action-primary',
                className
            )}
            onClick={onClick}
        >
            <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-[var(--text-secondary)] truncate">
                    {label}
                </span>
                {icon && <span className="text-[var(--text-tertiary)]">{icon}</span>}
            </div>

            <div className="flex items-baseline gap-1">
                {unit && <span className="text-xl font-medium text-[var(--text-secondary)]">{unit}</span>}
                <span className="text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                    {value}
                </span>
            </div>

            {(trend || helperText) && (
                <div className="flex items-center gap-2 mt-1">
                    {trend && (
                        <div
                            className={cn(
                                'flex items-center text-xs font-semibold',
                                trend.direction === 'up' && 'text-[var(--status-success)]',
                                trend.direction === 'down' && 'text-[var(--status-error)]',
                                trend.direction === 'neutral' && 'text-[var(--text-tertiary)]'
                            )}
                        >
                            <span className="mr-1">
                                {trend.direction === 'up' && '↑'}
                                {trend.direction === 'down' && '↓'}
                                {trend.direction === 'neutral' && '•'}
                            </span>
                            {trend.value}
                            {trend.label && (
                                <span className="ml-1 font-normal text-[var(--text-tertiary)]">
                                    {trend.label}
                                </span>
                            )}
                        </div>
                    )}
                    {helperText && !trend && (
                        <span className="text-xs text-[var(--text-tertiary)] truncate">
                            {helperText}
                        </span>
                    )}
                </div>
            )}
        </Surface>
    );
}
