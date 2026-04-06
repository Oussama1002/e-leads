import { Link, useParams } from 'react-router-dom'
import { Mail, MessageCircle, UserPlus, Sparkles } from 'lucide-react'
import { ScoreRing, LeadScoreBadge } from '../components/ui/LeadScoreBadge'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { leads } from '../data/mock'
import { useI18n } from '../contexts/LocaleContext'

export function LeadDetail() {
  const { id } = useParams()
  const { locale, t, pick } = useI18n()
  const lead = leads.find((l) => l.id === id)

  if (!lead) {
    return (
      <Card className="p-12 text-center">
        <p className="font-medium">{t('leadDetail.notFound')}</p>
        <Link to="/app/leads" className="mt-4 inline-block text-[#2563EB] hover:underline">
          {t('leadDetail.backLink')}
        </Link>
      </Card>
    )
  }

  const subline = [
    lead.company ? pick(locale, lead.company) : null,
    pick(locale, lead.service),
    pick(locale, lead.location),
  ]
    .filter(Boolean)
    .join(' · ')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Link to="/app/leads" className="text-sm text-[#2563EB] hover:underline">
            ← {t('leadDetail.back')}
          </Link>
          <h1 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">{lead.name}</h1>
          <p className="text-sm text-zinc-500">{subline}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            {t(`status.${lead.status}`)}
          </span>
          <LeadScoreBadge score={lead.score} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card className="p-5">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">{t('leadDetail.clientInfo')}</h2>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-xs text-zinc-500">{t('leadDetail.emailDt')}</dt>
                <dd className="font-medium">{lead.email}</dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">{t('leadDetail.phoneDt')}</dt>
                <dd className="font-medium">{lead.phone}</dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">{t('leadDetail.budgetDt')}</dt>
                <dd className="font-medium">{pick(locale, lead.budget)}</dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">{t('leadDetail.urgencyDt')}</dt>
                <dd className="font-medium">{t(`urgency.${lead.urgency}`)}</dd>
              </div>
            </dl>
          </Card>

          <Card className="p-5">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">{t('leadDetail.need')}</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {pick(locale, lead.need)}
            </p>
          </Card>

          <Card className="border-[#2563EB]/30 bg-gradient-to-br from-blue-50/90 to-white p-5 dark:from-blue-950/30 dark:to-zinc-900">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#2563EB]">
              <Sparkles className="h-4 w-4" />
              {t('leadDetail.aiActions')}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-800 dark:text-zinc-200">
              <li className="rounded-lg bg-white/90 p-3 shadow-sm dark:bg-zinc-950/80">
                <span className="font-semibold text-[#2563EB]">{t('leadDetail.aiRec')}</span>{' '}
                {t('leadDetail.priorityRec')}
              </li>
              <li className="rounded-lg bg-white/60 p-3 dark:bg-zinc-950/50">{t('leadDetail.smsFollow')}</li>
            </ul>
            <Link to="/app/ai" className="mt-4 inline-block text-sm font-semibold text-[#2563EB] hover:underline">
              {t('leadDetail.refine')}
            </Link>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-5 text-center">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">{t('leadDetail.aiScore')}</h2>
            <div className="mt-4">
              <ScoreRing score={lead.score} />
            </div>
            <p className="mt-2 text-xs text-zinc-500">{t('leadDetail.aiScoreSub')}</p>
          </Card>

          <Card className="p-5">
            <h2 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-white">{t('leadDetail.actions')}</h2>
            <div className="flex flex-col gap-2">
              <Button className="w-full justify-start gap-2" variant="primary">
                <MessageCircle className="h-4 w-4" />
                {t('leadDetail.wa')}
              </Button>
              <Button className="w-full justify-start gap-2" variant="outline">
                <Mail className="h-4 w-4" />
                {t('leadDetail.email')}
              </Button>
              <Button className="w-full justify-start gap-2" variant="secondary">
                <UserPlus className="h-4 w-4" />
                {t('leadDetail.assign')}
              </Button>
            </div>
            <p className="mt-3 text-[10px] text-zinc-400">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {t('leadDetail.auto')}
              </span>
              {' · '}
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" /> {t('leadDetail.manual')}
              </span>
            </p>
          </Card>

          <Card className="p-5">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">{t('leadDetail.assignment')}</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {t('leadDetail.current')}{' '}
              <span className="font-medium text-zinc-900 dark:text-white">
                {pick(locale, lead.assignedTo)}
              </span>
            </p>
            <Link to="/app/conversations" className="mt-3 block text-sm font-medium text-[#2563EB] hover:underline">
              {t('leadDetail.openConv')}
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
