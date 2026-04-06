import { Card } from '../components/ui/Card'
import { leads as initialLeads } from '../data/mock'
import { useI18n } from '../contexts/LocaleContext'
import { LeadScoreBadge } from '../components/ui/LeadScoreBadge'
import { Phone, Mail, MoreHorizontal } from 'lucide-react'

const columns = [
  { id: 'new', title: 'Nouveau', color: 'border-blue-500' },
  { id: 'contacted', title: 'Contacté', color: 'border-amber-500' },
  { id: 'negotiation', title: 'Négociation', color: 'border-purple-500' },
  { id: 'won', title: 'Converti', color: 'border-emerald-500' },
]

export function CRM() {
  const { locale, pick } = useI18n()
  
  // Hack to map mock statuses to CRM column ids for demo
  const mockMapped = initialLeads.map(l => ({
    ...l,
    crmStatus: l.status === 'qualified' ? 'negotiation' : l.status
  }))
  
  const data = mockMapped

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Pipeline CRM</h1>
        <p className="text-sm text-zinc-500">Gérez le cycle de vie de vos clients. (Mode Kanban)</p>
      </div>

      <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
        {columns.map(col => {
          const columnLeads = data.filter(l => l.crmStatus === col.id)
          return (
            <div key={col.id} className="min-w-[300px] w-[300px] flex flex-col bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-3 border border-zinc-100 dark:border-zinc-800">
              <div className={`border-t-4 ${col.color} mb-3 rounded-t-sm`} />
              <div className="flex justify-between items-center mb-4 px-1">
                <h3 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">{col.title} ({columnLeads.length})</h3>
                <MoreHorizontal className="w-4 h-4 text-zinc-400" />
              </div>
              
              <div className="flex-1 space-y-3 overflow-y-auto">
                {columnLeads.map(lead => (
                  <Card key={lead.id} className="p-4 cursor-grab hover:border-blue-500 transition-colors shadow-sm relative group">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-bold text-sm text-zinc-900 dark:text-white">{lead.name}</p>
                      <LeadScoreBadge score={lead.score} />
                    </div>
                    <p className="text-xs text-zinc-500 mb-3">{lead.company ? pick(locale, lead.company) : pick(locale, lead.service)}</p>
                    
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                      <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">{pick(locale, lead.location)}</span>
                      <div className="flex gap-2">
                        <button className="text-zinc-400 hover:text-blue-500"><Phone className="w-3.5 h-3.5"/></button>
                        <button className="text-zinc-400 hover:text-blue-500"><Mail className="w-3.5 h-3.5"/></button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
