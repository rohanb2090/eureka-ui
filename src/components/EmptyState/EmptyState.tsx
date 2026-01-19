import { ReactNode } from 'react';
import { Button } from '../Button';
import { cn } from '../../utils/cn';

export type EmptyStateType = 'no-data' | 'filtered' | 'error' | 'permission';

export interface EmptyStateProps {
    /** Type of empty state */
    type?: EmptyStateType;

    /** Icon or illustration */
    icon?: ReactNode;

    /** Title */
    title: string;

    /** Description */
    description?: string;

    /** Primary action */
    action?: {
        label: string;
        onClick: () => void;
    };

    /** Secondary action (link style) */
    secondaryAction?: {
        label: string;
        onClick: () => void;
    };

    className?: string;
}

export function EmptyState({
    type = 'no-data',
    icon,
    title,
    description,
    action,
    secondaryAction,
    className,
}: EmptyStateProps) {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center text-center',
                'py-[var(--spacing-4xl)] px-[var(--spacing-lg)]',
                className
            )}
            role="status"
            aria-live="polite"
        >
            {icon && (
                <div className="text-4xl text-[var(--text-muted)] mb-[var(--spacing-md)]" aria-hidden="true">
                    {icon}
                </div>
            )}

            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-[var(--spacing-sm)]">
                {title}
            </h3>

            {description && (
                <p className="text-sm text-[var(--text-secondary)] max-w-md mb-[var(--spacing-lg)]">
                    {description}
                </p>
            )}

            {(action || secondaryAction) && (
                <div className="flex flex-col sm:flex-row gap-[var(--spacing-sm)] items-center">
                    {action && (
                        <Button variant="primary" onClick={action.onClick}>
                            {action.label}
                        </Button>
                    )}
                    {secondaryAction && (
                        <button
                            onClick={secondaryAction.onClick}
                            className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline"
                        >
                            {secondaryAction.label}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
