import React from 'react';

export default function Funnel({ stages = [] }) {
  const max = Math.max(...stages.map(s => s.value), 1);
  return (
    <div className="space-y-3">
      {stages.map((s, i) => {
        const pct = (s.value / max) * 100;
        return (
          <div key={s.name} className="rounded-xl bg-surface/70 border border-white/10 p-3">
            <div className="flex justify-between text-sm text-white/70">
              <span>{i+1}. {s.name}</span>
              <span>{s.value.toLocaleString()}</span>
            </div>
            <div className="mt-2 h-3 rounded-full bg-white/10">
              <div className="h-3 rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
