/**
 * Pagination type
 */
export type PaginationType = 'page' | 'cursor';

/**
 * Behavioral props for pagination component
 */
export interface UsePaginationProps {
    // Page-based pagination
    /** Total number of items */
    totalItems?: number;

    /** Items per page */
    pageSize?: number;

    /** Current page (1-indexed, controlled) */
    currentPage?: number;

    /** Default page (uncontrolled) */
    defaultPage?: number;

    /** Called when page changes */
    onPageChange?: (page: number) => void;

    // Cursor-based pagination
    /** Whether there is a next page */
    hasNextPage?: boolean;

    /** Whether there is a previous page */
    hasPreviousPage?: boolean;

    /** Called when next is clicked */
    onNext?: () => void;

    /** Called when previous is clicked */
    onPrevious?: () => void;

    // Common
    /** Pagination type */
    type?: PaginationType;

    /** Whether pagination is disabled */
    isDisabled?: boolean;

    // Accessibility
    /** ARIA label for pagination nav */
    'aria-label'?: string;
}

/**
 * Return value from usePagination hook
 */
export interface UsePaginationReturn {
    /** Props to spread onto the nav element */
    navProps: {
        role: 'navigation';
        'aria-label': string;
    };

    /** Get props for page button */
    getPageButtonProps: (page: number) => {
        'aria-label': string;
        'aria-current'?: 'page';
        onClick: () => void;
        disabled: boolean;
    };

    /** Get props for previous button */
    getPreviousButtonProps: () => {
        'aria-label': string;
        onClick: () => void;
        disabled: boolean;
    };

    /** Get props for next button */
    getNextButtonProps: () => {
        'aria-label': string;
        onClick: () => void;
        disabled: boolean;
    };

    /** Current state */
    state: {
        currentPage: number;
        totalPages: number;
        pageSize: number;
        totalItems: number;
        canGoNext: boolean;
        canGoPrevious: boolean;
        pageNumbers: number[]; // For rendering page buttons
    };
}
