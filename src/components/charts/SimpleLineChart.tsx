import { cn } from '../../lib/cn'

export function SimpleLineChart({
  data,
  className,
  height = 160,
}: {
  data: { label: string; value: number }[]
  className?: string
  height?: number
}) {
  const max = Math.max(...data.map((d) => d.value), 1)
  const w = 320
  const h = height
  const pad = 8
  const points = data.map((d, i) => {
    const x = pad + (i / Math.max(data.length - 1, 1)) * (w - pad * 2)
    const y = h - pad - (d.value / max) * (h - pad * 2)
    return `${x},${y}`
  })
  const pathD = `M ${points.join(' L ')}`

  return (
    <div className={cn('w-full overflow-hidden', className)}>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={`${pathD} L ${w - pad},${h - pad} L ${pad},${h - pad} Z`}
          fill="url(#lineGrad)"
        />
        <path
          d={pathD}
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="mt-2 flex justify-between text-[10px] font-medium text-zinc-400">
        {data.map((d) => (
          <span key={d.label}>{d.label}</span>
        ))}
      </div>
    </div>
  )
}
