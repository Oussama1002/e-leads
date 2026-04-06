import { Check } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { useI18n } from '../contexts/LocaleContext'

export function Billing() {
  const { t } = useI18n()

  const plans = [
    {
      name: t('landing.planStarter'),
      price: t('landing.planStarterPrice'),
      feat: t('billing.starterFeat'),
      highlight: false,
    },
    {
      name: t('landing.planGrowth'),
      price: t('landing.planGrowthPrice'),
      feat: t('billing.growthFeat'),
      highlight: true,
    },
    {
      name: t('landing.planEnt'),
      price: t('landing.planEntPrice'),
      feat: t('billing.entFeat'),
      highlight: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{t('billing.title')}</h1>
        <p className="text-sm text-zinc-500">{t('billing.sub')}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="p-6 bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-zinc-100 dark:to-zinc-300 text-white dark:text-zinc-900">
          <p className="text-sm font-medium opacity-80">Solde du Wallet</p>
          <p className="text-4xl font-bold mt-2">12 450 MAD</p>
          <div className="mt-4 flex gap-3">
            <Button variant="outline" className="bg-white/10 dark:bg-black/10 border-white/20 dark:border-black/20 text-white dark:text-black hover:bg-white/20 dark:hover:bg-black/20">Recharger</Button>
            <Button variant="outline" className="bg-white/10 dark:bg-black/10 border-white/20 dark:border-black/20 text-white dark:text-black hover:bg-white/20 dark:hover:bg-black/20">Retirer</Button>
          </div>
        </Card>
        
        <Card className="p-6 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">Transactions (Ce mois)</h2>
            <Button variant="outline" size="sm">Historique</Button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-zinc-500">Gains (Commissions)</span>
              <span className="text-sm font-bold text-emerald-600">+ 3 200 MAD</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-zinc-500">Dépenses (Achat Leads)</span>
              <span className="text-sm font-bold text-rose-600">- 1 450 MAD</span>
            </div>
          </div>
        </Card>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">Abonnements & Plans</h2>
      
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <Card key={p.name} className={`p-6 ${p.highlight ? 'border-[#2563EB] ring-2 ring-[#2563EB]/15' : ''}`}>
            {p.highlight && (
              <span className="rounded-full bg-[#FACC15]/40 px-2 py-0.5 text-[10px] font-bold uppercase text-zinc-900">
                {t('billing.currentBadge')}
              </span>
            )}
            <h2 className="mt-2 text-lg font-semibold">{p.name}</h2>
            <p className="mt-2 text-3xl font-bold">{p.price}</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                {p.feat}
              </li>
            </ul>
            <Button className="mt-6 w-full" variant={p.highlight ? 'primary' : 'outline'}>
              {p.highlight ? t('billing.manage') : t('billing.upgrade')}
            </Button>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">{t('billing.usageTitle')}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-xs text-zinc-500">{t('billing.creditsUsed')}</p>
            <p className="text-2xl font-bold tabular-nums">612 / 800</p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
              <div className="h-full w-[76%] rounded-full bg-[#2563EB]" />
            </div>
          </div>
          <div>
            <p className="text-xs text-zinc-500">{t('billing.tokens')}</p>
            <p className="text-2xl font-bold tabular-nums">1,4 M</p>
          </div>
          <div>
            <p className="text-xs text-zinc-500">{t('billing.runs')}</p>
            <p className="text-2xl font-bold tabular-nums">3 240</p>
          </div>
        </div>
      </Card>

      <Card className="flex flex-col items-center justify-center border-dashed py-16 text-center">
        <p className="text-sm font-medium text-zinc-900 dark:text-white">{t('billing.emptyTitle')}</p>
        <p className="mt-1 max-w-sm text-sm text-zinc-500">{t('billing.emptySub')}</p>
        <Button className="mt-4">{t('billing.buyCredits')}</Button>
      </Card>
    </div>
  )
}
