import { cn } from '../lib/utils'

/*
| Gráfico de barras em SVG puro (sem dependência) no estilo flat do CMS: barras com topo
| arredondado, rótulos 11px. Cores por barra via `colors` (default azul da marca).
*/
export interface BarDatum {
  label: string
  value: number
}

export interface BarChartProps {
  data: BarDatum[]
  colors?: string[]
  height?: number
  className?: string
}

export function BarChart({
  data,
  colors = ['#3168A9'],
  height = 180,
  className,
}: BarChartProps) {
  const max = Math.max(...data.map((d) => d.value), 1)

  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-end justify-between gap-2" style={{ height }}>
        {data.map((d, i) => (
          <div key={d.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <div className="flex w-full flex-1 items-end">
              <div
                className="w-full rounded-t-md transition-all duration-500"
                style={{
                  height: `${Math.max((d.value / max) * 100, 2)}%`,
                  backgroundColor: colors[i % colors.length],
                }}
                title={`${d.label}: ${d.value}`}
              />
            </div>
            <span className="text-[11px] font-bold text-[#6B7075]">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
