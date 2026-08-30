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
import type { NavGroup, NavItem } from './sidebar'

export type { NavGroup, NavItem }

/*
| Shell no design do CMS do Academy: sidebar preta fixa à esquerda, topo com crumb e ações,
| conteúdo com fundo #F4F5F6 e padding p-8. No mobile a sidebar vira um Sheet.
*/
export interface AppShellProps {
  groups: NavGroup[]
  activeHref?: string
  onNavigate?: (item: NavItem) => void
  /** Título da marca na sidebar (ex.: "GYMCARE"). */
  brandTitle?: string
  /** Subtítulo em lima (ex.: "ACADEMY · ADMIN"). */
  brandSubtitle?: string
  topbar?: React.ReactNode
  children: React.ReactNode
  sidebarHeader?: React.ReactNode
  sidebarFooter?: React.ReactNode
  onMenuClick?: () => void
  className?: string
}

function AppShell({
  groups,
  activeHref,
  onNavigate,
  brandTitle,
  brandSubtitle,
  topbar,
  children,
  sidebarHeader,
  sidebarFooter,
  onMenuClick,
  className,
}: AppShellProps) {
  const sidebar = (
    <Sidebar
      groups={groups}
      activeHref={activeHref}
      onNavigate={onNavigate}
      brandTitle={brandTitle}
      brandSubtitle={brandSubtitle}
      header={sidebarHeader}
      footer={sidebarFooter}
    />
  )

  return (
    <div className={cn('flex min-h-dvh bg-[#F4F5F6] dark:bg-[#0b1220]', className)}>
      <aside className="sticky top-0 hidden h-dvh w-[252px] flex-none md:block">{sidebar}</aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-[#E4E6E8] bg-[#F4F5F6]/92 px-6 py-4 backdrop-blur dark:border-[#334155] dark:bg-[#0b1220]/92 md:px-8">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={onMenuClick}
                aria-label="Abrir menu"
                className="text-[#3D4145] hover:text-black md:hidden"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[252px] bg-black p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              {sidebar}
            </SheetContent>
          </Sheet>
          <div className="min-w-0 flex-1">{topbar}</div>
        </header>

        <main className="min-w-0 flex-1">
          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

export { AppShell }
