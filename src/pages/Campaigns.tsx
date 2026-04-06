import { Card } from '../components/ui/Card'
import { campaigns } from '../data/mock'
import { Play, Pause, CheckCircle2 } from 'lucide-react'

export function Campaigns() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Campagnes</h1>
        <p className="text-sm text-zinc-500">Gérez vos campagnes publicitaires et suivez les performances en direct.</p>
      </div>
      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 text-xs font-semibold text-zinc-500 uppercase">
              <tr>
                <th className="px-5 py-3 text-left">Nom de la Campagne</th>
                <th className="px-5 py-3 text-left">Plateforme</th>
                <th className="px-5 py-3 text-left">Statut</th>
                <th className="px-5 py-3 text-left">Budget Déroulé</th>
                <th className="px-5 py-3 text-left">Leads</th>
                <th className="px-5 py-3 text-left">CPL</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map(c => (
                <tr key={c.id} className="border-b last:border-0 border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 transition-colors">
                  <td className="px-5 py-4 font-medium text-zinc-900 dark:text-white">{c.name}</td>
                  <td className="px-5 py-4 capitalize text-zinc-600 dark:text-zinc-400">{c.platform}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
                      ${c.status === 'active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' :
                        c.status === 'paused' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' :
                          'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400'}`}>
                      {c.status === 'active' && <Play className="w-3 h-3" />}
                      {c.status === 'paused' && <Pause className="w-3 h-3" />}
                      {c.status === 'completed' && <CheckCircle2 className="w-3 h-3" />}
                      {c.status === 'active' ? 'Actif' : c.status === 'paused' ? 'En Pause' : 'Terminé'}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-zinc-600 dark:text-zinc-400">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2 max-w-[100px]">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(c.spent / c.budget) * 100}%` }}></div>
                      </div>
                      <span className="text-xs">{c.spent} / {c.budget}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-bold text-zinc-900 dark:text-white">{c.leadsGenerated}</td>
                  <td className="px-5 py-4 text-zinc-600 dark:text-zinc-400">{c.cpl} MAD</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
