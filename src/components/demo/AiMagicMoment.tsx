import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Bot, MessageSquare, Sparkles, Zap } from 'lucide-react'
import { Button } from '../ui/Button'
import { useI18n } from '../../contexts/LocaleContext'

export function AiMagicMoment() {
  const { t } = useI18n()
  const [running, setRunning] = useState(false)
  const [idx, setIdx] = useState(-1)

  const steps = useMemo(
    () => [
      { id: 1, title: t('demo.s1t'), detail: t('demo.s1d'), icon: Sparkles },
      { id: 2, title: t('demo.s2t'), detail: t('demo.s2d'), icon: Bot },
      { id: 3, title: t('demo.s3t'), detail: t('demo.s3d'), icon: MessageSquare },
      { id: 4, title: t('demo.s4t'), detail: t('demo.s4d'), icon: Zap },
    ],
    [t],
  )

  const play = () => {
    setRunning(true)
    setIdx(0)
    let i = 0
    const timer = setInterval(() => {
      i += 1
      if (i >= steps.length) {
        clearInterval(timer)
        setRunning(false)
        setIdx(steps.length - 1)
        return
      }
      setIdx(i)
    }, 900)
  }

  const reset = () => {
    setIdx(-1)
    setRunning(false)
  }

  return (
    <div className="rounded-xl border border-dashed border-blue-200 bg-gradient-to-br from-blue-50/80 to-white p-4 dark:border-blue-900/50 dark:from-blue-950/30 dark:to-zinc-900">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#2563EB]">{t('demo.magicTitle')}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('demo.magicSub')}</p>
        </div>
        <div className="flex gap-2">
          <Button type="button" variant="outline" size="sm" onClick={reset} disabled={running}>
            {t('demo.reset')}
          </Button>
          <Button type="button" size="sm" onClick={play} disabled={running}>
            {running ? t('demo.running') : t('demo.play')}
          </Button>
        </div>
      </div>
      <div className="relative grid gap-2 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {steps.map((s, i) => {
            const active = i <= idx
            const Icon = s.icon
            return (
              <motion.div
                key={s.id}
                layout
                initial={{ opacity: 0.4, y: 6 }}
                animate={{
                  opacity: active ? 1 : 0.35,
                  y: 0,
                  scale: i === idx ? 1.02 : 1,
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                className={`flex gap-3 rounded-lg border p-3 ${
                  i === idx
                    ? 'border-[#2563EB] bg-white shadow-md dark:bg-zinc-950'
                    : 'border-zinc-100 bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/40'
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    active ? 'bg-[#2563EB] text-white' : 'bg-zinc-200 text-zinc-500 dark:bg-zinc-800'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">{s.title}</p>
                  <p className="text-xs text-zinc-500">{s.detail}</p>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
