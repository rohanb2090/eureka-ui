import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type InlineAlertSeverity = 'info' | 'success' | 'warning' | 'error';

export interface InlineAlertProps {
    /** Alert severity */
    severity?: InlineAlertSeverity;

    /** Optional icon */
    icon?: ReactNode;

    /** Alert title (optional) */
    title?: string;

    /** Alert message */
    message: string;

    /** Optional action button */
    action?: {
        label: string;
        onClick: () => void;
    };

    /** Whether alert is dismissible */
    onDismiss?: () => void;

    className?: string;
}

const severityConfig = {
    info: {
        bg: 'bg-blue-50 dark:bg-blue-950',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-800 dark:text-blue-200',
        icon: 'ℹ️',
    },
    success: {
        bg: 'bg-green-50 dark:bg-green-950',
        border: 'border-green-200 dark:border-green-800',
        text: 'text-green-800 dark:text-green-200',
        icon: '✓',
    },
    warning: {
        bg: 'bg-yellow-50 dark:bg-yellow-950',
        border: 'border-yellow-200 dark:border-yellow-800',
        text: 'text-yellow-800 dark:text-yellow-200',
        icon: '⚠️',
    },
    error: {
        bg: 'bg-red-50 dark:bg-red-950',
        border: 'border-red-200 dark:border-red-800',
        text: 'text-red-800 dark:text-red-200',
        icon: '✕',
    },
};

export function InlineAlert({
    severity = 'info',
    icon,
    title,
    message,
    action,
    onDismiss,
    className,
}: InlineAlertProps) {
    const config = severityConfig[severity];
    const role = severity === 'error' || severity === 'warning' ? 'alert' : 'status';

    return (
        <div
            role={role}
            className={cn(
                config.bg,
                'border',
                config.border,
                'rounded-[var(--radius-md)]',
                'p-[var(--spacing-md)]',
                'flex gap-[var(--spacing-sm)]',
                className
            )}
        >
            {/* Icon */}
            <span className="flex-shrink-0" aria-hidden="true">
                {icon || config.icon}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
                {title && (
                    <h5 className={cn('font-medium mb-1', config.text)}>{title}</h5>
                )}
                <p className={cn('text-sm', config.text)}>{message}</p>

                {action && (
                    <button
                        onClick={action.onClick}
                        className={cn(
                            'mt-2 text-sm font-medium underline',
                            config.text,
                            'hover:opacity-80'
                        )}
                    >
                        {action.label}
                    </button>
                )}
            </div>

            {/* Dismiss button */}
            {onDismiss && (
                <button
                    onClick={onDismiss}
                    className={cn('flex-shrink-0', config.text, 'hover:opacity-80')}
                    aria-label="Dismiss alert"
                >
                    ✕
                </button>
            )}
        </div>
    );
}
