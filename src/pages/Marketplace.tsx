import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { leads } from '../data/mock'
import { useI18n } from '../contexts/LocaleContext'
import { LeadScoreBadge } from '../components/ui/LeadScoreBadge'
import { DollarSign } from 'lucide-react'

export function Marketplace() {
  const { locale, pick } = useI18n()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Marketplace</h1>
        <p className="text-sm text-zinc-500">Découvrez et achetez de nouveaux leads pré-qualifiés et exclusifs.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leads.map(lead => (
          <Card key={lead.id} className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{pick(locale, lead.service)}</span>
                <LeadScoreBadge score={lead.score} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white capitalize mb-1">{pick(locale, lead.location)}</h3>
              <p className="text-sm text-zinc-500 line-clamp-2">{pick(locale, lead.need)}</p>
              
              <div className="mt-4 flex items-center gap-4 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-emerald-500" />
                  Budget: {pick(locale, lead.budget)}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-500 uppercase font-semibold">Prix du lead</p>
                <p className="text-lg font-bold text-zinc-900 dark:text-white">250 MAD</p>
              </div>
              <Button>Acheter</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
