import { useMemo } from 'react'
import { BarChart3, Clock, PieChart } from 'lucide-react'
import { SimpleBarChart } from '../components/charts/SimpleBarChart'
import { SimpleLineChart } from '../components/charts/SimpleLineChart'
import { Card } from '../components/ui/Card'
import { analyticsSeries, chartLeadValues } from '../data/mock'
import { useI18n } from '../contexts/LocaleContext'
import { stringsFor } from '../i18n/morocco'

export function Analytics() {
  const { locale, t } = useI18n()
  const months = stringsFor(locale).analyticsMonths

  const lineData = useMemo(
    () =>
      chartLeadValues.map((value, i) => ({
        label: stringsFor(locale).chartDays[i],
        value,
      })),
    [locale],
  )

  const sectors = useMemo(
    () =>
      [
        [t('analytics.sectorHvac'), 31],
        [t('analytics.sectorSolar'), 24],
        [t('analytics.sectorPlumb'), 18],
      ] as const,
    [t],
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{t('analytics.title')}</h1>
        <p className="text-sm text-zinc-500">{t('analytics.sub')}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-zinc-500">
            <BarChart3 className="h-4 w-4" />
            {t('analytics.conv')}
          </div>
          <SimpleBarChart labels={[...months]} values={analyticsSeries.conversion} color="#2563EB" />
          <p className="mt-2 text-xs text-zinc-500">{t('analytics.convSub')}</p>
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-zinc-500">
            <PieChart className="h-4 w-4" />
            {t('analytics.cpl')}
          </div>
          <SimpleBarChart labels={[...months]} values={analyticsSeries.cpl} color="#64748b" />
          <p className="mt-2 text-xs text-zinc-500">{t('analytics.cplSub')}</p>
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-zinc-500">
            <BarChart3 className="h-4 w-4" />
            {t('analytics.rpl')}
          </div>
          <SimpleBarChart labels={[...months]} values={analyticsSeries.rpl} color="#059669" />
          <p className="mt-2 text-xs text-zinc-500">{t('analytics.rplSub')}</p>
        </Card>
      </div>

      <Card className="p-5">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t('analytics.volume')}</p>
        <SimpleLineChart data={lineData} />
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-5">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
            <PieChart className="h-4 w-4 text-[#2563EB]" />
            {t('analytics.bestSector')}
          </h2>
          <p className="mt-3 text-3xl font-bold text-zinc-900 dark:text-white">{t('analytics.sectorHvac')}</p>
          <p className="mt-1 text-sm text-zinc-500">{t('analytics.bestBody')}</p>
          <div className="mt-4 space-y-2 text-sm">
            {sectors.map(([name, pct]) => (
              <div key={name} className="flex items-center gap-2">
                <span className="w-28 text-zinc-600 dark:text-zinc-400">{name}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div className="h-full rounded-full bg-[#2563EB]" style={{ width: `${pct}%` }} />
                </div>
                <span className="w-10 text-right tabular-nums text-zinc-500">{pct}%</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-5">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
            <Clock className="h-4 w-4 text-[#FACC15]" />
            {t('analytics.peak')}
          </h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{t('analytics.peakBody')}</p>
          <div className="mt-6 flex h-24 items-end gap-1">
            {Array.from({ length: 12 }).map((_, i) => {
              const h = [20, 35, 55, 80, 95, 90, 70, 45, 30, 25, 22, 18][i]
              return (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-[#2563EB]/20 to-[#2563EB]"
                  style={{ height: `${h}%` }}
                />
              )
            })}
          </div>
          <p className="mt-2 text-center text-[10px] text-zinc-400">{t('analytics.hours')}</p>
        </Card>
      </div>
    </div>
  )
}
