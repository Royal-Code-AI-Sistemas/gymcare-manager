import * as React from 'react'
import { Menu } from 'lucide-react'
import { cn } from '../lib/utils'
import { Button } from '../ui/button'

export interface TopbarProps {
  title?: string
  subtitle?: string
  actions?: React.ReactNode
  onMenuClick?: () => void
  showMenu?: boolean
  className?: string
}

function Topbar({
  title,
  subtitle,
  actions,
  onMenuClick,
  showMenu,
  className,
}: TopbarProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur md:px-6',
        className,
      )}
    >
      {showMenu ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          aria-label="Abrir menu"
          className="md:hidden"
        >
          <Menu className="size-5" />
        </Button>
      ) : null}
      <div className="min-w-0 flex-1">
        {title ? <h1 className="truncate text-lg font-semibold">{title}</h1> : null}
        {subtitle ? (
          <p className="truncate text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      {actions ? <div className="ml-auto flex items-center gap-2">{actions}</div> : null}
    </header>
  )
}

export { Topbar }
