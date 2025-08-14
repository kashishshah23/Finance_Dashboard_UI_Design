import React from 'react';

export default function KpiCard({ title, value, delta, hint }) {
  const positive = delta >= 0;

  return (
    <div
      className="group rounded-xl bg-surface/80 border border-white/10 p-4 shadow-soft
                 hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5"
    >
      <div className="text-sm text-white/60">{title}</div>

      <div className="mt-2 flex items-baseline gap-2">
        <div className="text-2xl font-semibold">{value}</div>
        <div
          className={`text-xs ${
            positive ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {positive ? '▲' : '▼'} {Math.abs(delta)}%
        </div>
      </div>

      {hint && <div className="mt-2 text-xs text-white/40">{hint}</div>}

      {/* subtle animated underline on hover */}
      <div className="mt-3 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
    </div>
  );
}
