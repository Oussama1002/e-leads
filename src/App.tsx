import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LocaleProvider } from './contexts/LocaleContext'
import { RoleProvider } from './contexts/RoleContext'
import { AppShell } from './components/layout/AppShell'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { ForgotPassword } from './pages/ForgotPassword'
import { Dashboard } from './pages/Dashboard'
import { Leads } from './pages/Leads'
import { LeadDetail } from './pages/LeadDetail'
import { AIAssistant } from './pages/AIAssistant'
import { Conversations } from './pages/Conversations'
import { Automation } from './pages/Automation'
import { Providers } from './pages/Providers'
import { Billing } from './pages/Billing'
import { Analytics } from './pages/Analytics'
import { Notifications } from './pages/Notifications'
import { Admin } from './pages/Admin'
import { UIKit } from './pages/UIKit'
import { Campaigns } from './pages/Campaigns'
import { CRM } from './pages/CRM'
import { Marketplace } from './pages/Marketplace'

export default function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <RoleProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/app" element={<AppShell />}>
            <Route index element={<Navigate to="/app/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="leads" element={<Leads />} />
            <Route path="leads/:id" element={<LeadDetail />} />
            <Route path="ai" element={<AIAssistant />} />
            <Route path="conversations" element={<Conversations />} />
            <Route path="automation" element={<Automation />} />
            <Route path="providers" element={<Providers />} />
            <Route path="billing" element={<Billing />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="admin" element={<Admin />} />
            <Route path="ui-kit" element={<UIKit />} />
            <Route path="campaigns" element={<Campaigns />} />
            <Route path="crm" element={<CRM />} />
            <Route path="marketplace" element={<Marketplace />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </BrowserRouter>
        </RoleProvider>
      </LocaleProvider>
    </ThemeProvider>
  )
}
