/**
 * Table row data (generic)
 */
export type TableRow = Record<string, any>;

/**
 * Sort direction
 */
export type SortDirection = 'asc' | 'desc' | null;

/**
 * Column definition
 */
export interface TableColumn {
    /** Column identifier */
    id: string;

    /** Whether column is sortable */
    isSortable?: boolean;
}

/**
 * Behavioral props for table component
 */
export interface UseTableProps<T extends TableRow = TableRow> {
    // Data
    /** Table rows */
    data: T[];

    /** Column definitions */
    columns: TableColumn[];

    // Sorting
    /** Current sort column ID (controlled) */
    sortBy?: string;

    /** Current sort direction (controlled) */
    sortDirection?: SortDirection;

    /** Called when sort changes */
    onSort?: (columnId: string, direction: SortDirection) => void;

    // Selection
    /** Selected row IDs (controlled) */
    selectedRowIds?: Set<string>;

    /** Called when selection changes */
    onSelectionChange?: (selectedIds: Set<string>) => void;

    /** Function to get row ID */
    getRowId?: (row: T) => string;

    // Accessibility
    /** Table caption */
    caption?: string;

    /** ARIA label */
    'aria-label'?: string;

    /** ID of element labeling the table */
    'aria-labelledby'?: string;
}

/**
 * Return value from useTable hook
 */
export interface UseTableReturn<T extends TableRow = TableRow> {
    /** Props to spread onto the table element */
    tableProps: {
        role: 'table';
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-rowcount'?: number;
        'aria-colcount'?: number;
    };

    /** Props for table header */
    headerProps: {
        role: 'rowgroup';
    };

    /** Props for table body */
    bodyProps: {
        role: 'rowgroup';
    };

    /** Get props for a sortable column header */
    getColumnHeaderProps: (columnId: string) => {
        role: 'columnheader';
        'aria-sort'?: 'ascending' | 'descending' | 'none';
        onClick?: () => void;
        onKeyDown?: (e: KeyboardEvent) => void;
        tabIndex?: number;
    };

    /** Get props for a row */
    getRowProps: (row: T) => {
        role: 'row';
        'aria-selected'?: boolean;
        onClick?: () => void;
    };

    /** Get props for select-all checkbox */
    getSelectAllProps: () => {
        checked: boolean;
        indeterminate: boolean;
        onChange: () => void;
        'aria-label': string;
    };

    /** Get props for row selection checkbox */
    getRowSelectProps: (row: T) => {
        checked: boolean;
        onChange: () => void;
        'aria-label': string;
    };

    /** Current state */
    state: {
        sortBy: string | null;
        sortDirection: SortDirection;
        selectedRowIds: Set<string>;
        allRowsSelected: boolean;
        someRowsSelected: boolean;
    };
}
