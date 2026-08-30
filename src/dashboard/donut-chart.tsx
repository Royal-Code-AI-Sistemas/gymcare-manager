import { cn } from '../lib/utils'

/*
| Gráfico de rosca (donut) em SVG puro: segmentos por cor, total no centro e legenda.
*/
export interface DonutDatum {
  label: string
  value: number
  color: string
}

export interface DonutChartProps {
  data: DonutDatum[]
  size?: number
  thickness?: number
  className?: string
}

export function DonutChart({
  data,
  size = 168,
  thickness = 24,
  className,
}: DonutChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0)
  const radius = (size - thickness) / 2
  const circumference = 2 * Math.PI * radius
  const center = size / 2

  let acumulado = 0

  return (
    <div className={cn('flex items-center gap-6', className)}>
      <div className="relative flex-none" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#EDEFF1"
            strokeWidth={thickness}
          />
          {total > 0 &&
            data.map((d) => {
              const len = (d.value / total) * circumference
              const offset = acumulado
              acumulado += len
              return (
                <circle
                  key={d.label}
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke={d.color}
                  strokeWidth={thickness}
                  strokeDasharray={`${len} ${circumference - len}`}
                  strokeDashoffset={-offset}
                  transform={`rotate(-90 ${center} ${center})`}
                />
              )
            })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-black">{total}</span>
          <span className="text-[11px] font-bold text-[#6B7075]">total</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {data.map((d) => (
          <div key={d.label} className="flex items-center gap-2">
            <span className="size-2.5 rounded-sm" style={{ backgroundColor: d.color }} />
            <span className="text-[13px] font-bold text-[#3D4145]">{d.label}</span>
            <span className="text-[13px] font-bold text-[#6B7075]">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
