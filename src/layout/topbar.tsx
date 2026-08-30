import * as React from 'react'
import { cn } from '../lib/utils'

/*
| Barra do topo no design do CMS (GymCare Academy CMS v2.dc.html): crumb à esquerda, selo de
| salvamento automático e as ações da tela. O selo só aparece onde a tela realmente salva
| sozinha — anunciar "salvo" numa tela que exige clique seria mentir pro editor.
*/
export interface TopbarProps {
  crumb: string
  saved?: string
  actions?: React.ReactNode
  className?: string
}

function Topbar({ crumb, saved, actions, className }: TopbarProps) {
  return (
    <div className={cn('flex min-w-0 items-center gap-5', className)}>
      <div
        style={{ flex: 1, minWidth: 0, fontSize: 13, fontWeight: 700 }}
        className="text-[#5F6469] dark:text-[#9AA0A6]"
      >
        {crumb}
      </div>
      {saved ? (
        <div className="flex items-center gap-1.5 rounded-full border border-[#E4E6E8] bg-white px-3 py-1.5 text-xs font-medium text-[#3D4145] dark:border-[#334155] dark:bg-[#1e293b] dark:text-[#cbd5e1]">
          <span className="size-1.5 rounded-full bg-[#06E785]" />
          {saved}
        </div>
      ) : null}
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  )
}

export { Topbar }
