import { LeadScoreBadge, ScoreRing } from '../components/ui/LeadScoreBadge'
import { Button } from '../components/ui/Button'
import { Card, CardHeader, CardTitle } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { useI18n } from '../contexts/LocaleContext'

export function UIKit() {
  const { t } = useI18n()

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{t('uiKit.title')}</h1>
        <p className="text-sm text-zinc-500">{t('uiKit.sub')}</p>
      </div>

      <Card className="p-6">
        <CardHeader className="border-0 px-0 pt-0">
          <CardTitle>{t('uiKit.typo')}</CardTitle>
        </CardHeader>
        <p className="mt-2 text-xs uppercase tracking-wide text-zinc-500">{t('uiKit.typoSub')}</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight">Heading XL</h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">Corps — lisible, sobre, orienté conversion.</p>
      </Card>

      <Card className="p-6">
        <CardHeader className="border-0 px-0 pt-0">
          <CardTitle>{t('uiKit.buttons')}</CardTitle>
        </CardHeader>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="accent">Accent</Button>
        </div>
      </Card>

      <Card className="p-6">
        <CardHeader className="border-0 px-0 pt-0">
          <CardTitle>{t('uiKit.inputs')}</CardTitle>
        </CardHeader>
        <div className="mt-4 max-w-sm">
          <Input placeholder="adresse@e-mail.ma" type="email" />
        </div>
      </Card>

      <Card className="p-6">
        <CardHeader className="border-0 px-0 pt-0">
          <CardTitle>{t('uiKit.score')}</CardTitle>
        </CardHeader>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <LeadScoreBadge score={88} />
          <LeadScoreBadge score={62} />
          <LeadScoreBadge score={35} />
        </div>
        <div className="mt-8 flex justify-center">
          <ScoreRing score={88} />
        </div>
      </Card>
    </div>
  )
}
