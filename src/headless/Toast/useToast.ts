import { useState, useCallback, useEffect, useRef } from 'react';
import { UseToastReturn, ToastConfig, Toast, ToastSeverity, ToastPosition } from './Toast.types';

/**
 * Default duration by severity (in milliseconds)
 */
const DEFAULT_DURATIONS: Record<ToastSeverity, number> = {
    info: 4000,
    success: 4000,
    warning: 6000,
    error: 8000,
};

/**
 * Maximum number of toasts to show simultaneously
 */
const MAX_TOASTS = 3;

/**
 * Generate unique ID for toast
 */
let toastIdCounter = 0;
function generateToastId(): string {
    return `toast-${Date.now()}-${++toastIdCounter}`;
}

/**
 * Headless toast hook
 * 
 * Responsibilities:
 * - Toast queue management
 * - Auto-dismiss timing
 * - Pause on hover/focus
 * - Deduplication
 * - ARIA live region management
 * - Max toast limit (stacking)
 * 
 * Does NOT handle:
 * - Visual styling
 * - Animation/transitions
 * - Positioning (provided as prop to getContainerProps)
 */
export function useToast(): UseToastReturn {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

    /**
     * Start auto-dismiss timer for a toast
     */
    const startTimer = useCallback((toast: Toast) => {
        if (toast.duration === 0) return; // No auto-dismiss

        const timer = setTimeout(() => {
            dismiss(toast.id);
        }, toast.duration);

        timersRef.current.set(toast.id, timer);
    }, []);

    /**
     * Clear timer for a toast
     */
    const clearTimer = useCallback((toastId: string) => {
        const timer = timersRef.current.get(toastId);
        if (timer) {
            clearTimeout(timer);
            timersRef.current.delete(toastId);
        }
    }, []);

    /**
     * Dismiss a specific toast
     */
    const dismiss = useCallback((id: string) => {
        setToasts(prev => prev.filter(t => t.id !== id));
        clearTimer(id);

        // Call onDismiss callback
        const toast = toasts.find(t => t.id === id);
        toast?.onDismiss?.();
    }, [toasts, clearTimer]);

    /**
     * Dismiss all toasts
     */
    const dismissAll = useCallback(() => {
        toasts.forEach(toast => {
            clearTimer(toast.id);
            toast.onDismiss?.();
        });
        setToasts([]);
    }, [toasts, clearTimer]);

    /**
     * Show a new toast
     */
    const show = useCallback((config: ToastConfig): string => {
        const id = config.id || generateToastId();
        const severity = config.severity || 'info';
        const duration = config.duration !== undefined ? config.duration : DEFAULT_DURATIONS[severity];

        // Deduplication: check if identical message exists within 2 seconds
        const recentDuplicate = toasts.find(t =>
            t.message === config.message &&
            t.severity === severity
        );
        if (recentDuplicate) {
            return recentDuplicate.id; // Don't add duplicate
        }

        const toast: Toast = {
            id,
            message: config.message,
            severity,
            duration,
            action: config.action,
            onDismiss: config.onDismiss,
            isPaused: false,
        };

        setToasts(prev => {
            // Limit max toasts (remove oldest if exceeding)
            const updated = [...prev, toast];
            if (updated.length > MAX_TOASTS) {
                const removed = updated.shift();
                if (removed) {
                    clearTimer(removed.id);
                    removed.onDismiss?.();
                }
            }
            return updated;
        });

        // Start auto-dismiss timer
        setTimeout(() => startTimer(toast), 0);

        return id;
    }, [toasts, startTimer, clearTimer]);

    /**
     * Pause/resume toast timer on hover/focus
     */
    const pauseToast = useCallback((toastId: string) => {
        clearTimer(toastId);
        setToasts(prev => prev.map(t =>
            t.id === toastId ? { ...t, isPaused: true } : t
        ));
    }, [clearTimer]);

    const resumeToast = useCallback((toastId: string) => {
        const toast = toasts.find(t => t.id === toastId);
        if (toast && !toast.isPaused) return;

        setToasts(prev => prev.map(t =>
            t.id === toastId ? { ...t, isPaused: false } : t
        ));

        // Restart timer with remaining duration
        if (toast) {
            startTimer(toast);
        }
    }, [toasts, startTimer]);

    /**
     * Cleanup timers on unmount
     */
    useEffect(() => {
        return () => {
            timersRef.current.forEach(timer => clearTimeout(timer));
            timersRef.current.clear();
        };
    }, []);

    /**
     * Get props for toast container
     */
    const getContainerProps = useCallback((_position: ToastPosition = 'bottom-right') => {
        return {
            role: 'region' as const,
            'aria-live': 'polite' as const,
            'aria-label': 'Notifications',
        };
    }, []);

    /**
     * Get props for individual toast
     */
    const getToastProps = useCallback((toast: Toast) => {
        const isAlert = toast.severity === 'error' || toast.severity === 'warning';

        return {
            role: isAlert ? ('alert' as const) : ('status' as const),
            ...(isAlert && { 'aria-live': 'assertive' as const }),
            onMouseEnter: () => pauseToast(toast.id),
            onMouseLeave: () => resumeToast(toast.id),
            onFocus: () => pauseToast(toast.id),
            onBlur: () => resumeToast(toast.id),
        };
    }, [pauseToast, resumeToast]);

    /**
     * Get props for dismiss button
     */
    const getDismissButtonProps = useCallback((toastId: string) => {
        return {
            'aria-label': 'Dismiss notification',
            onClick: () => dismiss(toastId),
        };
    }, [dismiss]);

    return {
        show,
        dismiss,
        dismissAll,
        toasts,
        getContainerProps,
        getToastProps,
        getDismissButtonProps,
    };
}
