import * as React from 'react'
import { cn } from '../lib/utils'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface PageHeaderProps {
  title: string
  description?: string
  actions?: React.ReactNode
  breadcrumbs?: BreadcrumbItem[]
  className?: string
}

function PageHeader({
  title,
  description,
  actions,
  breadcrumbs,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <nav className="flex items-center gap-1 text-sm text-muted-foreground">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1
            return (
              <React.Fragment key={crumb.label}>
                {index > 0 ? <span>/</span> : null}
                {crumb.href && !isLast ? (
                  <a href={crumb.href} className="transition-colors hover:text-foreground">
                    {crumb.label}
                  </a>
                ) : (
                  <span className={isLast ? 'font-medium text-foreground' : undefined}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            )
          })}
        </nav>
      ) : null}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-black tracking-tight">{title}</h1>
          {description ? (
            <p className="mt-1 text-[13px] text-[#5F6469]">{description}</p>
          ) : null}
        </div>
        {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
      </div>
    </div>
  )
}

export { PageHeader }
