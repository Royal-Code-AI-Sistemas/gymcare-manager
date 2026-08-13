import * as React from 'react'
import { Menu } from 'lucide-react'
import { cn } from '../lib/utils'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Sidebar } from './sidebar'
import type { NavItem } from './sidebar'

export type { NavItem }

export interface AppShellProps {
  items: NavItem[]
  activeHref?: string
  onNavigate?: (item: NavItem) => void
  topbar?: React.ReactNode
  children: React.ReactNode
  sidebarHeader?: React.ReactNode
  sidebarFooter?: React.ReactNode
  onMenuClick?: () => void
  className?: string
}

function AppShell({
  items,
  activeHref,
  onNavigate,
  topbar,
  children,
  sidebarHeader,
  sidebarFooter,
  onMenuClick,
  className,
}: AppShellProps) {
  return (
    <div className={cn('flex h-screen overflow-hidden', className)}>
      <aside className="hidden w-64 shrink-0 border-r bg-background md:flex">
        <Sidebar
          items={items}
          activeHref={activeHref}
          onNavigate={onNavigate}
          header={sidebarHeader}
          footer={sidebarFooter}
        />
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex h-16 shrink-0 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={onMenuClick}
                aria-label="Abrir menu"
                className="md:hidden"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Sidebar
                items={items}
                activeHref={activeHref}
                onNavigate={onNavigate}
                header={sidebarHeader}
                footer={sidebarFooter}
              />
            </SheetContent>
          </Sheet>
          {topbar}
        </div>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

export { AppShell }
