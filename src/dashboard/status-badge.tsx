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
  success: 'bg-[#06E785] text-[#00301B]',
  warning: 'bg-[#FFF3C4] text-[#6B4E00]',
  error: 'bg-[#FDE2E1] text-[#B42318]',
  info: 'bg-[#DFEBF8] text-[#27568C]',
  neutral: 'bg-[#EDEFF1] text-[#3D4145]',
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
        'inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[10px] font-black',
        toneClasses[tone],
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
      {label}
    </span>
  )
}
