import { FlowBuilder } from '../components/automation/FlowBuilder'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { useI18n } from '../contexts/LocaleContext'

export function Automation() {
  const { t } = useI18n()
  const cards = [
    { name: t('automation.auto1'), status: 'live' as const, runs: t('automation.runsSample1') },
    { name: t('automation.auto2'), status: 'paused' as const, runs: t('automation.runsSample2') },
    { name: t('automation.auto3'), status: 'live' as const, runs: t('automation.runsSample3') },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{t('automation.title')}</h1>
          <p className="text-sm text-zinc-500">{t('automation.sub')}</p>
        </div>
        <Button>{t('automation.new')}</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((a) => (
          <Card key={a.name} className="p-4">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">{a.name}</p>
            <p className="mt-1 text-xs text-zinc-500">
              {t('automation.cardRuns')} {a.runs}
            </p>
            <span
              className={`mt-3 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                a.status === 'live'
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50'
                  : 'bg-zinc-200 text-zinc-700'
              }`}
            >
              {a.status === 'live' ? t('automation.statusLive') : t('automation.statusPaused')}
            </span>
          </Card>
        ))}
      </div>

      <FlowBuilder />
    </div>
  )
}
