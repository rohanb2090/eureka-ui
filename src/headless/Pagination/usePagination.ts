import { useState, useCallback, useMemo } from 'react';
import { UsePaginationProps, UsePaginationReturn } from './Pagination.types';

/**
 * Headless pagination hook
 * 
 * Responsibilities:
 * - Page state management (controlled/uncontrolled)
 * - Page navigation logic
 * - Boundary detection (first/last page)
 * - ARIA attributes for navigation
 * 
 * Does NOT handle:
 * - Visual styling
 * - Page number rendering strategy (show all, ellipsis, etc.)
 * - Data fetching
 */
export function usePagination(props: UsePaginationProps = {}): UsePaginationReturn {
    const {
        totalItems = 0,
        pageSize = 10,
        currentPage: controlledPage,
        defaultPage = 1,
        onPageChange,
        hasNextPage,
        hasPreviousPage,
        onNext,
        onPrevious,
        type = 'page',
        isDisabled = false,
        'aria-label': ariaLabel = 'Pagination',
    } = props;

    // Uncontrolled page state
    const [uncontrolledPage, setUncontrolledPage] = useState(defaultPage);

    // Use controlled if provided, otherwise uncontrolled
    const currentPage = controlledPage !== undefined ? controlledPage : uncontrolledPage;

    // Calculate total pages
    const totalPages = useMemo(() => {
        return Math.ceil(totalItems / pageSize) || 1;
    }, [totalItems, pageSize]);

    // Can navigate?
    const canGoPrevious = useMemo(() => {
        if (type === 'cursor') return hasPreviousPage ?? false;
        return currentPage > 1;
    }, [type, currentPage, hasPreviousPage]);

    const canGoNext = useMemo(() => {
        if (type === 'cursor') return hasNextPage ?? false;
        return currentPage < totalPages;
    }, [type, currentPage, totalPages, hasNextPage]);

    /**
     * Go to specific page
     */
    const goToPage = useCallback((page: number) => {
        if (isDisabled) return;
        if (page < 1 || page > totalPages) return;
        if (page === currentPage) return;

        // Update uncontrolled state if not controlled
        if (controlledPage === undefined) {
            setUncontrolledPage(page);
        }

        onPageChange?.(page);
    }, [isDisabled, totalPages, currentPage, controlledPage, onPageChange]);

    /**
     * Go to next page
     */
    const goNext = useCallback(() => {
        if (isDisabled || !canGoNext) return;

        if (type === 'cursor') {
            onNext?.();
        } else {
            goToPage(currentPage + 1);
        }
    }, [isDisabled, canGoNext, type, currentPage, onNext, goToPage]);

    /**
     * Go to previous page
     */
    const goPrevious = useCallback(() => {
        if (isDisabled || !canGoPrevious) return;

        if (type === 'cursor') {
            onPrevious?.();
        } else {
            goToPage(currentPage - 1);
        }
    }, [isDisabled, canGoPrevious, type, currentPage, onPrevious, goToPage]);

    /**
     * Generate page numbers for rendering
     * Simplified: shows all pages (visual layer can implement ellipsis logic)
     */
    const pageNumbers = useMemo(() => {
        if (type === 'cursor') return [];
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }, [type, totalPages]);

    /**
     * Get props for page button
     */
    const getPageButtonProps = useCallback((page: number) => {
        const isCurrentPage = page === currentPage;

        return {
            'aria-label': `Go to page ${page}`,
            ...(isCurrentPage && { 'aria-current': 'page' as const }),
            onClick: () => goToPage(page),
            disabled: isDisabled || isCurrentPage,
        };
    }, [currentPage, goToPage, isDisabled]);

    /**
     * Get props for previous button
     */
    const getPreviousButtonProps = useCallback(() => {
        return {
            'aria-label': 'Go to previous page',
            onClick: goPrevious,
            disabled: isDisabled || !canGoPrevious,
        };
    }, [goPrevious, isDisabled, canGoPrevious]);

    /**
     * Get props for next button
     */
    const getNextButtonProps = useCallback(() => {
        return {
            'aria-label': 'Go to next page',
            onClick: goNext,
            disabled: isDisabled || !canGoNext,
        };
    }, [goNext, isDisabled, canGoNext]);

    return {
        navProps: {
            role: 'navigation',
            'aria-label': ariaLabel,
        },

        getPageButtonProps,
        getPreviousButtonProps,
        getNextButtonProps,

        state: {
            currentPage,
            totalPages,
            pageSize,
            totalItems,
            canGoNext,
            canGoPrevious,
            pageNumbers,
        },
    };
}
