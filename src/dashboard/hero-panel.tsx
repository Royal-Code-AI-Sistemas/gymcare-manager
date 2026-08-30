import * as React from 'react'
import { cn } from '../lib/utils'

/*
| Painel hero no estilo do CMS (a faixa preta com lima do Dashboard do CMS): fundo preto,
| título com destaque em lima, descrição, faixa de métricas e ações.
*/
export interface HeroStat {
  label: string
  value: React.ReactNode
}

export interface HeroPanelProps {
  title: string
  /** Trecho do título que sai em lima (#D5FE4C). */
  lime?: string
  description?: string
  stats: HeroStat[]
  actions?: React.ReactNode
  className?: string
}

export function HeroPanel({
  title,
  lime,
  description,
  stats,
  actions,
  className,
}: HeroPanelProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-black p-8 text-white md:p-9',
        className,
      )}
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-2xl font-black leading-tight md:text-[28px]">
            {title}
            {lime ? (
              <>
                {' '}
                <span className="bg-[#D5FE4C] px-1.5 text-black">{lime}</span>
              </>
            ) : null}
          </h2>
          {description ? (
            <p className="mt-3 text-[13px] leading-relaxed text-[#9AA0A6]">{description}</p>
          ) : null}
        </div>
        {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 border-t border-[#1C1C1C] pt-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-black tracking-tight text-[#D5FE4C]">{s.value}</div>
            <div className="mt-1 text-[11px] font-bold tracking-[0.08em] text-[#8A9096]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
