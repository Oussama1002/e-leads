import { Bell, Bot, MessageSquare, Sparkles } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { useI18n } from '../contexts/LocaleContext'

export function Notifications() {
  const { t } = useI18n()

  const items = [
    { title: t('notifications.n1t'), body: t('notifications.n1b'), time: t('notifications.n1time'), icon: Sparkles, unread: true },
    { title: t('notifications.n2t'), body: t('notifications.n2b'), time: t('notifications.n2time'), icon: Bot, unread: true },
    { title: t('notifications.n3t'), body: t('notifications.n3b'), time: t('notifications.n3time'), icon: MessageSquare, unread: false },
    { title: t('notifications.n4t'), body: t('notifications.n4b'), time: t('notifications.n4time'), icon: Bell, unread: false },
  ]

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{t('notifications.title')}</h1>
        <p className="text-sm text-zinc-500">{t('notifications.sub')}</p>
      </div>

      <Card className="divide-y divide-zinc-100 p-0 dark:divide-zinc-800">
        {items.map((n) => (
          <div
            key={n.title}
            className={`flex gap-4 px-5 py-4 transition hover:bg-zinc-50/80 dark:hover:bg-zinc-900/40 ${n.unread ? 'bg-blue-50/50 dark:bg-blue-950/20' : ''}`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${n.unread ? 'bg-[#2563EB] text-white' : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800'}`}
            >
              <n.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">{n.title}</p>
                {n.unread && (
                  <span className="rounded-full bg-[#FACC15] px-1.5 py-0.5 text-[10px] font-bold text-zinc-900">
                    {t('notifications.new')}
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">{n.body}</p>
              <p className="mt-1 text-xs text-zinc-400">{n.time}</p>
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}
