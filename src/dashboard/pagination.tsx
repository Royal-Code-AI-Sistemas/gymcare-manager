import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../lib/utils'
import { Button } from '../ui/button'

export interface PaginationProps {
  page: number
  totalPages: number
  onChange: (page: number) => void
  className?: string
}

function getPageItems(page: number, totalPages: number): (number | '...')[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }
  const items: (number | '...')[] = [1]
  if (page > 3) items.push('...')
  const start = Math.max(2, page - 1)
  const end = Math.min(totalPages - 1, page + 1)
  for (let i = start; i <= end; i++) items.push(i)
  if (page < totalPages - 2) items.push('...')
  items.push(totalPages)
  return items
}

export function Pagination({
  page,
  totalPages,
  onChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null
  const items = getPageItems(page, totalPages)
  return (
    <div className={cn('flex items-center justify-between gap-2', className)}>
      <Button
        variant="outline"
        size="icon"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        aria-label="Página anterior"
      >
        <ChevronLeft />
      </Button>
      <div className="flex items-center gap-1">
        {items.map((item, i) =>
          item === '...' ? (
            <span
              key={`ellipsis-${i}`}
              className="px-1 text-sm text-muted-foreground"
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              onClick={() => onChange(item)}
              className={cn(
                'h-9 w-9 rounded-md border text-sm transition-colors',
                item === page
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'hover:bg-muted',
              )}
            >
              {item}
            </button>
          ),
        )}
      </div>
      <Button
        variant="outline"
        size="icon"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
        aria-label="Próxima página"
      >
        <ChevronRight />
      </Button>
    </div>
  )
}
