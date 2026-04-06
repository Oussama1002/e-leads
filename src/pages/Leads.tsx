import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Filter, Tag } from 'lucide-react'
import { LeadScoreBadge } from '../components/ui/LeadScoreBadge'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import type { Lead, LeadTag } from '../data/mock'
import { leads as allLeads } from '../data/mock'
import { useI18n } from '../contexts/LocaleContext'

const statuses = ['all', 'new', 'contacted', 'qualified', 'won', 'lost'] as const

const tagStyles: Record<LeadTag, string> = {
  hot: 'bg-rose-100 text-rose-800 dark:bg-rose-950/50 dark:text-rose-200',
  warm: 'bg-amber-100 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200',
  cold: 'bg-sky-100 text-sky-900 dark:bg-sky-950/40 dark:text-sky-200',
  premium: 'bg-violet-100 text-violet-900 dark:bg-violet-950/40 dark:text-violet-200',
}

function searchBlob(lead: Lead) {
  return `${lead.name} ${lead.service.fr} ${lead.service.ar} ${lead.location.fr} ${lead.location.ar} ${lead.budget.fr} ${lead.budget.ar}`.toLowerCase()
}

export function Leads() {
  const { locale, t, pick } = useI18n()
  const [locationQ, setLocationQ] = useState('')
  const [budgetQ, setBudgetQ] = useState('')
  const [minScore, setMinScore] = useState(0)
  const [status, setStatus] = useState<(typeof statuses)[number]>('all')

  const filtered = useMemo(() => {
    return allLeads.filter((l) => {
      if (status !== 'all' && l.status !== status) return false
      const blob = searchBlob(l)
      if (locationQ && !blob.includes(locationQ.toLowerCase())) return false
      if (budgetQ && !blob.includes(budgetQ.toLowerCase())) return false
      if (l.score < minScore) return false
      return true
    })
  }, [locationQ, budgetQ, minScore, status])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{t('leads.title')}</h1>
        <p className="text-sm text-zinc-500">{t('leads.sub')}</p>
      </div>

      <Card className="p-4">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          <Filter className="h-4 w-4" />
          {t('leads.filters')}
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="mb-1 block text-xs text-zinc-500">{t('leads.location')}</label>
            <Input
              placeholder={t('leads.locationPh')}
              value={locationQ}
              onChange={(e) => setLocationQ(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-zinc-500">{t('leads.budget')}</label>
            <Input
              placeholder={t('leads.budgetPh')}
              value={budgetQ}
              onChange={(e) => setBudgetQ(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-zinc-500">
              {t('leads.minScore')}: {minScore}
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={minScore}
              onChange={(e) => setMinScore(+e.target.value)}
              className="w-full accent-[#2563EB]"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-zinc-500">{t('leads.status')}</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as (typeof statuses)[number])}
              className="h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s === 'all' ? t('leads.all') : t(`status.${s}`)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setLocationQ('')
              setBudgetQ('')
              setMinScore(0)
              setStatus('all')
            }}
          >
            {t('leads.clear')}
          </Button>
        </div>
      </Card>

      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-sm">
            <thead className="bg-zinc-50 text-xs font-semibold uppercase text-zinc-500 dark:bg-zinc-900">
              <tr>
                <th className="px-4 py-3">{t('leads.colName')}</th>
                <th className="px-4 py-3">{t('leads.colService')}</th>
                <th className="px-4 py-3">{t('leads.colLoc')}</th>
                <th className="px-4 py-3">{t('leads.colScore')}</th>
                <th className="px-4 py-3">{t('leads.colStatus')}</th>
                <th className="px-4 py-3 text-left">{t('leads.colAssign')}</th>
                <th className="px-4 py-3 text-left">{t('leads.colTags')}</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((l) => (
                <tr
                  key={l.id}
                  className="border-t border-zinc-100 transition hover:bg-zinc-50/80 dark:border-zinc-800 dark:hover:bg-zinc-900/50"
                >
                  <td className="px-4 py-3">
                    <Link to={`/app/leads/${l.id}`} className="font-medium text-[#2563EB] hover:underline">
                      {l.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{pick(locale, l.service)}</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{pick(locale, l.location)}</td>
                  <td className="px-4 py-3">
                    <LeadScoreBadge score={l.score} />
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{t(`status.${l.status}`)}</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{pick(locale, l.assignedTo)}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {l.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[10px] font-semibold capitalize ${tagStyles[tag]}`}
                        >
                          <Tag className="h-3 w-3 opacity-70" />
                          {t(`tags.${tag}`)}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" size="sm" className="hidden lg:flex">Qualifier</Button>
                      <Button size="sm">Assigner</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="border-t border-zinc-100 px-6 py-16 text-center dark:border-zinc-800">
            <p className="text-sm font-medium text-zinc-900 dark:text-white">{t('leads.emptyTitle')}</p>
            <p className="mt-1 text-sm text-zinc-500">{t('leads.emptySub')}</p>
            <Button type="button" variant="outline" className="mt-4" onClick={() => { setMinScore(0); setLocationQ('') }}>
              {t('leads.clear')}
            </Button>
          </div>
        )}
      </Card>
    </div>
  )
}
