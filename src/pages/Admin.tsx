import { AlertTriangle, CheckCircle2, Shield, Users } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { useI18n } from '../contexts/LocaleContext'

export function Admin() {
  const { t } = useI18n()

  const stats = [
    { label: t('admin.openDisputes'), value: '4', icon: AlertTriangle },
    { label: t('admin.approvals'), value: '2', icon: CheckCircle2 },
    { label: t('admin.tenants'), value: '128', icon: Users },
    { label: t('admin.system'), value: 'OK', icon: Shield },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-900/50 dark:bg-amber-950/30">
        <Shield className="h-5 w-5 shrink-0 text-amber-700 dark:text-amber-300" />
        <div>
          <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">{t('admin.bannerTitle')}</p>
          <p className="text-xs text-amber-800/90 dark:text-amber-300/90">{t('admin.bannerSub')}</p>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{t('admin.title')}</h1>
        <p className="text-sm text-zinc-500">{t('admin.sub')}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase text-zinc-500">{s.label}</p>
              <s.icon className="h-4 w-4 text-zinc-400" />
            </div>
            <p className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">{s.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-5">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">{t('admin.queue')}</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center justify-between rounded-lg border border-zinc-100 p-3 dark:border-zinc-800">
              <span>Peak Plomberie Co.</span>
              <Button size="sm">{t('admin.review')}</Button>
            </li>
            <li className="flex items-center justify-between rounded-lg border border-zinc-100 p-3 dark:border-zinc-800">
              <span>Urban Solar SARL</span>
              <Button size="sm">{t('admin.review')}</Button>
            </li>
          </ul>
        </Card>
        <Card className="p-5">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">{t('admin.disputes')}</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <span className="font-medium">Qualité lead · Ticket #4921</span>
              <p className="mt-1 text-xs text-zinc-500">Écart sur fourchette budget signalée</p>
            </li>
            <li className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <span className="font-medium">SLA · Prestataire Atlas Pro</span>
              <p className="mt-1 text-xs text-zinc-500">Temps de réponse &gt; seuil convenu</p>
            </li>
          </ul>
        </Card>
      </div>

      <Card className="p-5">
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">{t('admin.activity')}</h2>
        <div className="mt-4 font-mono text-xs text-zinc-600 dark:text-zinc-400">
          <p>[18:22:01] webhook: lead.ingest · source=partner_casa · id=LD-9281</p>
          <p>[18:22:02] ai.score · model=v3 · score=88</p>
          <p>[18:22:03] automation.hot_nurture · step=whatsapp_send · status=sent</p>
        </div>
      </Card>
    </div>
  )
}
