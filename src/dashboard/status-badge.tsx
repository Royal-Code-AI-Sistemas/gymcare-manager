import * as React from 'react'
import { cn } from '../lib/utils'

export type StatusTone = 'success' | 'warning' | 'error' | 'info' | 'neutral'

export interface StatusBadgeProps {
  label: React.ReactNode
  tone?: StatusTone
  dot?: boolean
  className?: string
}

const toneClasses: Record<StatusTone, string> = {
  success: 'bg-success/15 text-success',
  warning: 'bg-warning/15 text-amber-700 dark:text-amber-300',
  error: 'bg-destructive/15 text-red-700 dark:text-red-300',
  info: 'bg-blue-500/15 text-blue-700 dark:text-blue-300',
  neutral: 'bg-muted text-muted-foreground',
}

export function StatusBadge({
  label,
  tone = 'neutral',
  dot = false,
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium',
        toneClasses[tone],
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
      {label}
    </span>
  )
}
