import { cn } from '../lib/utils'

/*
| Gráfico de linha em SVG puro: polilinha + área translúcida + pontos. Sem dependência,
| preserva proporção na largura (viewBox 0..100 × 0..100).
*/
export interface LineDatum {
  label: string
  value: number
}

export interface LineChartProps {
  data: LineDatum[]
  color?: string
  height?: number
  className?: string
}

export function LineChart({
  data,
  color = '#3168A9',
  height = 180,
  className,
}: LineChartProps) {
  if (data.length < 2) return null

  const max = Math.max(...data.map((d) => d.value), 1)
  const step = 100 / (data.length - 1)
  const points = data
    .map((d, i) => `${(i * step).toFixed(2)},${(100 - (d.value / max) * 100).toFixed(2)}`)
    .join(' ')

  return (
    <div className={cn('w-full', className)}>
      <div className="relative w-full" style={{ height }}>
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <path
            d={`M0,100 L${points.split(' ').map((p) => p.replace(',', ',')).join(' L')} L100,100 Z`}
            fill={color}
            opacity="0.12"
          />
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {data.map((d, i) => (
          <span
            key={d.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(i * step).toFixed(2)}%`, top: `${(100 - (d.value / max) * 100).toFixed(2)}%` }}
            title={`${d.label}: ${d.value}`}
          >
            <span className="block size-2 rounded-full border-2 border-white" style={{ backgroundColor: color }} />
          </span>
        ))}
      </div>
      <div className="mt-2 flex justify-between">
        {data.map((d) => (
          <span key={d.label} className="text-[11px] font-bold text-[#6B7075]">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  )
}
