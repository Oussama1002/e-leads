import { cn } from '../../lib/cn'
import { useI18n } from '../../contexts/LocaleContext'

export function scoreTone(score: number) {
  if (score >= 75) return 'hot' as const
  if (score >= 50) return 'warm' as const
  return 'cold' as const
}

const styles = {
  hot: 'bg-emerald-50 text-emerald-800 ring-emerald-600/15 dark:bg-emerald-950/50 dark:text-emerald-300',
  warm: 'bg-amber-50 text-amber-900 ring-amber-500/20 dark:bg-amber-950/40 dark:text-amber-200',
  cold: 'bg-rose-50 text-rose-800 ring-rose-500/15 dark:bg-rose-950/40 dark:text-rose-200',
}

export function LeadScoreBadge({
  score,
  className,
  showLabel = true,
}: {
  score: number
  className?: string
  showLabel?: boolean
}) {
  const { t } = useI18n()
  const tone = scoreTone(score)
  const label =
    tone === 'hot' ? t('score.hot') : tone === 'warm' ? t('score.warm') : t('score.cold')
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset',
        styles[tone],
        className,
      )}
    >
      <span className="tabular-nums">{score}</span>
      {showLabel && <span className="font-medium opacity-80">{label}</span>}
    </span>
  )
}

export function ScoreRing({ score }: { score: number }) {
  const { t } = useI18n()
  const tone = scoreTone(score)
  const color =
    tone === 'hot' ? '#059669' : tone === 'warm' ? '#d97706' : '#e11d48'
  const pct = Math.min(100, Math.max(0, score))
  return (
    <div className="relative mx-auto flex h-36 w-36 items-center justify-center">
      <svg className="-rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="42" fill="none" className="stroke-zinc-200 dark:stroke-zinc-700" strokeWidth="8" />
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${(pct / 100) * 264} 264`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold tabular-nums text-zinc-900 dark:text-white">{score}</span>
        <span className="text-xs font-medium text-zinc-500">{t('score.ringShort')}</span>
      </div>
    </div>
  )
}
