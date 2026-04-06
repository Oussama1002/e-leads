import { useState } from 'react'
import { Bot, MessageCircle, Phone } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { useI18n } from '../contexts/LocaleContext'

export function Conversations() {
  const { t } = useI18n()
  const [auto, setAuto] = useState(true)

  const messages = [
    { id: 1, from: 'them' as const, text: t('conversations.m1them'), auto: false },
    { id: 2, from: 'ai' as const, text: t('conversations.m1ai'), auto: true },
    { id: 3, from: 'them' as const, text: t('conversations.m2them'), auto: false },
    { id: 4, from: 'ai' as const, text: t('conversations.m2ai'), auto: true },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{t('conversations.title')}</h1>
          <p className="text-sm text-zinc-500">{t('conversations.sub')}</p>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{t('conversations.autoReply')}</span>
          <button
            type="button"
            role="switch"
            aria-checked={auto}
            onClick={() => setAuto(!auto)}
            className={`relative h-7 w-12 rounded-full transition-colors ${auto ? 'bg-[#2563EB]' : 'bg-zinc-300 dark:bg-zinc-600'}`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${auto ? 'left-6' : 'left-1'}`}
            />
          </button>
          <span className="text-xs text-zinc-500">{auto ? t('conversations.on') : t('conversations.off')}</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-0 lg:col-span-2">
          <div className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3 dark:border-zinc-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t('conversations.leadLine')}</p>
              <p className="text-xs text-zinc-500">
                {t('conversations.last')}+212 6 12 …
              </p>
            </div>
            <Button variant="outline" size="sm" className="ml-auto gap-1">
              <Phone className="h-3.5 w-3.5" />
              {t('conversations.call')}
            </Button>
          </div>
          <div className="space-y-3 bg-[#efeae2] p-4 dark:bg-zinc-900/50">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === 'them' ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                    m.from === 'them'
                      ? 'rounded-tl-sm bg-white text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                      : 'rounded-tr-sm bg-[#d9fdd3] text-zinc-900 dark:bg-emerald-950 dark:text-emerald-100'
                  }`}
                >
                  <p>{m.text}</p>
                  {m.from !== 'them' && (
                    <div className="mt-1 flex items-center gap-1 text-[10px] text-zinc-600 dark:text-zinc-400">
                      <Bot className="h-3 w-3" />
                      {m.auto ? `${t('leadDetail.auto')} · IA` : t('leadDetail.manual')}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-zinc-100 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex gap-2">
              <input
                className="flex-1 rounded-lg border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
                placeholder={auto ? t('conversations.placeholderOn') : t('conversations.placeholderOff')}
              />
              <Button type="button">{t('conversations.send')}</Button>
            </div>
            {!auto && <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">{t('conversations.manualHint')}</p>}
          </div>
        </Card>

        <Card className="p-5">
          <p className="text-xs font-semibold uppercase text-zinc-500">{t('conversations.queue')}</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <span className="font-medium text-zinc-900 dark:text-white">{t('conversations.next')}</span>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">{t('conversations.nextBody')}</p>
              <Button size="sm" className="mt-2 w-full">
                {t('conversations.apply')}
              </Button>
            </li>
            <li className="rounded-lg bg-zinc-50 p-3 text-xs text-zinc-500 dark:bg-zinc-800/50 dark:text-zinc-400">
              {t('conversations.compliance')}
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
