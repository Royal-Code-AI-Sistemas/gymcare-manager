import * as React from 'react'
import { cn } from '../lib/utils'
import { Badge } from '../ui/badge'

export interface NavItem {
  label: string
  icon?: React.ComponentType<{ className?: string }>
  href?: string
  badge?: string
  active?: boolean
  onClick?: () => void
}

export interface SidebarProps {
  items: NavItem[]
  activeHref?: string
  onNavigate?: (item: NavItem) => void
  header?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

function Sidebar({
  items,
  activeHref,
  onNavigate,
  header,
  footer,
  className,
}: SidebarProps) {
  return (
    <div className={cn('flex h-full flex-col', className)}>
      {header}
      <nav className="flex flex-1 flex-col gap-1 p-4">
        {items.map((item) => {
          const isActive = item.active || (activeHref != null && item.href === activeHref)
          const Comp = item.href ? 'a' : 'button'
          return (
            <Comp
              key={item.label}
              href={item.href}
              onClick={item.onClick ?? (() => onNavigate?.(item))}
              className={cn(
                'flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground shadow'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
              )}
            >
              {item.icon ? <item.icon className="size-4 shrink-0" /> : null}
              <span className="truncate">{item.label}</span>
              {item.badge ? <Badge className="ml-auto">{item.badge}</Badge> : null}
            </Comp>
          )
        })}
      </nav>
      {footer ? <div className="mt-auto p-4">{footer}</div> : null}
    </div>
  )
}

export { Sidebar }
