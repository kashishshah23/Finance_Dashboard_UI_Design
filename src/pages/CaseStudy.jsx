import React from 'react';

export default function CaseStudy() {
  return (
    <article className="prose prose-invert max-w-none bg-surface/70 p-6 rounded-xl border border-white/10">
      <h1 className="!mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Finance Dashboard Case Study
      </h1>
      <p className="!mt-0">
        This frontend-only project demonstrates layout, visual hierarchy, tokenized styling,
        and micro‑interactions. A Wireframe Mode highlights IA and spacing without visual noise.
      </p>

      <h2>Key Moves</h2>
      <ul>
        <li>High‑level KPIs with deltas for executives</li>
        <li>Trends and segment comparisons for managers</li>
        <li>Interactive wireframe toggle for stakeholder walkthroughs</li>
      </ul>

      <h2>Accessibility</h2>
      <ul>
        <li>Dark-friendly palette targeting 4.5:1 contrast</li>
        <li>Focusable controls, semantic regions, reduced-motion friendly</li>
      </ul>

      <h2>What’s Next</h2>
      <ul>
        <li>Swap custom charts for Recharts/ECharts behind the same props</li>
        <li>Add a filter bar (date range, product line, region) + drill‑downs</li>
        <li>Hook to live API/CSV for demos</li>
      </ul>
    </article>
  );
}
