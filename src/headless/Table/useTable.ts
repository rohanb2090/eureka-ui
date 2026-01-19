import { useState, useCallback, useMemo, KeyboardEvent as ReactKeyboardEvent } from 'react';
import { UseTableProps, UseTableReturn, TableRow, SortDirection } from './Table.types';

/**
 * Headless table hook
 * 
 * Responsibilities:
 * - Sorting state management
 * - Row selection management
 * - Keyboard navigation for sortable headers
 * - ARIA attributes for accessibility
 * 
 * Does NOT handle:
 * - Visual styling
 * - Data fetching or pagination
 * - Cell rendering
 * - Complex filtering
 * 
 * Note: This is a simplified version focusing on sorting and selection only
 */
export function useTable<T extends TableRow = TableRow>(
    props: UseTableProps<T>
): UseTableReturn<T> {
    const {
        data,
        columns,
        sortBy: controlledSortBy,
        sortDirection: controlledSortDirection,
        onSort,
        selectedRowIds: controlledSelectedIds,
        onSelectionChange,
        getRowId = (_row: any, index: any) => String(index),

        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
    } = props;

    // Uncontrolled sorting state
    const [uncontrolledSortBy, setUncontrolledSortBy] = useState<string | null>(null);
    const [uncontrolledSortDirection, setUncontrolledSortDirection] = useState<SortDirection>(null);

    // Uncontrolled selection state
    const [uncontrolledSelectedIds, setUncontrolledSelectedIds] = useState<Set<string>>(new Set());

    // Use controlled if provided, otherwise uncontrolled
    const sortBy = controlledSortBy !== undefined ? controlledSortBy : uncontrolledSortBy;
    const sortDirection = controlledSortDirection !== undefined ? controlledSortDirection : uncontrolledSortDirection;
    const selectedRowIds = controlledSelectedIds !== undefined ? controlledSelectedIds : uncontrolledSelectedIds;

    /**
     * Handle column sort
     */
    const handleSort = useCallback((columnId: string) => {
        const column = columns.find(col => col.id === columnId);
        if (!column?.isSortable) return;

        let newDirection: SortDirection = 'asc';

        // Toggle sort direction
        if (sortBy === columnId) {
            if (sortDirection === 'asc') {
                newDirection = 'desc';
            } else if (sortDirection === 'desc') {
                newDirection = null; // Clear sort
            }
        }

        // Update uncontrolled state if not controlled
        if (controlledSortBy === undefined) {
            setUncontrolledSortBy(newDirection ? columnId : null);
            setUncontrolledSortDirection(newDirection);
        }

        onSort?.(columnId, newDirection);
    }, [columns, sortBy, sortDirection, controlledSortBy, onSort]);

    /**
     * Toggle row selection
     */
    const toggleRowSelection = useCallback((rowId: string) => {
        const newSelectedIds = new Set(selectedRowIds);

        if (newSelectedIds.has(rowId)) {
            newSelectedIds.delete(rowId);
        } else {
            newSelectedIds.add(rowId);
        }

        // Update uncontrolled state if not controlled
        if (controlledSelectedIds === undefined) {
            setUncontrolledSelectedIds(newSelectedIds);
        }

        onSelectionChange?.(newSelectedIds);
    }, [selectedRowIds, controlledSelectedIds, onSelectionChange]);

    /**
     * Toggle all rows selection
     */
    const toggleAllRows = useCallback(() => {
        const allRowIds = data.map((row, index) => getRowId(row, index));
        const newSelectedIds = new Set<string>();

        // If all rows are selected, deselect all; otherwise select all
        if (selectedRowIds.size === data.length) {
            // Deselect all
        } else {
            // Select all
            allRowIds.forEach(id => newSelectedIds.add(id));
        }

        // Update uncontrolled state if not controlled
        if (controlledSelectedIds === undefined) {
            setUncontrolledSelectedIds(newSelectedIds);
        }

        onSelectionChange?.(newSelectedIds);
    }, [data, getRowId, selectedRowIds, controlledSelectedIds, onSelectionChange]);

    /**
     * Selection state helpers
     */
    const allRowsSelected = useMemo(() => {
        return data.length > 0 && selectedRowIds.size === data.length;
    }, [data, selectedRowIds]);

    const someRowsSelected = useMemo(() => {
        return selectedRowIds.size > 0 && selectedRowIds.size < data.length;
    }, [data, selectedRowIds]);

    /**
     * Get props for column header
     */
    const getColumnHeaderProps = useCallback((columnId: string) => {
        const column = columns.find(col => col.id === columnId);
        const isSortable = column?.isSortable ?? false;
        const isCurrentSort = sortBy === columnId;

        const props: ReturnType<UseTableReturn['getColumnHeaderProps']> = {
            role: 'columnheader',
        };

        if (isSortable) {
            // ARIA sort attribute
            if (isCurrentSort && sortDirection) {
                props['aria-sort'] = sortDirection === 'asc' ? 'ascending' : 'descending';
            } else {
                props['aria-sort'] = 'none';
            }

            // Click handler for mouse
            props.onClick = () => handleSort(columnId);

            // Keyboard handler (Enter/Space)
            props.onKeyDown = (e: ReactKeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSort(columnId);
                }
            };

            // Make focusable
            props.tabIndex = 0;
        }

        return props;
    }, [columns, sortBy, sortDirection, handleSort]);

    /**
     * Get props for row
     */
    const getRowProps = useCallback((row: T, index: number) => {
        const rowId = getRowId(row, index);
        const isSelected = selectedRowIds.has(rowId);

        return {
            role: 'row' as const,
            ...(isSelected && { 'aria-selected': true }),
            onClick: () => toggleRowSelection(rowId),
        };
    }, [getRowId, selectedRowIds, toggleRowSelection]);

    /**
     * Get props for select-all checkbox
     */
    const getSelectAllProps = useCallback(() => {
        return {
            checked: allRowsSelected,
            indeterminate: someRowsSelected,
            onChange: toggleAllRows,
            'aria-label': 'Select all rows',
        };
    }, [allRowsSelected, someRowsSelected, toggleAllRows]);

    /**
     * Get props for row selection checkbox
     */
    const getRowSelectProps = useCallback((row: T, index: number) => {
        const rowId = getRowId(row, index);
        const isSelected = selectedRowIds.has(rowId);

        return {
            checked: isSelected,
            onChange: () => toggleRowSelection(rowId),
            'aria-label': `Select row ${index + 1}`,
        };
    }, [getRowId, selectedRowIds, toggleRowSelection]);

    return {
        tableProps: {
            role: 'table',
            ...(ariaLabel && { 'aria-label': ariaLabel }),
            ...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby }),
            ...(data.length && { 'aria-rowcount': data.length + 1 }), // +1 for header
            ...(columns.length && { 'aria-colcount': columns.length }),
        },

        headerProps: {
            role: 'rowgroup',
        },

        bodyProps: {
            role: 'rowgroup',
        },

        getColumnHeaderProps,
        getRowProps,
        getSelectAllProps,
        getRowSelectProps,

        state: {
            sortBy,
            sortDirection,
            selectedRowIds,
            allRowsSelected,
            someRowsSelected,
        },
    };
}
