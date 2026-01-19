

/**
 * Toast severity
 */
export type ToastSeverity = 'info' | 'success' | 'warning' | 'error';

/**
 * Toast position
 */
export type ToastPosition =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

/**
 * Toast configuration
 */
export interface ToastConfig {
    /** Toast ID (auto-generated if not provided) */
    id?: string;

    /** Toast message */
    message: string;

    /** Toast severity */
    severity?: ToastSeverity;

    /** Auto-dismiss duration in milliseconds (0 = no auto-dismiss) */
    duration?: number;

    /** Optional action button */
    action?: {
        label: string;
        onClick: () => void;
    };

    /** Called when toast is dismissed */
    onDismiss?: () => void;
}

/**
 * Internal toast with generated ID
 */
export interface Toast extends Required<Pick<ToastConfig, 'id' | 'message' | 'severity'>> {
    duration: number;
    action?: ToastConfig['action'];
    onDismiss?: () => void;
    isPaused: boolean;
}

/**
 * Return value from useToast hook
 */
export interface UseToastReturn {
    /** Show a toast */
    show: (config: ToastConfig) => string;

    /** Dismiss a specific toast */
    dismiss: (id: string) => void;

    /** Dismiss all toasts */
    dismissAll: () => void;

    /** Current active toasts */
    toasts: Toast[];

    /** Get props for toast container */
    getContainerProps: (position?: ToastPosition) => {
        role: 'region';
        'aria-live': 'polite' | 'assertive';
        'aria-label': string;
    };

    /** Get props for individual toast */
    getToastProps: (toast: Toast) => {
        role: 'status' | 'alert';
        'aria-live'?: 'polite' | 'assertive';
        onMouseEnter: () => void;
        onMouseLeave: () => void;
        onFocus: () => void;
        onBlur: () => void;
    };

    /** Get props for dismiss button */
    getDismissButtonProps: (toastId: string) => {
        'aria-label': string;
        onClick: () => void;
    };
}
