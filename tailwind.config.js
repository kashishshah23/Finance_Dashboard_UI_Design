export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      maxWidth: {
        '7_5xl': '94rem', // 1440px, between 7xl (1280px) and full
      },
      colors: {
        bg: '#0B1020',
        surface: '#111827',
        primary: '#6366F1',
        accent: '#22D3EE',
        text: '#E5E7EB',
      },
      borderRadius: {
        xl: '16px',
      },
      boxShadow: {
        soft: '0 6px 24px rgba(0,0,0,0.15)',
        elevated: '0 10px 32px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
