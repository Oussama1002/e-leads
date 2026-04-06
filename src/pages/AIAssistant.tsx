import { useMemo, useState } from 'react'
import { Bot, Send, Sparkles, User } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { useI18n } from '../contexts/LocaleContext'

export function AIAssistant() {
  const { t } = useI18n()
  const [input, setInput] = useState('')

  const thread = useMemo(
    () => [
      { role: 'assistant' as const, text: t('ai.threadA1') },
      { role: 'user' as const, text: t('ai.threadU1') },
      { role: 'assistant' as const, text: t('ai.threadA2'), suggested: true },
      { role: 'assistant' as const, text: t('ai.threadA3'), suggested: true },
    ],
    [t],
  )

  const shortcuts = useMemo(
    () => [
      { title: t('ai.s1t'), d: t('ai.s1d') },
      { title: t('ai.s2t'), d: t('ai.s2d') },
      { title: t('ai.s3t'), d: t('ai.s3d') },
    ],
    [t],
  )

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{t('ai.title')}</h1>
        <p className="text-sm text-zinc-500">{t('ai.sub')}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {shortcuts.map((x) => (
          <Card key={x.title} className="p-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB]">
              <Sparkles className="h-3.5 w-3.5" />
              {t('ai.shortcut')}
            </div>
            <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-white">{x.title}</p>
            <p className="mt-1 text-xs text-zinc-500">{x.d}</p>
          </Card>
        ))}
      </div>

      <Card className="flex min-h-[420px] flex-col p-0">
        <div className="border-b border-zinc-100 px-4 py-3 dark:border-zinc-800">
          <p className="text-sm font-semibold text-zinc-900 dark:text-white">
            {t('ai.session')} {t('ai.sessionLead')}
          </p>
          <p className="text-xs text-zinc-500">{t('ai.sessionSub')}</p>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {thread.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  m.role === 'user' ? 'bg-zinc-200 dark:bg-zinc-700' : 'bg-[#2563EB] text-white'
                }`}
              >
                {m.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </div>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                    : 'border border-zinc-200 bg-white text-zinc-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200'
                }`}
              >
                {'suggested' in m && m.suggested && (
                  <span className="mb-2 inline-flex items-center gap-1 rounded-md bg-[#FACC15]/30 px-2 py-0.5 text-[10px] font-bold uppercase text-zinc-900">
                    {t('ai.suggested')}
                  </span>
                )}
                <p className="whitespace-pre-wrap">{m.text}</p>
                {'suggested' in m && m.suggested && m.role === 'assistant' && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button size="sm">{t('ai.insertWa')}</Button>
                    <Button size="sm" variant="outline">
                      {t('ai.editTone')}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <form
          className="border-t border-zinc-100 p-3 dark:border-zinc-800"
          onSubmit={(e) => {
            e.preventDefault()
            setInput('')
          }}
        >
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('ai.placeholder')}
              className="flex-1"
            />
            <Button type="submit" className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
