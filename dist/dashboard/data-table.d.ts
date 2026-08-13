import * as React from 'react';
export interface ColumnDef<T> {
    key: string;
    header: React.ReactNode;
    accessor?: (row: T) => React.ReactNode;
    align?: 'left' | 'center' | 'right';
    className?: string;
    sortable?: boolean;
}
export interface DataTableProps<T> {
    columns: ColumnDef<T>[];
    data: T[];
    searchable?: boolean;
    searchKeys?: string[];
    searchPlaceholder?: string;
    pageSize?: number;
    onRowClick?: (row: T) => void;
    emptyState?: React.ReactNode;
    className?: string;
}
export declare function DataTable<T>({ columns, data, searchable, searchKeys, searchPlaceholder, pageSize, onRowClick, emptyState, className, }: DataTableProps<T>): React.JSX.Element;
