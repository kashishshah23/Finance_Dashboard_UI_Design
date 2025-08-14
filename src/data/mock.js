export const sample = {
  filters: { range: 'Last 12 months', product: 'All', region: 'All' },
  kpis: [
    { title: 'Revenue (MTD)', value: '$248k', delta: 4.3, hint: 'vs previous month' },
    { title: 'Avg Deal Size', value: '$3.8k', delta: 1.1, hint: 'rolling 30d' },
    { title: 'Lead → Win', value: '22.4%', delta: -0.8, hint: 'conversion rate' },
    { title: 'Top Region', value: 'US-East', delta: 2.0, hint: 'by revenue' },
  ],
  salesTrend: [42,48,44,51,59,63,61,67,70,76,81,88],
  topProducts: [
    { label: 'Analytics Pro', value: 82000 },
    { label: 'Starter Suite', value: 56000 },
    { label: 'Insight Plus', value: 43000 },
    { label: 'Signals AI', value: 39000 },
  ],
  regions: [
    { name: 'US‑East', value: 88000 },
    { name: 'US‑West', value: 64000 },
    { name: 'EMEA', value: 57000 },
    { name: 'APAC', value: 52000 },
  ],
  funnel: [
    { name: 'Leads Captured', value: 7200 },
    { name: 'Qualified', value: 4100 },
    { name: 'Proposal', value: 2100 },
    { name: 'Negotiation', value: 900 },
    { name: 'Closed Won', value: 520 },
  ],
  recentDeals: [
    { id: 1, name: 'ACME Analytics Renewal', owner: 'J. Diaz', stage: 'Negotiation', amount: 32000, close: '2025-08-20' },
    { id: 2, name: 'Globex Starter Suite', owner: 'S. Patel', stage: 'Proposal', amount: 14000, close: '2025-08-22' },
    { id: 3, name: 'Initech Insight Plus', owner: 'M. Wong', stage: 'Qualified', amount: 23000, close: '2025-09-05' },
    { id: 4, name: 'Umbrella Signals AI', owner: 'A. Smith', stage: 'Closed Won', amount: 49000, close: '2025-08-12' },
    { id: 5, name: 'Soylent Analytics Pro', owner: 'K. Lee', stage: 'Proposal', amount: 27000, close: '2025-08-30' },
  ],
};
