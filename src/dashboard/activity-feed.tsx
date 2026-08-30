import { cn } from '../lib/utils'

/*
| Feed de atividade: itens com bolinha colorida (cor semântica do evento), quem, o quê e
| quando — mesma fonte do activitylog usado pelo CMS.
*/
export interface ActivityItem {
  quem: string
  oque: string
  quando: string
  cor: string
}

export interface ActivityFeedProps {
  items: ActivityItem[]
  className?: string
}

export function ActivityFeed({ items, className }: ActivityFeedProps) {
  if (items.length === 0) {
    return (
      <p className="py-6 text-center text-[13px] text-[#8A9096]">
        Nenhuma atividade recente ainda.
      </p>
    )
  }

  return (
    <ul className={cn('flex flex-col', className)}>
      {items.map((item, i) => (
        <li
          key={`${item.quem}-${item.quando}-${i}`}
          className="flex items-start gap-3 border-b border-[#F0F1F2] py-3 last:border-b-0"
        >
          <span
            className="mt-1.5 size-2 flex-none rounded-full"
            style={{ backgroundColor: item.cor }}
            aria-hidden
          />
          <div className="min-w-0 flex-1">
            <p className="text-[13px] leading-snug text-[#3D4145]">
              <span className="font-bold">{item.quem}</span>{' '}
              <span className="text-[#5F6469]">{item.oque}</span>
            </p>
            <p className="mt-0.5 text-[11px] text-[#8A9096]">{item.quando}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
