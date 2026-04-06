import { ArrowDown, GitBranch, MessageCircle, Timer } from 'lucide-react'
import { Card } from '../ui/Card'
import { useI18n } from '../../contexts/LocaleContext'

export function FlowBuilder() {
  const { t } = useI18n()
  const nodes = [
    { type: 'trigger' as const, label: t('automation.flowN1t'), sub: t('automation.flowN1s') },
    { type: 'action' as const, label: t('automation.flowN2t'), sub: t('automation.flowN2s') },
    { type: 'wait' as const, label: t('automation.flowN3t'), sub: t('automation.flowN3s') },
    { type: 'branch' as const, label: t('automation.flowN4t'), sub: t('automation.flowN4s') },
    { type: 'action' as const, label: t('automation.flowN5t'), sub: t('automation.flowN5s') },
  ]

  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-zinc-100 bg-zinc-50/80 px-5 py-3 dark:border-zinc-800 dark:bg-zinc-900/50">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t('automation.flowTitle')}</p>
        <p className="text-xs text-zinc-500">{t('automation.flowSub')}</p>
      </div>
      <div className="space-y-0 p-4">
        {nodes.map((n, i) => (
          <div key={n.label}>
            <div className="flex gap-3 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-700 dark:bg-zinc-950">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                {n.type === 'trigger' && <GitBranch className="h-5 w-5 text-[#2563EB]" />}
                {n.type === 'action' && <MessageCircle className="h-5 w-5 text-emerald-600" />}
                {n.type === 'wait' && <Timer className="h-5 w-5 text-amber-600" />}
                {n.type === 'branch' && <GitBranch className="h-5 w-5 text-violet-600" />}
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">{n.label}</p>
                <p className="text-xs text-zinc-500">{n.sub}</p>
                <div className="mt-2 flex gap-2">
                  <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {n.type === 'wait' ? t('automation.tagAuto') : n.type === 'branch' ? t('automation.tagCond') : t('automation.tagAuto')}
                  </span>
                  <span className="rounded border border-zinc-200 px-1.5 py-0.5 text-[10px] text-zinc-500 dark:border-zinc-700">
                    {t('automation.tagEdit')}
                  </span>
                </div>
              </div>
            </div>
            {i < nodes.length - 1 && (
              <div className="flex justify-center py-1 text-zinc-300 dark:text-zinc-600">
                <ArrowDown className="h-5 w-5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}
