import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Bot, DollarSign, Percent, Users } from 'lucide-react'
import { AiMagicMoment } from '../../components/demo/AiMagicMoment'
import { SimpleLineChart } from '../../components/charts/SimpleLineChart'
import { LeadScoreBadge } from '../../components/ui/LeadScoreBadge'
import { Card } from '../../components/ui/Card'
import { chartLeadValues, leads } from '../../data/mock'
import { useI18n } from '../../contexts/LocaleContext'
import { stringsFor } from '../../i18n/morocco'

export function AdminDashboard() {
  const { locale, t, pick } = useI18n()
  const recent = [...leads].sort((a, b) => +new Date(b.receivedAt) - +new Date(a.receivedAt)).slice(0, 4)

  const chartData = useMemo(
    () =>
      chartLeadValues.map((value, i) => ({
        label: stringsFor(locale).chartDays[i],
        value,
      })),
    [locale],
  )

  const kpis = useMemo(
    () => [
      { label: t('dashboard.kpiLeads'), value: '1 248', delta: '+12%', icon: Users, tone: 'text-[#2563EB]' },
      { label: t('dashboard.kpiConv'), value: '28,4 %', delta: '+2,1 %', icon: Percent, tone: 'text-emerald-600' },
      { label: t('dashboard.kpiRevenue'), value: '2,4 M MAD', delta: '+8%', icon: DollarSign, tone: 'text-zinc-900 dark:text-white' },
      { label: t('dashboard.kpiAi'), value: '3,2k', delta: t('dashboard.live'), icon: Bot, tone: 'text-violet-600' },
    ],
    [t],
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{t('dashboard.title')}</h1>
        <p className="text-sm text-zinc-500">{t('dashboard.sub')}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.label} className="p-5 transition hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{k.label}</p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-zinc-900 dark:text-white">{k.value}</p>
                <p className="mt-1 text-xs font-medium text-emerald-600">{k.delta}</p>
              </div>
              <div className={`rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800 ${k.tone}`}>
                <k.icon className="h-5 w-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <AiMagicMoment />

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="p-5 lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t('dashboard.chartTitle')}</p>
              <p className="text-xs text-zinc-500">{t('dashboard.chartSub')}</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
              {t('dashboard.chartBadge')}
            </span>
          </div>
          <SimpleLineChart data={chartData} />
        </Card>

        <Card className="border-[#2563EB]/20 bg-gradient-to-br from-blue-50/50 to-white p-5 dark:from-blue-950/20 dark:to-zinc-900 lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#2563EB]">{t('dashboard.aiRecTitle')}</p>
          <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-white">{t('dashboard.aiRecSub')}</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="rounded-lg border border-amber-200/80 bg-amber-50/80 p-3 dark:border-amber-900/50 dark:bg-amber-950/30">
              <span className="text-xs font-bold text-amber-800 dark:text-amber-200">{t('dashboard.priorityLabel')}</span>
              <p className="mt-1 text-zinc-800 dark:text-zinc-200">{t('dashboard.aiRec1')}</p>
            </li>
            <li className="rounded-lg border border-zinc-200 bg-white/80 p-3 dark:border-zinc-700 dark:bg-zinc-950/60">
              <span className="text-xs font-bold text-[#2563EB]">{t('dashboard.optimizeLabel')}</span>
              <p className="mt-1 text-zinc-700 dark:text-zinc-300">{t('dashboard.aiRec2')}</p>
            </li>
          </ul>
          <Link to="/app/ai" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:underline">
            {t('dashboard.aiLink')} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Card>
      </div>

      <Card className="overflow-hidden p-0">
        <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4 dark:border-zinc-800">
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t('dashboard.recentTitle')}</p>
            <p className="text-xs text-zinc-500">{t('dashboard.recentSub')}</p>
          </div>
          <Link to="/app/leads" className="text-sm font-medium text-[#2563EB] hover:underline">
            {t('dashboard.viewAll')}
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-zinc-50/80 text-xs font-semibold uppercase text-zinc-500 dark:bg-zinc-900/80">
              <tr>
                <th className="px-5 py-3">{t('leads.colName')}</th>
                <th className="px-5 py-3">{t('leads.colService')}</th>
                <th className="px-5 py-3">{t('leads.colScore')}</th>
                <th className="px-5 py-3">{t('leads.colStatus')}</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((l) => (
                <tr key={l.id} className="border-t border-zinc-100 dark:border-zinc-800">
                  <td className="px-5 py-3">
                    <Link to={`/app/leads/${l.id}`} className="font-medium text-[#2563EB] hover:underline">
                      {l.name}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{pick(locale, l.service)}</td>
                  <td className="px-5 py-3">
                    <LeadScoreBadge score={l.score} />
                  </td>
                  <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{t(`status.${l.status}`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
