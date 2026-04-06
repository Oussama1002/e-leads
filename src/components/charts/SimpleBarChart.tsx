export function SimpleBarChart({
  labels,
  values,
  color = '#2563EB',
}: {
  labels: string[]
  values: number[]
  color?: string
}) {
  const max = Math.max(...values, 1)
  const h = 120
  return (
    <div className="flex h-[140px] items-end gap-2">
      {values.map((v, i) => (
        <div key={labels[i]} className="flex flex-1 flex-col items-center gap-1">
          <div
            className="w-full max-w-[32px] rounded-t-md transition-all duration-500"
            style={{
              height: `${(v / max) * h}px`,
              backgroundColor: color,
              minHeight: 4,
            }}
          />
          <span className="text-[10px] text-zinc-400">{labels[i]}</span>
        </div>
      ))}
    </div>
  )
}
