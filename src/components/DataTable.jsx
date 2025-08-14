import React from 'react';

export default function DataTable({ rows = [] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <table className="min-w-full text-sm">
        <thead className="bg-white/5 text-white/70">
          <tr>
            <th className="text-left px-4 py-3">Deal</th>
            <th className="text-left px-4 py-3">Owner</th>
            <th className="text-left px-4 py-3">Stage</th>
            <th className="text-right px-4 py-3">Amount</th>
            <th className="text-right px-4 py-3">Close Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {rows.map((r) => (
            <tr key={r.id} className="hover:bg-white/5">
              <td className="px-4 py-3">{r.name}</td>
              <td className="px-4 py-3">{r.owner}</td>
              <td className="px-4 py-3">{r.stage}</td>
              <td className="px-4 py-3 text-right">${r.amount.toLocaleString()}</td>
              <td className="px-4 py-3 text-right">{r.close}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
