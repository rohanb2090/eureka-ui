import { ReactNode } from 'react';
import { useTable, UseTableProps, TableRow } from '../../headless/Table';
import { Checkbox } from '../Checkbox';
import { cn } from '../../utils/cn';

export interface TableProps<T extends TableRow = TableRow> extends UseTableProps<T> {
    /** Table column definitions with rendering */
    columns: Array<{
        id: string;
        header: string;
        isSortable?: boolean;
        render?: (row: T) => ReactNode;
        width?: string;
    }>;

    /** Whether table has selectable rows */
    selectable?: boolean;

    /** Whether table has striped rows */
    striped?: boolean;

    className?: string;
}

export function Table<T extends TableRow = TableRow>({
    data,
    columns,
    selectable = false,
    striped = false,
    className,
    ...tableProps
}: TableProps<T>) {
    const {
        tableProps: tablePropsFromHook,
        headerProps,
        bodyProps,
        getColumnHeaderProps,
        // getRowProps,
        getSelectAllProps,
        getRowSelectProps,
        state,
    } = useTable({ data, columns, ...tableProps });

    return (
        <div className="w-full overflow-x-auto">
            <table
                {...tablePropsFromHook}
                className={cn(
                    'w-full border-collapse',
                    'text-sm text-[var(--text-primary)]',
                    className
                )}
            >
                {/* Header */}
                <thead {...headerProps}>
                    <tr className="border-b border-[var(--border-subtle)]">
                        {selectable && (
                            <th className="w-12 px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left">
                                <Checkbox {...getSelectAllProps()} size="sm" />
                            </th>
                        )}
                        {columns.map((column) => {
                            const headerProps = getColumnHeaderProps(column.id);
                            const isSortable = column.isSortable;
                            const isSorted = state.sortBy === column.id;

                            return (
                                <th
                                    key={column.id}
                                    {...headerProps}
                                    style={{ width: column.width }}
                                    className={cn(
                                        'px-[var(--spacing-md)] py-[var(--spacing-sm)]',
                                        'text-left font-medium text-[var(--text-secondary)]',
                                        isSortable && 'cursor-pointer hover:text-[var(--text-primary)]',
                                        'select-none'
                                    )}
                                >
                                    <div className="flex items-center gap-2">
                                        {column.header}
                                        {isSortable && isSorted && (
                                            <span className="text-xs" aria-hidden="true">
                                                {state.sortDirection === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                {/* Body */}
                <tbody {...bodyProps}>
                    {data.map((row, rowIndex) => {
                        const isSelected = state.selectedRowIds.has(String(rowIndex));

                        return (
                            <tr
                                key={rowIndex}
                                className={cn(
                                    'border-b border-[var(--border-subtle)]',
                                    'transition-colors',
                                    striped && rowIndex % 2 === 1 && 'bg-[var(--bg-subtle)]',
                                    isSelected && 'bg-blue-50 dark:bg-blue-950',
                                    'hover:bg-[var(--bg-subtle)]'
                                )}
                            >
                                {selectable && (
                                    <td className="px-[var(--spacing-md)] py-[var(--spacing-sm)]">
                                        <Checkbox {...getRowSelectProps(row, rowIndex)} size="sm" />
                                    </td>
                                )}
                                {columns.map((column) => (
                                    <td
                                        key={column.id}
                                        className="px-[var(--spacing-md)] py-[var(--spacing-sm)]"
                                    >
                                        {column.render ? column.render(row) : (row[column.id] as ReactNode)}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {data.length === 0 && (
                <div className="py-[var(--spacing-4xl)] text-center text-[var(--text-muted)]">
                    No data available
                </div>
            )}
        </div>
    );
}
