import * as React from 'react'
import { Inbox } from 'lucide-react'
import { cn } from '../lib/utils'

export interface EmptyStateProps {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3 py-12 text-center',
        className,
      )}
    >
      <div className="h-12 w-12 rounded-full bg-[#EDEFF1] p-3 text-[#8A9096]">
        <Icon className="h-full w-full" />
      </div>
      <div>
        <p className="text-[15px] font-bold">{title}</p>
        {description && (
          <p className="mx-auto mt-1 max-w-sm text-[13px] text-[#5F6469]">
            {description}
          </p>
        )}
      </div>
      {action && <div className="mt-1">{action}</div>}
    </div>
  )
}
