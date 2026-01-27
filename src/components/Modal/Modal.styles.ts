import { cva } from 'class-variance-authority';

export const modalVariants = cva(
    'fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6',
    {
        variants: {
            isOpen: {
                true: 'opacity-100 pointer-events-auto',
                false: 'opacity-0 pointer-events-none',
            },
        },
        defaultVariants: {
            isOpen: false,
        },
    }
);

export const modalOverlayVariants = cva(
    'fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300',
    {
        variants: {
            isOpen: {
                true: 'opacity-100',
                false: 'opacity-0',
            },
        },
        defaultVariants: {
            isOpen: false,
        },
    }
);

export const modalContentVariants = cva(
    'relative bg-bg-surface border border-border-default shadow-2xl transition-all duration-300 flex flex-col max-h-[90vh] overflow-hidden',
    {
        variants: {
            size: {
                sm: 'w-full max-w-sm',
                md: 'w-full max-w-lg',
                lg: 'w-full max-w-2xl',
                xl: 'w-full max-w-4xl',
                full: 'w-full max-w-[calc(100%-2rem)] md:max-w-[calc(100%-4rem)]',
            },
            isOpen: {
                true: 'scale-100 opacity-100',
                false: 'scale-95 opacity-0',
            },
        },
        defaultVariants: {
            size: 'md',
            isOpen: false,
        },
    }
);
