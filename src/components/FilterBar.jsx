import React from 'react';

export default function FilterBar({ value, onChange }) {
  const { range, product, region } = value;

  return (
    <div className="rounded-xl bg-surface/70 border border-white/10 p-4 grid sm:grid-cols-3 gap-3">
      <label className="text-sm">
        <div className="text-white/70 mb-1">Date Range</div>
        <select
          className="w-full rounded-lg bg-white/5 border-white/10"
          value={range}
          onChange={(e) => onChange({ ...value, range: e.target.value })}
        >
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Year to date</option>
          <option>Last 12 months</option>
        </select>
      </label>

      <label className="text-sm">
        <div className="text-white/70 mb-1">Product Line</div>
        <select
          className="w-full rounded-lg bg-white/5 border-white/10"
          value={product}
          onChange={(e) => onChange({ ...value, product: e.target.value })}
        >
          <option>All</option>
          <option>Analytics Pro</option>
          <option>Starter Suite</option>
          <option>Insight Plus</option>
          <option>Signals AI</option>
        </select>
      </label>

      <label className="text-sm">
        <div className="text-white/70 mb-1">Region</div>
        <select
          className="w-full rounded-lg bg-white/5 border-white/10"
          value={region}
          onChange={(e) => onChange({ ...value, region: e.target.value })}
        >
          <option>All</option>
          <option>US-East</option>
          <option>US-West</option>
          <option>EMEA</option>
          <option>APAC</option>
        </select>
      </label>
    </div>
  );
}
