import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Dashboard from './pages/Dashboard.jsx';
import Work from './pages/Work.jsx';
import CaseStudy from './pages/CaseStudy.jsx';
import Toggle from './components/Toggle.jsx';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [wireframe, setWireframe] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" data-wireframe={wireframe}>
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-bg/60 border-b border-white/10">
        <div className="mx-auto max-w-none px-4 py-3 flex items-center gap-3">
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          <div className="flex-1 font-semibold tracking-tight">
            <span className="text-primary">FinSight</span> Dashboard
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Toggle
              label="Wireframe"
              checked={wireframe}
              onChange={setWireframe}
            />
            <a
              href="https://your-portfolio.example.com"
              className="rounded-xl border border-white/10 px-3 py-1.5 hover:bg-white/5"
              target="_blank"
            >
              Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* Main layout (flex-1 ensures footer sticks bottom) */}
      <div className="flex-1">
        <div className="mx-auto max-w-none px-4 py-6 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
          {/* Sidebar */}
          <aside
            className={`${
              sidebarOpen ? 'block' : 'hidden'
            } md:block rounded-xl bg-surface/70 border border-white/10 p-3 h-fit md:sticky md:top-[76px]`}
          >
            <nav className="flex md:block gap-2 md:gap-0">
              {[
                ['Dashboard', '/'],
                ['Latest Design Works', '/work'],
                ['Case Study', '/case-study'],
              ].map(([label, to]) => (
                <NavLink
                  key={to}
                  to={to}
                  end
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm hover:bg-white/5 ${
                      isActive ? 'bg-white/10' : ''
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="space-y-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/work" element={<Work />} />
              <Route path="/case-study" element={<CaseStudy />} />
            </Routes>
          </main>
        </div>
      </div>

      {/* Footer always at page bottom */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-none px-4 py-6 text-xs text-white/60 text-center">
          © {new Date().getFullYear()} <span className="font-medium text-white/80">Kashish Shah</span>
        </div>
      </footer>
    </div>
  );
}
