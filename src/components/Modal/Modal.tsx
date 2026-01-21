import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';
import { modalVariants, modalOverlayVariants, modalContentVariants } from './Modal.styles';
import { Button } from '../Button';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    className?: string;
}

export function Modal({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = 'md',
    className,
}: ModalProps) {
    const [mounted, setMounted] = React.useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleEscape = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
            onClose();
        }
    }, [isOpen, onClose]);

    useEffect(() => {
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [handleEscape]);

    if (!mounted) return null;

    return createPortal(
        <div className={cn(modalVariants({ isOpen }))}>
            <div
                className={cn(modalOverlayVariants({ isOpen }))}
                onClick={handleBackdropClick}
                aria-hidden="true"
            />
            <div
                className={cn(modalContentVariants({ size, isOpen }), className)}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'modal-title' : undefined}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border-subtle bg-bg-surface sticky top-0 z-10">
                    {title && (
                        <h2 id="modal-title" className="text-lg font-bold text-text-primary">
                            {title}
                        </h2>
                    )}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClose}
                        className="ml-auto"
                        aria-label="Close modal"
                    >
                        ✕
                    </Button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 text-text-secondary">
                    {children}
                </div>

                {/* Footer */}
                {footer && (
                    <div className="p-4 border-t border-border-subtle bg-bg-muted flex justify-end gap-3 sticky bottom-0 z-10">
                        {footer}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}
