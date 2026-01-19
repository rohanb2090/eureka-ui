
import { useToast, ToastPosition } from '../../headless/Toast';
import { cn } from '../../utils/cn';

export interface ToastProviderProps {
    /** Toast position */
    position?: ToastPosition;

    children?: React.ReactNode;
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

const positionClasses: Record<ToastPosition, string> = {
    'top-left': 'top-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4',
};

export function ToastProvider({ position = 'bottom-right', children }: ToastProviderProps) {
    const {
        toasts,
        getContainerProps,
        getToastProps,
        getDismissButtonProps,
    } = useToast();

    const containerProps = getContainerProps(position);

    return (
        <>
            {children}

            {/* Toast Container */}
            <div
                {...containerProps}
                className={cn(
                    'fixed z-50',
                    'flex flex-col gap-[var(--spacing-sm)]',
                    'pointer-events-none',
                    positionClasses[position]
                )}
            >
                {toasts.map((toast) => {
                    const config = severityConfig[toast.severity];
                    const toastProps = getToastProps(toast);
                    const dismissProps = getDismissButtonProps(toast.id);

                    return (
                        <div
                            key={toast.id}
                            {...toastProps}
                            className={cn(
                                'pointer-events-auto',
                                'min-w-[320px] max-w-[420px]',
                                config.bg,
                                'border',
                                config.border,
                                'rounded-[var(--radius-md)]',
                                'shadow-lg',
                                'p-[var(--spacing-md)]',
                                'flex gap-[var(--spacing-sm)] items-start',
                                'animate-in slide-in-from-bottom-2 fade-in',
                                'transition-all duration-200'
                            )}
                        >
                            {/* Icon */}
                            <span className="flex-shrink-0" aria-hidden="true">
                                {config.icon}
                            </span>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <p className={cn('text-sm', config.text)}>{toast.message}</p>

                                {toast.action && (
                                    <button
                                        onClick={toast.action.onClick}
                                        className={cn(
                                            'mt-2 text-sm font-medium underline',
                                            config.text,
                                            'hover:opacity-80'
                                        )}
                                    >
                                        {toast.action.label}
                                    </button>
                                )}
                            </div>

                            {/* Dismiss button */}
                            <button
                                {...dismissProps}
                                className={cn('flex-shrink-0', config.text, 'hover:opacity-80')}
                            >
                                ✕
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}


