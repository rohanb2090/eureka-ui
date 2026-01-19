import { usePagination, UsePaginationProps } from '../../headless/Pagination';
import { Button } from '../Button';
import { cn } from '../../utils/cn';

export interface PaginationProps extends UsePaginationProps {
    /** Show page numbers (for page-based pagination) */
    showPageNumbers?: boolean;

    /** Maximum page buttons to show before using ellipsis */
    maxPageButtons?: number;

    className?: string;
}

export function Pagination({
    showPageNumbers = true,
    maxPageButtons = 7,
    className,
    ...props
}: PaginationProps) {
    const {
        navProps,
        getPageButtonProps,
        getPreviousButtonProps,
        getNextButtonProps,
        state,
    } = usePagination(props);

    const { type = 'page' } = props;

    // Calculate which page numbers to show (simplified - always show all for now)
    const pageNumbersToShow = showPageNumbers && type === 'page'
        ? state.pageNumbers.slice(0, maxPageButtons)
        : [];

    return (
        <nav
            {...navProps}
            className={cn(
                'flex items-center justify-center gap-[var(--spacing-sm)]',
                className
            )}
        >
            {/* Previous Button */}
            <Button
                {...getPreviousButtonProps()}
                variant="secondary"
                size="sm"
            >
                Previous
            </Button>

            {/* Page Numbers (for page-based pagination) */}
            {pageNumbersToShow.map((pageNum) => {
                const pageProps = getPageButtonProps(pageNum);
                const isCurrentPage = pageNum === state.currentPage;

                return (
                    <Button
                        key={pageNum}
                        {...pageProps}
                        variant={isCurrentPage ? 'primary' : 'ghost'}
                        size="sm"
                        className="min-w-[40px]"
                    >
                        {pageNum}
                    </Button>
                );
            })}

            {/* Next Button */}
            <Button
                {...getNextButtonProps()}
                variant="secondary"
                size="sm"
            >
                Next
            </Button>

            {/* Page info */}
            {type === 'page' && (
                <span className="ml-[var(--spacing-md)] text-sm text-[var(--text-muted)]">
                    Page {state.currentPage} of {state.totalPages}
                </span>
            )}
        </nav>
    );
}
