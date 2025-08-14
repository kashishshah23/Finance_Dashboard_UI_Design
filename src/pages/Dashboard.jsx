import React, { useState } from 'react';
import KpiCard from '../components/KpiCard.jsx';
import Sparkline from '../components/Sparkline.jsx';
import BarChart from '../components/BarChart.jsx';
import HeatTiles from '../components/HeatTiles.jsx';
import FilterBar from '../components/FilterBar.jsx';
import Funnel from '../components/Funnel.jsx';
import DataTable from '../components/DataTable.jsx';
import { sample } from '../data/mock.js';

export default function Dashboard() {
  const [filters, setFilters] = useState(sample.filters);
  const { salesTrend, kpis, topProducts, regions, funnel, recentDeals } = sample;

  // X-axis month labels for the growth chart
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  return (
    <section className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Finance & Sales Overview
      </h1>

      {/* Filters */}
      <FilterBar value={filters} onChange={setFilters} />

      {/* KPI Row */}
      <div className="grid gap-4 lg:gap-5 grid-cols-2 md:grid-cols-4">
        {kpis.map((k) => (
          <KpiCard key={k.title} {...k} />
        ))}
      </div>

      {/* Growth Trend (with axes + labels) */}
      <div className="rounded-xl bg-surface/70 border border-white/10 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Monthly Sales Growth</h2>
          <div className="text-xs text-white/60">{filters.range}</div>
        </div>
        <div className="mt-3">
          <Sparkline
            data={salesTrend}
            xTicks={months}
            xLabel="Months"
            yLabel="Sales ($k)"
          />
        </div>
      </div>

      {/* Middle Grid: Products vs Regions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-surface/70 border border-white/10 p-4">
          <h3 className="text-base font-medium">Top‑Performing Products</h3>
          <div className="mt-4">
            <BarChart
              data={topProducts}
              format={(v) => `$${(v / 1000).toFixed(1)}k`}
            />
          </div>
        </div>

        <div className="rounded-xl bg-surface/70 border border-white/10 p-4">
          <h3 className="text-base font-medium">Regional Performance (Heat Tiles)</h3>
          <div className="mt-4">
            <HeatTiles regions={regions} />
          </div>
        </div>
      </div>

      {/* Bottom Grid: Funnel + Recent Deals */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-surface/70 border border-white/10 p-4">
          <h3 className="text-base font-medium">Sales Funnel</h3>
          <div className="mt-4">
            <Funnel stages={funnel} />
          </div>
        </div>

        <div className="rounded-xl bg-surface/70 border border-white/10 p-4">
          <h3 className="text-base font-medium">Recent Deals</h3>
          <div className="mt-4">
            <DataTable rows={recentDeals} />
          </div>
        </div>
      </div>
    </section>
  );
}
