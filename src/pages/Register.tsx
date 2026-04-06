import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { useI18n } from '../contexts/LocaleContext'

export function Register() {
  const { t } = useI18n()

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-950">
      <Link to="/" className="mb-8 flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563EB] text-white">E</span>
        E-Leads
      </Link>
      <Card className="w-full max-w-md p-8">
        <h1 className="text-xl font-bold text-zinc-900 dark:text-white">{t('auth.createTitle')}</h1>
        <p className="mt-1 text-sm text-zinc-500">{t('auth.createSub')}</p>
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300">{t('auth.company')}</label>
            <Input placeholder="Acme Services Maroc" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300">{t('auth.workEmail')}</label>
            <Input type="email" placeholder="vous@entreprise.ma" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300">{t('auth.password')}</label>
            <Input type="password" placeholder="8 caractères min." />
          </div>
          <p className="text-xs text-zinc-500">{t('auth.terms')}</p>
          <Link to="/app/dashboard" className="block">
            <Button type="submit" className="w-full">
              {t('auth.startTrial')}
            </Button>
          </Link>
        </form>
        <p className="mt-6 text-center text-sm text-zinc-500">
          {t('auth.hasAccount')}{' '}
          <Link to="/login" className="font-semibold text-[#2563EB] hover:underline">
            {t('auth.signIn')}
          </Link>
        </p>
      </Card>
    </div>
  )
}
