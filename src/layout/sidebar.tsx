import * as React from 'react'
import { cn } from '../lib/utils'
import { GymcareMark } from '../ui/gymcare-mark'

/*
| Sidebar no design do CMS do Academy (design/GymCare Academy CMS v2.dc.html): fundo preto,
| marca com subtítulo em lima, navegação agrupada (GERAL, OPERAÇÃO, …), item ativo lima sobre
| #1C1C1C. Sem dependência de router — a lib não sabe qual router o consumidor usa.
*/
export interface NavItem {
  label: string
  icon?: React.ComponentType<{ className?: string }>
  href?: string
  badge?: string | number
  indent?: boolean
  active?: boolean
  onClick?: () => void
}

export interface NavGroup {
  title: string
  items: NavItem[]
}

export interface SidebarProps {
  groups: NavGroup[]
  activeHref?: string
  onNavigate?: (item: NavItem) => void
  /** Título da marca no topo (ex.: "GYMCARE"). */
  brandTitle?: string
  /** Subtítulo em lima (ex.: "ACADEMY · CMS"). */
  brandSubtitle?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

function Sidebar({
  groups,
  activeHref,
  onNavigate,
  brandTitle = 'GYMCARE',
  brandSubtitle = 'ACADEMY · PANEL',
  header,
  footer,
  className,
}: SidebarProps) {
  return (
    <div className={cn('flex h-full flex-col bg-black text-white', className)}>
      <div className="flex items-center gap-3 px-6 pb-6 pt-7">
        <GymcareMark className="size-7.5 flex-none text-white" />
        <div>
          <div className="text-[15px] font-black tracking-[0.14em]">{brandTitle}</div>
          <div className="text-[11px] font-bold tracking-[0.1em] text-[#D5FE4C]">{brandSubtitle}</div>
        </div>
      </div>
      {header}
      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 pb-6">
        {groups.map((group) => (
          <div key={group.title}>
            <div className="px-3 pb-2 pt-3.5 text-[10px] font-bold tracking-[0.14em] text-[#6C7075]">
              {group.title}
            </div>

            {group.items.map((item) => {
              const isActive = item.active || (activeHref != null && item.href === activeHref)
              const Comp = item.href ? 'a' : 'button'
              const Icon = item.icon
              return (
                <Comp
                  key={item.label}
                  href={item.href}
                  onClick={() => onNavigate?.(item)}
                  className={cn(
                    'flex w-full items-center justify-between rounded-lg px-3 py-2.25 text-left text-[14px] font-bold',
                    item.indent ? 'pl-6 font-normal' : '',
                    isActive
                      ? 'bg-[#1C1C1C] text-[#D5FE4C]'
                      : 'text-[#9AA0A6] hover:bg-[#151515] hover:text-white',
                  )}
                >
                  <span className="flex min-w-0 items-center gap-2">
                    {Icon ? <Icon className="size-4 flex-none" /> : null}
                    <span className="truncate">{item.label}</span>
                  </span>
                  {item.badge ? (
                    <span className="rounded-full bg-[#D5FE4C] px-2 py-0.5 text-[10px] font-black text-black">
                      {item.badge}
                    </span>
                  ) : null}
                </Comp>
              )
            })}
          </div>
        ))}
      </nav>
      {footer}
    </div>
  )
}

export { Sidebar }
