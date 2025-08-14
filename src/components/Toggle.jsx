import React from 'react';
import { Squares2X2Icon } from '@heroicons/react/24/outline';

export default function Toggle({ label = 'Wireframe Mode', checked, onChange }) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <Squares2X2Icon className="w-4 h-4 text-white/70" />
      <span className="text-sm text-white/80">{label}</span>
      <span
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onChange(!checked)}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition border border-white/10 ${
          checked ? 'bg-primary' : 'bg-white/10'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
            checked ? 'translate-x-5' : 'translate-x-1'
          }`}
        />
      </span>
    </label>
  );
}
