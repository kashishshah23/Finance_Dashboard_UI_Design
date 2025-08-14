import React from 'react';

export default function Sparkline({
  data = [],
  xTicks = [],
  xLabel = '',
  yLabel = '',
  width = 640,
  height = 180,
}) {
  if (!data.length) return null;

  // Layout paddings for axes + labels
  const pad = { left: 44, right: 12, top: 10, bottom: 28 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const span = max - min || 1;

  // Map data to SVG points within the plotting area
  const xStep = innerW / (data.length - 1 || 1);
  const points = data
    .map((d, i) => {
      const x = pad.left + i * xStep;
      const y = pad.top + (1 - (d - min) / span) * innerH;
      return `${x},${y}`;
    })
    .join(' ');

  // Y ticks: min, mid, max
  const yTickVals = [min, min + span / 2, max];
  const yToSvg = (val) => pad.top + (1 - (val - min) / span) * innerH;

  // Choose a few x-ticks to avoid clutter (up to 6)
  const chooseXTicks = () => {
    if (!xTicks.length) return [];
    const n = xTicks.length;
    const slots = Math.min(6, n);
    const idxs = Array.from({ length: slots }, (_, k) =>
      Math.round((k * (n - 1)) / (slots - 1 || 1))
    );
    // de-duplicate
    return Array.from(new Set(idxs)).map((i) => ({ i, label: xTicks[i] }));
  };
  const xTickInfo = chooseXTicks();

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-44 text-white/80"
      role="img"
      aria-label={`${yLabel || 'Value'} over ${xLabel || 'time'}`}
    >
      {/* Plot area background (subtle) */}
      <rect
        x={pad.left}
        y={pad.top}
        width={innerW}
        height={innerH}
        fill="transparent"
      />

      {/* Grid + Y ticks */}
      {yTickVals.map((val, idx) => {
        const y = yToSvg(val);
        return (
          <g key={`yt-${idx}`}>
            <line
              x1={pad.left}
              y1={y}
              x2={pad.left + innerW}
              y2={y}
              stroke="currentColor"
              strokeOpacity="0.15"
              strokeWidth="1"
            />
            <text
              x={pad.left - 6}
              y={y}
              textAnchor="end"
              dominantBaseline="central"
              fontSize="10"
              fill="currentColor"
              opacity="0.8"
            >
              {Math.round(val)}
            </text>
          </g>
        );
      })}

      {/* X axis */}
      <line
        x1={pad.left}
        y1={pad.top + innerH}
        x2={pad.left + innerW}
        y2={pad.top + innerH}
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1"
      />

      {/* X tick labels */}
      {xTickInfo.map(({ i, label }) => {
        const x = pad.left + i * xStep;
        const y = pad.top + innerH;
        return (
          <g key={`xt-${i}`}>
            <line
              x1={x}
              y1={y}
              x2={x}
              y2={y + 4}
              stroke="currentColor"
              strokeOpacity="0.4"
              strokeWidth="1"
            />
            <text
              x={x}
              y={y + 14}
              textAnchor="middle"
              fontSize="10"
              fill="currentColor"
              opacity="0.8"
            >
              {label}
            </text>
          </g>
        );
      })}

      {/* Series line */}
      <polyline
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeWidth="2"
        points={points}
      />

      {/* Axis labels */}
      {xLabel && (
        <text
          x={pad.left + innerW / 2}
          y={height - 6}
          textAnchor="middle"
          fontSize="11"
          fill="currentColor"
          opacity="0.9"
        >
          {xLabel}
        </text>
      )}
      {yLabel && (
        <text
          x={12}
          y={pad.top + innerH / 2}
          textAnchor="middle"
          fontSize="11"
          fill="currentColor"
          opacity="0.9"
          transform={`rotate(-90 12 ${pad.top + innerH / 2})`}
        >
          {yLabel}
        </text>
      )}
    </svg>
  );
}
