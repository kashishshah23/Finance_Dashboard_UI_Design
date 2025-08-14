import React from 'react';
import GalleryCard from '../components/GalleryCard.jsx';

const items = [
  {
    title: 'FinOps Billing Simplified',
    thumb: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1400&auto=format&fit=crop',
    tags: ['FinTech','Dashboard','Design System'],
    desc: 'A cost transparency dashboard with anomaly alerts and budget guardrails for finance teams.',
  },
  {
    title: 'Sales Pipeline Revamp',
    thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
    tags: ['B2B','Funnel','UX'],
    desc: 'Redesigned pipeline flow with inline edits, bulk actions, and predictive scoring.',
  },
  {
    title: 'Wealth App Portfolio',
    thumb: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1400&auto=format&fit=crop',
    tags: ['Mobile','Charts','Accessibility'],
    desc: 'Mobile-first portfolio view with risk bands, holdings breakdown, and goal tracking.',
  },
  {
    title: 'Treasury Risk Monitor',
    thumb: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1400&auto=format&fit=crop',
    tags: ['Risk','Realtime','IA'],
    desc: 'Intraday risk dashboard with stress scenarios and VaR trend insight for treasurers.',
  },
  {
    title: 'Payments Dispute Center',
    thumb: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1400&auto=format&fit=crop',
    tags: ['Ops','Workflow','Case Mgmt'],
    desc: 'Queue-based dispute triage with bulk evidence upload and SLA timers.',
  },
  {
    title: 'Investor Relations Microsite',
    thumb: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop',
    tags: ['Web','Content','SEO'],
    desc: 'CMS-driven site for quarterly results, filings, and leadership commentary.',
  },
];

export default function Work() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Latest Design Works
        </h1>
        <p className="text-white/70 mt-1 text-sm">
          Swap thumbnails with real project shots. Each card includes a short blurb and tags.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <GalleryCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}
