import { MapPin } from 'lucide-react'
import { cn } from '../lib/utils'

/*
| Mapa estilizado (mock) para painéis: fundo com grade de pontos e pins posicionados por
| coordenadas normalizadas (x/y em 0..100). Sem geografia real — é um visual de "mapa"
| para dashboards de apresentação; dados reais entram quando existirem.
*/
export interface MapPoint {
  name: string
  x: number
  y: number
  value: number
}

export interface MockMapProps {
  points: MapPoint[]
  height?: number
  className?: string
}

const DEFAULT_POINTS: MapPoint[] = [
  { name: 'São Paulo', x: 52, y: 62, value: 42 },
  { name: 'Rio de Janeiro', x: 64, y: 66, value: 18 },
  { name: 'Belo Horizonte', x: 56, y: 50, value: 12 },
  { name: 'Curitiba', x: 44, y: 72, value: 8 },
  { name: 'Porto Alegre', x: 40, y: 84, value: 6 },
  { name: 'Salvador', x: 68, y: 38, value: 5 },
  { name: 'Recife', x: 76, y: 26, value: 4 },
  { name: 'Fortaleza', x: 72, y: 16, value: 3 },
  { name: 'Manaus', x: 24, y: 18, value: 2 },
  { name: 'Brasília', x: 46, y: 40, value: 10 },
]

export function MockMap({
  points = DEFAULT_POINTS,
  height = 260,
  className,
}: MockMapProps) {
  const max = Math.max(...points.map((p) => p.value), 1)

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-xl border border-[#E4E6E8] bg-[#F0F6FC]',
        className,
      )}
      style={{ height }}
    >
      {/* grade de pontos de fundo */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <pattern id="mockmap-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="#C9DCEF" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mockmap-dots)" />
        <path
          d="M10,200 C160,180 300,60 520,90"
          fill="none"
          stroke="#C9DCEF"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
        <path
          d="M30,40 C180,70 320,220 500,180"
          fill="none"
          stroke="#C9DCEF"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
      </svg>

      {/* pins */}
      {points.map((p) => {
        const tamanho = 10 + (p.value / max) * 22
        return (
          <div
            key={p.name}
            className="group absolute -translate-x-1/2 -translate-y-full"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <div className="flex flex-col items-center">
              <span className="whitespace-nowrap rounded bg-black px-1.5 py-0.5 text-[10px] font-bold text-[#D5FE4C] opacity-0 transition-opacity group-hover:opacity-100">
                {p.name} · {p.value}
              </span>
              <MapPin
                className="text-[#3168A9] drop-shadow-sm"
                style={{ width: tamanho, height: tamanho }}
                fill="#3168A9"
                stroke="#fff"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
