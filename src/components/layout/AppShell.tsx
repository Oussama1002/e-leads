import { useMemo, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import {
  BarChart3,
  Bell,
  Bot,
  CreditCard,
  Gauge,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Moon,
  Palette,
  Settings2,
  Shield,
  Sun,
  Users,
  Workflow,
  X,
  Store,
  Kanban,
  Megaphone,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { useTheme } from '../../contexts/ThemeContext'
import { useI18n } from '../../contexts/LocaleContext'
import { useRole } from '../../contexts/RoleContext'
import { getNavLabels } from '../../i18n/morocco'
import { Button } from '../ui/Button'

const icons = [
  LayoutDashboard,
  Users,
  Store,
  Kanban,
  Megaphone,
  Bot,
  MessageSquare,
  Workflow,
  Gauge,
  BarChart3,
  CreditCard,
  Bell,
  Shield,
  Palette,
] as const

export function AppShell() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const { locale, setLocale, t } = useI18n()
  const { role, setRole } = useRole()
  const loc = useLocation()

  const navItems = useMemo(() => {
    const allNavs = getNavLabels(locale).map((item, i) => ({
      ...item,
      icon: icons[i],
    }))

    if (role === 'client') {
      return allNavs.filter(n => ['/app/dashboard', '/app/marketplace', '/app/crm', '/app/analytics', '/app/billing', '/app/notifications'].includes(n.to))
    }
    if (role === 'mediabuyer') {
      return allNavs.filter(n => ['/app/dashboard', '/app/campaigns', '/app/analytics', '/app/billing', '/app/notifications'].includes(n.to))
    }
    if (role === 'confirmatrice') {
      return allNavs.filter(n => ['/app/dashboard', '/app/leads', '/app/conversations', '/app/notifications'].includes(n.to))
    }
    if (role === 'videographer') {
      return allNavs.filter(n => ['/app/dashboard', '/app/campaigns', '/app/notifications'].includes(n.to))
    }
    
    return allNavs
  }, [locale, role])

  return (
    <div className="flex min-h-dvh bg-zinc-50 dark:bg-zinc-950">
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-64 border-r border-zinc-200 bg-white transition-transform dark:border-zinc-800 dark:bg-zinc-900 lg:static lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        <div className="flex h-14 items-center gap-2 border-b border-zinc-100 px-4 dark:border-zinc-800">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563EB] text-sm font-bold text-white">
            E
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold text-zinc-900 dark:text-white">E-Leads</div>
            <div className="truncate text-[11px] text-zinc-500">{t('brandSubtitle')}</div>
          </div>
          <button
            type="button"
            className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-100 lg:hidden dark:hover:bg-zinc-800"
            onClick={() => setOpen(false)}
            aria-label={t('nav.closeMenu')}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-0.5 p-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/app/dashboard'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive ||
                    (item.to === '/app/leads' && loc.pathname.startsWith('/app/leads/'))
                    ? 'bg-blue-50 text-[#2563EB] dark:bg-blue-950/50 dark:text-blue-300'
                    : 'text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800',
                )
              }
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-900 dark:bg-amber-900/40 dark:text-amber-200">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-100 p-3 dark:border-zinc-800">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            <Settings2 className="h-4 w-4" />
            {t('nav.marketingSite')}
          </Link>
        </div>
      </aside>

      {open && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          aria-label="Overlay"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="flex min-w-0 flex-1 flex-col lg:pl-0">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-zinc-200 bg-white/80 px-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
          <button
            type="button"
            className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 lg:hidden dark:hover:bg-zinc-800"
            onClick={() => setOpen(true)}
            aria-label={t('nav.openMenu')}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-zinc-900 dark:text-white">
              {navItems.find(
                (n) =>
                  loc.pathname === n.to ||
                  (n.to === '/app/leads' && loc.pathname.startsWith('/app/leads/')),
              )?.label ?? 'App'}
            </p>
            <p className="truncate text-xs text-zinc-500">{t('nav.appSubtitle')}</p>
          </div>
          <div className="flex items-center gap-1">
            <select
              value={role}
              onChange={(e) => {
                setRole(e.target.value as any)
                setOpen(false)
              }}
              className="mr-2 h-7 rounded-md border border-zinc-200 bg-white px-2 py-0 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            >
              <option value="admin">Admin</option>
              <option value="client">Client</option>
              <option value="mediabuyer">Media Buyer</option>
              <option value="videographer">Vidégraphe</option>
              <option value="confirmatrice">Confirmatrice</option>
            </select>
            <div className="mr-1 flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5 text-[11px] font-semibold dark:border-zinc-700 dark:bg-zinc-900">
              <button
                type="button"
                onClick={() => setLocale('fr')}
                className={cn(
                  'rounded-md px-2 py-1 transition-colors',
                  locale === 'fr' ? 'bg-white text-[#2563EB] shadow-sm dark:bg-zinc-800' : 'text-zinc-500',
                )}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLocale('ar')}
                className={cn(
                  'rounded-md px-2 py-1 transition-colors',
                  locale === 'ar' ? 'bg-white text-[#2563EB] shadow-sm dark:bg-zinc-800' : 'text-zinc-500',
                )}
              >
                عربي
              </button>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="!px-2"
              onClick={toggle}
              aria-label={t('nav.toggleTheme')}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Link to="/app/notifications">
              <Button variant="outline" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#FACC15] ring-2 ring-white dark:ring-zinc-900" />
              </Button>
            </Link>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
