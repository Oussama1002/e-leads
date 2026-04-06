import { Card } from '../../components/ui/Card'
import { Users, DollarSign, Activity } from 'lucide-react'

export function ClientDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Tableau de bord (Client)</h1>
        <p className="text-sm text-zinc-500">Vue d'ensemble de vos leads achetés et de votre ROI.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="p-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Leads Achetés</p>
            <p className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">45</p>
          </div>
          <div className="rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
            <Users className="h-5 w-5" />
          </div>
        </Card>
        <Card className="p-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Pipeline (Convertis)</p>
            <p className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">12</p>
          </div>
          <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300">
            <Activity className="h-5 w-5" />
          </div>
        </Card>
        <Card className="p-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">ROI Estimmé</p>
            <p className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">+ 42 500 MAD</p>
          </div>
          <div className="rounded-lg bg-amber-100 p-2 text-amber-600 dark:bg-amber-900 dark:text-amber-300">
            <DollarSign className="h-5 w-5" />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Aperçu CRM (Pipeline)</h2>
        <div className="h-32 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center border border-dashed border-zinc-200 dark:border-zinc-700">
          <p className="text-sm text-zinc-500">Aperçu Pipeline (À relier avec module CRM)</p>
        </div>
      </Card>
    </div>
  )
}
