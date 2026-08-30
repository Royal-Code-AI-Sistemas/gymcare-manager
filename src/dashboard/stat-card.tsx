import * as React from 'react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

export interface StatCardProps {
  title: string
  value: React.ReactNode
  icon?: React.ComponentType<{ className?: string }>
  trend?: { value: string; positive?: boolean }
  description?: string
  footer?: React.ReactNode
  className?: string
}

export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  description,
  footer,
  className,
}: StatCardProps) {
  return (
    <Card className={cn('', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-[13px] font-bold text-[#6B7075]">
          {title}
        </CardTitle>
        {Icon && (
          <div className="rounded-lg bg-[#3168A9]/10 p-2 text-[#3168A9]">
            <Icon className="h-4 w-4" />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-black tracking-tight">{value}</span>
          {trend && (
            <span
              className={cn(
                'inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium',
                trend.positive
                  ? 'bg-success/10 text-success'
                  : 'bg-destructive/10 text-destructive',
              )}
            >
              {trend.positive ? (
                <ArrowUpRight className="h-3 w-3" />
              ) : (
                <ArrowDownRight className="h-3 w-3" />
              )}
              {trend.value}
            </span>
          )}
        </div>
        {description && (
          <p className="mt-1 text-[13px] text-[#5F6469]">{description}</p>
        )}
      </CardContent>
      {footer && (
        <CardFooter className="border-t px-6 py-4 text-sm text-muted-foreground">
          {footer}
        </CardFooter>
      )}
    </Card>
  )
}
