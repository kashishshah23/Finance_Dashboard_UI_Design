import React from 'react';

export default function GalleryCard({ title, thumb, tags = [], desc }) {
  return (
    <div className="group rounded-xl overflow-hidden border border-white/10 bg-surface/70 hover:shadow-elevated transition">
      <div className="relative aspect-[16/10] bg-white/5 overflow-hidden">
        {thumb ? (
          <img
            src={thumb}
            alt={title}
            className="w-full h-full object-cover no-wire transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-sm text-white/50">
            Add your thumbnail
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="p-3">
        <div className="text-sm font-medium">{title}</div>
        {desc && <p className="mt-1 text-xs text-white/60">{desc}</p>}

        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((t) => (
              <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-white/10">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
