import { Card } from '../../components/ui/Card'
import { Megaphone, Target, DollarSign } from 'lucide-react'
import { campaigns } from '../../data/mock'

export function MediaBuyerDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Tableau de bord (Media Buyer)</h1>
        <p className="text-sm text-zinc-500">Performances de vos campagnes actives et CPL généré.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="p-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Campagnes Actives</p>
            <p className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">2</p>
          </div>
          <div className="rounded-lg bg-indigo-100 p-2 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
            <Megaphone className="h-5 w-5" />
          </div>
        </Card>
        <Card className="p-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Leads Générés (Semaine)</p>
            <p className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">145</p>
          </div>
          <div className="rounded-lg bg-rose-100 p-2 text-rose-600 dark:bg-rose-900 dark:text-rose-300">
            <Target className="h-5 w-5" />
          </div>
        </Card>
        <Card className="p-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">CPL Global</p>
            <p className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">180 MAD</p>
          </div>
          <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300">
            <DollarSign className="h-5 w-5" />
          </div>
        </Card>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-800">
          <p className="text-sm font-semibold">Récapitulatif des campagnes</p>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-zinc-50 dark:bg-zinc-900 text-xs text-zinc-500 uppercase">
            <tr>
              <th className="px-5 py-3 text-left">Campagne</th>
              <th className="px-5 py-3 text-left">Plateforme</th>
              <th className="px-5 py-3 text-left">Budget Déroulé</th>
              <th className="px-5 py-3 text-left">Leads</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map(c => (
              <tr key={c.id} className="border-t border-zinc-100 dark:border-zinc-800">
                <td className="px-5 py-3 font-medium">{c.name}</td>
                <td className="px-5 py-3 capitalize">{c.platform}</td>
                <td className="px-5 py-3">{c.spent} MAD / {c.budget}</td>
                <td className="px-5 py-3 font-bold">{c.leadsGenerated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
