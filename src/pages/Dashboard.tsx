import React from 'react'
import { useRole } from '../contexts/RoleContext'
import { AdminDashboard } from './dashboards/AdminDashboard'
import { ClientDashboard } from './dashboards/ClientDashboard'
import { MediaBuyerDashboard } from './dashboards/MediaBuyerDashboard'

export function Dashboard() {
  const { role } = useRole()

  if (role === 'client') return <ClientDashboard />
  if (role === 'mediabuyer') return <MediaBuyerDashboard />

  // Placeholder for Videographer and Confirmatrice
  if (role === 'videographer') {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Tableau de bord (Vidégraphe)</h1>
        <p className="mt-2 text-zinc-500">Performances créatives et taux de rétention de vos vidéos...</p>
      </div>
    )
  }
  if (role === 'confirmatrice') {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Tableau de bord (Confirmatrice)</h1>
        <p className="mt-2 text-zinc-500">File d'attente des appels et scripts d'objection...</p>
      </div>
    )
  }

  // Admin and default fallback
  return <AdminDashboard />
}
