import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Bot,
  Moon,
  Sparkles,
  Sun,
  Zap,
  Target,
  Monitor,
  Activity,
  Workflow,
  CheckCircle2,
  Video,
  Megaphone,
  Phone,
  Briefcase,
  Play
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { useTheme } from '../contexts/ThemeContext'
import { cn } from '../lib/cn'

export function Landing() {
  const { theme, toggle } = useTheme()
  const [activeTab, setActiveTab] = useState<'videographer' | 'mediabuyer' | 'confirmatrice' | 'client'>('client')

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 dark:bg-[#09090b] dark:text-zinc-50 font-sans selection:bg-indigo-500/30">
      
      {/* GLOBAL HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/70 backdrop-blur-md dark:border-zinc-800/50 dark:bg-[#09090b]/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-sm font-bold text-white shadow-md">
              LB
            </div>
            <span className="font-bold tracking-tight text-xl">LeadBridge</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex dark:text-zinc-400">
            <a href="#how" className="hover:text-zinc-900 transition-colors dark:hover:text-white">How it Works</a>
            <a href="#features" className="hover:text-zinc-900 transition-colors dark:hover:text-white">Features</a>
            <a href="#roles" className="hover:text-zinc-900 transition-colors dark:hover:text-white">Roles</a>
            <a href="#pricing" className="hover:text-zinc-900 transition-colors dark:hover:text-white">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <button
               onClick={toggle}
               className="rounded-full p-2 text-zinc-500 hover:bg-zinc-100 transition-colors dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link to="/login" className="text-sm font-medium hover:text-indigo-600 transition-colors">Log in</Link>
            <Link to="/register">
              <Button className="rounded-full shadow-lg shadow-indigo-500/25">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-indigo-50/50 via-purple-50/20 to-transparent dark:from-indigo-950/20 dark:via-purple-950/10 -z-10" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] -z-10" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] -z-10" />

        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-indigo-200/50 bg-indigo-50/50 px-4 py-1.5 text-sm font-semibold text-indigo-600 backdrop-blur-sm dark:border-indigo-800/50 dark:bg-indigo-900/30 dark:text-indigo-300">
              <Sparkles className="h-4 w-4" /> Launching LeadBridge 2.0
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              The Future of <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Lead Generation</span> & Conversion
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
               AI-powered lead marketplace + automation + ROI optimization. Empowering agencies, buyers, and closers in one unified ecosystem.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="rounded-full shadow-xl shadow-indigo-600/20 h-12 px-8 text-base font-semibold">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#how">
                <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base font-semibold border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  See How It Works
                </Button>
              </a>
            </div>
          </div>

          {/* SaaS Dashboard Hero Mockup */}
          <div className="mt-20 mx-auto max-w-5xl relative rounded-2xl border border-zinc-200/80 bg-white/40 dark:border-zinc-800/80 dark:bg-zinc-900/40 p-2 shadow-2xl backdrop-blur-xl">
             <div className="absolute -top-4 -right-4 h-24 w-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl opacity-20" />
             <div className="absolute -bottom-4 -left-4 h-32 w-32 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full blur-3xl opacity-20" />
             
             <div className="overflow-hidden rounded-xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] shadow-inner relative flex h-[400px]">
                {/* Fake Sidebar */}
                <div className="w-16 md:w-48 border-r border-zinc-100 dark:border-zinc-800 flex flex-col p-4 gap-4">
                   <div className="h-6 w-full rounded bg-zinc-100 dark:bg-zinc-800 mb-4" />
                   <div className="h-4 w-3/4 rounded bg-indigo-50 dark:bg-indigo-900/30" />
                   <div className="h-4 w-5/6 rounded bg-zinc-100 dark:bg-zinc-800" />
                   <div className="h-4 w-4/6 rounded bg-zinc-100 dark:bg-zinc-800" />
                </div>
                {/* Fake Content area */}
                <div className="flex-1 p-6 flex flex-col gap-6">
                   <div className="flex justify-between items-center">
                     <div className="h-8 w-48 rounded bg-zinc-100 dark:bg-zinc-800" />
                     <div className="h-8 w-24 rounded-full bg-indigo-600/10" />
                   </div>
                   <div className="grid grid-cols-3 gap-4">
                     <div className="h-24 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-4">
                       <div className="h-3 w-16 bg-zinc-200 dark:bg-zinc-700 rounded mb-2"/>
                       <div className="h-6 w-24 bg-zinc-300 dark:bg-zinc-600 rounded"/>
                     </div>
                     <div className="h-24 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-4">
                       <div className="h-3 w-16 bg-zinc-200 dark:bg-zinc-700 rounded mb-2"/>
                       <div className="h-6 w-24 bg-zinc-300 dark:bg-zinc-600 rounded"/>
                     </div>
                     <div className="h-24 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-4">
                       <div className="h-3 w-16 bg-zinc-200 dark:bg-zinc-700 rounded mb-2"/>
                       <div className="h-6 w-24 bg-zinc-300 dark:bg-zinc-600 rounded"/>
                     </div>
                   </div>
                   <div className="flex-1 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF */}
      <section className="border-y border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/20 py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
             <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4 text-center md:text-left">Trusted by top agencies & brands</p>
             <div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-60 grayscale transition hover:grayscale-0">
               <div className="h-8 w-24 bg-zinc-300 dark:bg-zinc-700 rounded" />
               <div className="h-8 w-24 bg-zinc-300 dark:bg-zinc-700 rounded" />
               <div className="h-8 w-24 bg-zinc-300 dark:bg-zinc-700 rounded" />
             </div>
          </div>
          <div className="flex flex-1 gap-6 justify-center md:justify-end text-center md:text-left">
             <div>
               <p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">1M+</p>
               <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-1">Leads Generated</p>
             </div>
             <div className="w-px bg-zinc-200 dark:bg-zinc-800" />
             <div>
               <p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">85%</p>
               <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-1">Conv. Rate</p>
             </div>
             <div className="w-px bg-zinc-200 dark:bg-zinc-800" />
             <div>
               <p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">3x</p>
               <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-1">Avg ROI Boost</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The old way is broken</h2>
             <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">Ad costs are soaring, leads are low intent, and measuring true ROI is a nightmare. This creates a black hole for your marketing budget.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
             <Card className="p-8 border-none bg-rose-50/50 dark:bg-rose-950/20 shadow-none">
                <div className="h-12 w-12 rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-900/50 dark:text-rose-400 flex items-center justify-center mb-6">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Poor Lead Quality</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">Generic forms attract spam and unstructured data. Your sales team wastes hours calling disqualified prospects.</p>
             </Card>
             <Card className="p-8 border-none bg-amber-50/50 dark:bg-amber-950/20 shadow-none">
                <div className="h-12 w-12 rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400 flex items-center justify-center mb-6">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">High Ad Costs</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">Lack of algorithm training and raw engagement metrics mean your Cost Per Lead continuously trends upwards.</p>
             </Card>
             <Card className="p-8 border-none bg-zinc-100/50 dark:bg-zinc-800/20 shadow-none">
                <div className="h-12 w-12 rounded-xl bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">No ROI Tracking</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">Disconnected fragmented systems prevent you from tying actual revenue back to the initial marketing source.</p>
             </Card>
           </div>
        </div>
      </section>

      {/* 4. SOLUTION SECTION */}
      <section className="py-24 bg-white dark:bg-[#0c0c0e] border-y border-zinc-100 dark:border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">One Unified Ecosystem</h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">LeadBridge seamlessly connects every step of the funnel. Generate, qualify, distribute, and close leads without ever leaving the platform.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="p-6 w-64 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 relative z-10">
               <Video className="h-8 w-8 text-indigo-500 mx-auto mb-3" />
               <h4 className="font-bold">Content & Ads</h4>
               <p className="text-xs text-zinc-500 mt-2">Generate high traffic</p>
            </div>
            <ArrowRight className="h-6 w-6 text-zinc-300 dark:text-zinc-700 hidden md:block" />
            <div className="w-1 h-6 bg-zinc-300 dark:bg-zinc-700 md:hidden" />
            <div className="p-6 w-64 bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl shadow-xl border border-indigo-200 dark:border-indigo-800 relative z-10 scale-105">
               <Bot className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
               <h4 className="font-bold">Qualification</h4>
               <p className="text-xs text-zinc-500 mt-2">AI-driven scoring</p>
            </div>
            <ArrowRight className="h-6 w-6 text-zinc-300 dark:text-zinc-700 hidden md:block" />
            <div className="w-1 h-6 bg-zinc-300 dark:bg-zinc-700 md:hidden" />
            <div className="p-6 w-64 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 relative z-10">
               <Workflow className="h-8 w-8 text-indigo-500 mx-auto mb-3" />
               <h4 className="font-bold">Conversion</h4>
               <p className="text-xs text-zinc-500 mt-2">Marketplace & CRM</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT FEATURES GRID */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need to scale</h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">A complete suite of B2B tools integrated into a single, seamless environment.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-xl transition-shadow border-zinc-200/60 dark:border-zinc-800/60">
              <Bot className="h-6 w-6 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">AI Lead Scoring</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Automatically score leads based on intent, budget, and readiness to purchase. Never waste time on cold calls.</p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-shadow border-zinc-200/60 dark:border-zinc-800/60">
              <Briefcase className="h-6 w-6 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Lead Marketplace</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Buy exclusive, pre-qualified leads directly from media buyers. Transparent pricing and guaranteed quality.</p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-shadow border-zinc-200/60 dark:border-zinc-800/60">
              <Workflow className="h-6 w-6 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">CRM Pipeline</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Drag-and-drop Kanban interface. Track negotiations, logged conversations, and sales velocity instantly.</p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-shadow border-zinc-200/60 dark:border-zinc-800/60">
              <Megaphone className="h-6 w-6 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Campaign Management</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Sync all your ad platforms. View budget decay, CPL, and active ROAS directly mapped to CRM data.</p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-shadow border-zinc-200/60 dark:border-zinc-800/60">
              <Zap className="h-6 w-6 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">WhatsApp & Email Automation</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Trigger smart follow-ups dynamically. Build trust and keep prospects engaged autonomously.</p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-shadow border-zinc-200/60 dark:border-zinc-800/60">
              <Monitor className="h-6 w-6 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Analytics Dashboard</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Deep, customizable KPI reporting. View everything from macro revenue down to individual agent performance.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. MULTI-ROLE SECTION */}
      <section id="roles" className="py-24 bg-zinc-900 text-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Built for the entire team</h2>
             <p className="mt-4 text-lg text-zinc-400">Specialized interfaces ensuring each team member only sees what drives their performance.</p>
           </div>

           <div className="flex flex-col lg:flex-row gap-12">
             <div className="w-full lg:w-1/3 flex flex-col gap-2">
               {[
                 { id: 'client', title: 'Client / Acheteur', desc: 'Achetez des leads et suivez le ROI.', icon: Briefcase },
                 { id: 'mediabuyer', title: 'Media Buyer', desc: 'Pilotez les campagnes et optimisez le CPL.', icon: Megaphone },
                 { id: 'confirmatrice', title: 'Confirmatrice', desc: 'Gérez les appels et qualifiez via scripts.', icon: Phone },
                 { id: 'videographer', title: 'Vidégraphe', desc: 'Analysez les performances des créatifs.', icon: Video }
               ].map(r => (
                 <button 
                  key={r.id}
                  onClick={() => setActiveTab(r.id as any)}
                  className={cn(
                    'text-left p-5 rounded-2xl transition-all border',
                    activeTab === r.id ? 'bg-indigo-600/20 border-indigo-500/50 shadow-[0_0_20px_rgba(79,70,229,0.1)]' : 'bg-transparent border-transparent hover:bg-white/5'
                  )}
                 >
                   <div className="flex items-center gap-4">
                     <div className={cn('p-2 rounded-lg', activeTab === r.id ? 'bg-indigo-600' : 'bg-zinc-800')}>
                        <r.icon className="w-5 h-5" />
                     </div>
                     <div>
                       <h4 className="font-bold">{r.title}</h4>
                       <p className="text-sm text-zinc-400 mt-0.5">{r.desc}</p>
                     </div>
                   </div>
                 </button>
               ))}
             </div>
             
             {/* Interactive UI Mockup pane based on selection */}
             <div className="w-full lg:w-2/3 h-[400px] border border-zinc-800 bg-zinc-950 rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col">
               <div className="flex items-center mb-6 gap-3">
                 <div className="w-3 h-3 rounded-full bg-rose-500"/>
                 <div className="w-3 h-3 rounded-full bg-amber-500"/>
                 <div className="w-3 h-3 rounded-full bg-emerald-500"/>
               </div>
               
               {activeTab === 'client' && (
                 <div className="animate-fade-in-up space-y-4">
                   <h3 className="font-bold text-lg border-b border-zinc-800 pb-2">Client Pipeline</h3>
                   <div className="grid grid-cols-3 gap-4">
                     <div className="bg-zinc-900 rounded p-4 h-32 border border-zinc-800 flex flex-col gap-2">
                        <div className="h-2 w-12 bg-indigo-500 rounded" />
                        <div className="h-10 border border-dashed border-zinc-700 rounded mt-2 flex items-center justify-center text-xs text-zinc-600">Lead Card</div>
                     </div>
                     <div className="bg-zinc-900 rounded p-4 h-32 border border-zinc-800 flex flex-col gap-2">
                        <div className="h-2 w-12 bg-amber-500 rounded" />
                     </div>
                   </div>
                 </div>
               )}

               {activeTab === 'mediabuyer' && (
                 <div className="animate-fade-in-up space-y-4">
                   <h3 className="font-bold text-lg border-b border-zinc-800 pb-2">Campagnes Actives</h3>
                   <div className="bg-zinc-900 rounded border border-zinc-800">
                     <div className="grid grid-cols-4 p-3 text-xs text-zinc-500 border-b border-zinc-800">
                       <span>Nom</span><span>Plateforme</span><span>Budget</span><span>Leads</span>
                     </div>
                     <div className="grid grid-cols-4 p-3 text-sm border-b border-zinc-800">
                       <span>CVC Printemps</span><span className="text-blue-400">Facebook</span><span>42k / 50k</span><span className="font-bold">142</span>
                     </div>
                     <div className="grid grid-cols-4 p-3 text-sm">
                       <span>Solaire VIP</span><span className="text-red-400">Google</span><span>10k / 20k</span><span className="font-bold">38</span>
                     </div>
                   </div>
                 </div>
               )}

               {activeTab === 'confirmatrice' && (
                 <div className="animate-fade-in-up space-y-4 flex flex-col h-full">
                   <h3 className="font-bold text-lg border-b border-zinc-800 pb-2">Appels en attente</h3>
                   <div className="flex-1 border border-zinc-800 rounded bg-zinc-900 flex items-center justify-center">
                     <div className="text-center p-6">
                       <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                         <Phone className="w-8 h-8" />
                       </div>
                       <p className="font-bold text-lg">Appel Entrant: Lead #1042</p>
                       <p className="text-sm text-zinc-400">Score 92 • Intention Forte</p>
                     </div>
                   </div>
                 </div>
               )}

               {activeTab === 'videographer' && (
                 <div className="animate-fade-in-up space-y-4">
                   <h3 className="font-bold text-lg border-b border-zinc-800 pb-2">Performances Créatives</h3>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="aspect-video bg-zinc-900 rounded border border-zinc-800 flex items-center justify-center">
                       <Play className="w-8 h-8 text-zinc-600" />
                     </div>
                     <div className="space-y-3">
                       <div className="flex justify-between text-sm"><span className="text-zinc-500">Hook Rate</span><span className="font-bold text-emerald-400">42%</span></div>
                       <div className="h-1.5 bg-zinc-800 rounded-full"><div className="w-[42%] h-full bg-emerald-500 rounded-full"/></div>
                       <div className="flex justify-between text-sm"><span className="text-zinc-500">Hold Rate</span><span className="font-bold text-amber-400">18%</span></div>
                       <div className="h-1.5 bg-zinc-800 rounded-full"><div className="w-[18%] h-full bg-amber-500 rounded-full"/></div>
                     </div>
                   </div>
                 </div>
               )}
               
             </div>
           </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section id="how" className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">Effortless Workflow</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[40px] left-1/4 right-1/4 h-0.5 bg-zinc-200 dark:bg-zinc-800 -z-10" />

            {[
              { num: '01', title: 'Create Campaigns', p: 'Media buyers deploy high-converting ads globally.' },
              { num: '02', title: 'Generate Leads', p: 'Traffic flows into LeadBridge forms.' },
              { num: '03', title: 'Qualify via AI', p: 'Scored on urgency, budget, and intent automatically.' },
              { num: '04', title: 'Sell or Convert', p: 'Traded on the Marketplace or closed in the CRM.' }
            ].map((step, i) => (
              <div key={i} className="flex-1 w-full max-w-xs relative bg-white dark:bg-zinc-950 pt-2">
                <div className="w-16 h-16 mx-auto bg-zinc-100 dark:bg-zinc-900 border-2 border-indigo-600 text-indigo-600 font-bold rounded-2xl flex items-center justify-center text-xl shadow-lg mb-6 shadow-indigo-500/10">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DASHBOARD PREVIEW (Full width image replacement) */}
      <section className="pb-24 pt-12 overflow-hidden">
         <div className="mx-auto max-w-7xl px-6">
            <div className="w-full aspect-[16/9] rounded-2xl lg:rounded-[2rem] border border-zinc-200 shadow-2xl dark:border-zinc-800 overflow-hidden relative">
              <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 flex flex-col">
                 <div className="h-12 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-rose-400"/>
                   <div className="w-3 h-3 rounded-full bg-amber-400"/>
                   <div className="w-3 h-3 rounded-full bg-emerald-400"/>
                   <div className="w-[80%] h-5 bg-zinc-100 dark:bg-zinc-900 mx-auto rounded flex items-center px-2">
                     <span className="text-[10px] text-zinc-400 tracking-widest pl-2 font-mono">leadbridge.io/app/crm</span>
                   </div>
                 </div>
                 <div className="flex-1 flex p-6 gap-6">
                   <div className="w-64 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black rounded-lg p-4 flex flex-col gap-3 shadow-sm">
                     <div className="h-4 w-1/2 bg-indigo-100 dark:bg-indigo-900/40 rounded"/>
                     <div className="h-4 w-full bg-zinc-100 dark:bg-zinc-800 rounded"/>
                     <div className="h-4 w-5/6 bg-zinc-100 dark:bg-zinc-800 rounded"/>
                     <div className="mt-auto h-10 w-full bg-zinc-100 dark:bg-zinc-800 rounded"/>
                   </div>
                   <div className="flex-1 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black rounded-lg shadow-sm overflow-hidden flex flex-col">
                     <div className="h-16 border-b border-zinc-100 dark:border-zinc-800 px-6 flex items-center uppercase tracking-wide text-xs font-bold text-zinc-400">
                        Visualizing CRM Activity
                     </div>
                     <div className="flex-1 p-6 grid grid-cols-3 gap-6">
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded h-full" />
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded h-[80%]" />
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded h-[90%]" />
                     </div>
                   </div>
                 </div>
              </div>
            </div>
         </div>
      </section>

      {/* 9. PRICING */}
      <section id="pricing" className="py-24 bg-white dark:bg-[#0c0c0e] border-t border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, scalable pricing</h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">A hybrid model designed for alignment: Base subscription + Marketplace Pay-Per-Lead.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <Card className="p-8 border-none shadow-lg shadow-zinc-200/50 dark:shadow-none dark:border-solid border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950">
              <h3 className="font-bold text-lg mb-2">Essential</h3>
              <p className="text-sm text-zinc-500 mb-6">For solo closers and independent agents.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">1 000 MAD</span><span className="text-zinc-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> CRM Access</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Marketplace Standard</li>
                <li className="flex items-center gap-2 text-zinc-500"><CheckCircle2 className="w-4 h-4 text-zinc-300 dark:text-zinc-700"/> Basic Analytics</li>
              </ul>
              <Button className="w-full" variant="outline">Start Free Trial</Button>
            </Card>

            {/* Pro - Highlighted */}
            <Card className="p-8 border-2 border-indigo-600 shadow-xl shadow-indigo-600/10 dark:shadow-none bg-white dark:bg-zinc-900 relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] uppercase font-bold tracking-widest py-1 px-3 rounded-full">
                Most Popular
              </div>
              <h3 className="font-bold text-lg mb-2">Agencies & Buyers</h3>
              <p className="text-sm text-zinc-500 mb-6">Full ecosystem access for medium teams.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">5 000 MAD</span><span className="text-zinc-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Campaign Integrations</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Lead Marketplace Selling</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Advanced AI Automations</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Full ROI Tracking</li>
              </ul>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Upgrade to Pro</Button>
            </Card>

            {/* Enterprise */}
            <Card className="p-8 border-none shadow-lg shadow-zinc-200/50 dark:shadow-none dark:border-solid border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950">
              <h3 className="font-bold text-lg mb-2">Enterprise</h3>
              <p className="text-sm text-zinc-500 mb-6">Custom white-label solutions for scale.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Dedicated Infrastructure</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> API Access</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Custom Workflows</li>
              </ul>
              <Button className="w-full" variant="outline">Contact Sales</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Rated 4.9/5 by industry leaders</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-8 bg-white dark:bg-zinc-900/50 border-none shadow-xl shadow-zinc-200/50 dark:shadow-none">
              <div className="flex gap-1 text-[#FACC15] mb-4">
                 {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-4 h-4 fill-current"/>)}
              </div>
              <p className="text-lg leading-snug mb-6 text-zinc-700 dark:text-zinc-300">
                &ldquo;LeadBridge completely replaced our scattered stack of Notion, Sheets, and basic CRMs. Our CPL dropped by 30% because we finally knew which campaigns drove actual revenue, not just clicks.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-500">M</div>
                <div>
                  <h4 className="font-bold text-sm">Mohammed Tazi</h4>
                  <p className="text-xs text-zinc-500">CEO, Atlas Media</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-white dark:bg-zinc-900/50 border-none shadow-xl shadow-zinc-200/50 dark:shadow-none">
              <div className="flex gap-1 text-[#FACC15] mb-4">
                 {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-4 h-4 fill-current"/>)}
              </div>
              <p className="text-lg leading-snug mb-6 text-zinc-700 dark:text-zinc-300">
                &ldquo;As a freelancer, I couldn't crack the B2B market. The Marketplace allowed me to simply purchase high-intent local leads and focus purely on closing. It paid for itself in 3 days.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-500">K</div>
                <div>
                  <h4 className="font-bold text-sm">Kenza Idrissi</h4>
                  <p className="text-xs text-zinc-500">Independent HVAC Contractor</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 relative overflow-hidden shadow-2xl p-12 md:p-20 text-center">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight relative z-10">Start generating high-quality leads today.</h2>
          <p className="mt-6 text-indigo-200 text-lg md:text-xl max-w-2xl mx-auto relative z-10">Join hundred of businesses revolutionizing their acquisition funnel. Try the platform risk-free.</p>
          <div className="mt-10 relative z-10">
            <Link to="/register">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-zinc-100 rounded-full px-10 h-14 text-lg font-bold">Get Started for Free</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] py-16">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600 text-[10px] font-bold text-white">LB</div>
              <span className="font-bold">LeadBridge</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">The first AI ecosystem for modern B2B lead generation & conversion.</p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">Marketplace</Link></li>
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">CRM Pipeline</Link></li>
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">AI Qualification</Link></li>
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">About</Link></li>
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center md:text-left text-sm text-zinc-500">
          © {new Date().getFullYear()} LeadBridge Technologies. All rights reserved. Design inspired by high-end 2026 SaaS trends.
        </div>
      </footer>

    </div>
  )
}
