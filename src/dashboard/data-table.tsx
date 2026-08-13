import * as React from 'react'
import { Search } from 'lucide-react'
import { cn } from '../lib/utils'
import { Input } from '../ui/input'
import { Pagination } from './pagination'
import { EmptyState } from './empty-state'

export interface ColumnDef<T> {
  key: string
  header: React.ReactNode
  accessor?: (row: T) => React.ReactNode
  align?: 'left' | 'center' | 'right'
  className?: string
  sortable?: boolean
}

export interface DataTableProps<T> {
  columns: ColumnDef<T>[]
  data: T[]
  searchable?: boolean
  searchKeys?: string[]
  searchPlaceholder?: string
  pageSize?: number
  onRowClick?: (row: T) => void
  emptyState?: React.ReactNode
  className?: string
}

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export function DataTable<T>({
  columns,
  data,
  searchable = false,
  searchKeys,
  searchPlaceholder = 'Buscar...',
  pageSize = 10,
  onRowClick,
  emptyState,
  className,
}: DataTableProps<T>) {
  const [query, setQuery] = React.useState('')
  const [page, setPage] = React.useState(1)

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return data
    return data.filter((row) => {
      if (searchKeys && searchKeys.length > 0) {
        return searchKeys.some((key) =>
          String(
            (row as Record<string, unknown>)[key] ?? '',
          ).toLowerCase().includes(q),
        )
      }
      return JSON.stringify(row).toLowerCase().includes(q)
    })
  }, [data, query, searchKeys])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const safePage = Math.min(page, totalPages)
  const paged = React.useMemo(() => {
    const start = (safePage - 1) * pageSize
    return filtered.slice(start, start + pageSize)
  }, [filtered, safePage, pageSize])

  const handleChangePage = React.useCallback(
    (next: number) => {
      setPage(Math.min(Math.max(1, next), totalPages))
    },
    [totalPages],
  )

  return (
    <div className={cn('', className)}>
      {searchable && (
        <div className="relative mb-4">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setPage(1)
            }}
            placeholder={searchPlaceholder}
            className="pl-9"
          />
        </div>
      )}
      {filtered.length === 0 ? (
        emptyState ?? (
          <EmptyState
            title="Nenhum resultado"
            description="Tente ajustar a busca ou o filtro aplicado."
          />
        )
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-xs uppercase text-muted-foreground">
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className={cn(
                        'px-3 py-2 font-medium',
                        alignClasses[col.align ?? 'left'],
                        col.className,
                      )}
                    >
                      {col.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paged.map((row, i) => (
                  <tr
                    key={i}
                    onClick={onRowClick ? () => onRowClick(row) : undefined}
                    className={cn(
                      'border-b hover:bg-muted/50',
                      onRowClick && 'cursor-pointer',
                    )}
                  >
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={cn(
                          'px-3 py-2',
                          alignClasses[col.align ?? 'left'],
                          col.className,
                        )}
                      >
                        {col.accessor
                          ? col.accessor(row)
                          : String(
                              (row as Record<string, unknown>)[col.key] ?? '',
                            )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {totalPages > 1 && (
            <div className="mt-4">
              <Pagination
                page={safePage}
                totalPages={totalPages}
                onChange={handleChangePage}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}
