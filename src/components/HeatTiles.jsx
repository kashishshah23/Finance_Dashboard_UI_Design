import React from 'react';
import clsx from 'clsx';

export default function HeatTiles({ regions = [] }) {
  const max = Math.max(...regions.map(r => r.value), 1);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {regions.map((r) => {
        const intensity = r.value / max;
        return (
          <div
            key={r.name}
            className={clsx(
              'rounded-xl p-3 border border-white/10',
              'bg-gradient-to-br from-white/5 to-white/0'
            )}
            style={{
              boxShadow: `inset 0 0 0 9999px rgba(99,102,241,${0.15 + intensity * 0.35})`,
            }}
          >
            <div className="text-sm text-white/70">{r.name}</div>
            <div className="mt-1 text-lg font-semibold">{r.value.toLocaleString()}</div>
          </div>
        );
      })}
    </div>
  );
}
