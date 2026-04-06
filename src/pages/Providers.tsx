import { Link } from 'react-router-dom'
import { Award, Clock, Star, TrendingUp, Zap } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { providers } from '../data/mock'
import { useI18n } from '../contexts/LocaleContext'

const badgeIcon = {
  top: Star,
  fast: Zap,
  revenue: TrendingUp,
}

export function Providers() {
  const { locale, t, pick } = useI18n()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{t('providers.title')}</h1>
        <p className="text-sm text-zinc-500">{t('providers.sub')}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {providers.map((p) => (
          <Card key={p.id} className="p-5 transition hover:shadow-lg">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">{p.name}</h2>
                <p className="text-sm text-zinc-500">{pick(locale, p.speciality)}</p>
              </div>
              <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-sm font-bold text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
                <Star className="h-4 w-4 fill-current" />
                {p.rating}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-zinc-50 p-2 dark:bg-zinc-800/50">
                <p className="text-[10px] font-semibold uppercase text-zinc-500">{t('providers.perf')}</p>
                <p className="font-bold tabular-nums text-zinc-900 dark:text-white">{p.performance}</p>
              </div>
              <div className="rounded-lg bg-zinc-50 p-2 dark:bg-zinc-800/50">
                <p className="text-[10px] font-semibold uppercase text-zinc-500">{t('providers.conversion')}</p>
                <p className="font-bold tabular-nums text-zinc-900 dark:text-white">{p.conversion}%</p>
              </div>
              <div className="rounded-lg bg-zinc-50 p-2 dark:bg-zinc-800/50">
                <p className="text-[10px] font-semibold uppercase text-zinc-500">{t('providers.response')}</p>
                <p className="flex items-center gap-1 font-bold tabular-nums text-zinc-900 dark:text-white">
                  <Clock className="h-3.5 w-3.5" />
                  {p.responseMin}
                  {t('providers.min')}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.badges.map((b) => {
                const Icon = badgeIcon[b]
                const label =
                  b === 'top' ? t('providers.badgeTop') : b === 'fast' ? t('providers.badgeFast') : t('providers.badgeRev')
                return (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-[10px] font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
                  >
                    <Icon className="h-3 w-3 text-[#FACC15]" />
                    {label}
                  </span>
                )
              })}
            </div>

            <div className="mt-4 flex gap-2">
              <Button size="sm" className="flex-1">
                {t('providers.assign')}
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                {t('providers.compare')}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
          <Award className="h-5 w-5 text-[#2563EB]" />
          {t('providers.reputation')}
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {t('providers.reputationSub')}
          <Link to="/app/admin" className="font-medium text-[#2563EB] hover:underline">
            {t('providers.reputationAdmin')}
          </Link>
          .
        </p>
      </Card>
    </div>
  )
}
