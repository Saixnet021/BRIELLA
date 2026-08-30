/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        briella: {
          purple: '#9B68A8',
          'purple-dark': '#7F4D8C',
          'purple-light': '#F5EEF7',
          'purple-subtle': '#ECE0F0',
          rose: '#E89D9F',
          'rose-dark': '#D27B7E',
          'rose-light': '#FDF2F3',
          blue: '#9B68A8',
          'blue-dark': '#7F4D8C',
          'blue-light': '#F5EEF7',
          cream: '#FAF8F5',
          'cream-light': '#FCFBF9',
          'cream-dark': '#EBE6DC',
          gold: '#C5A059',
          'gold-light': '#FBF6EC',
          'gold-dark': '#8C6D2D',
          silver: '#64748B',
          charcoal: '#1D1724',
          'charcoal-light': '#2D2437',
          whatsapp: '#25D366',
          'whatsapp-dark': '#1EBE5D',
          mint: '#D8ECE4',
          'mint-dark': '#165B3E',
          lavender: '#EDE4F2',
          'lavender-dark': '#6D437A',
        },
        sm: {
          purple: '#9B68A8',
          'purple-dark': '#7F4D8C',
          'purple-light': '#F5EEF7',
          'purple-subtle': '#ECE0F0',
          rose: '#E89D9F',
          'rose-dark': '#D27B7E',
          'rose-light': '#FDF2F3',
          cream: '#FAF8F5',
          'cream-light': '#FCFBF9',
          'cream-dark': '#EBE6DC',
          charcoal: '#1D1724',
          'charcoal-light': '#2D2437',
          gold: '#C5A059',
          'gold-light': '#FBF6EC',
          'gold-dark': '#8C6D2D',
        }
      },
      borderRadius: {
        'luxury': '20px',
        'card': '18px',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        luxury: '.15em',
      },
      boxShadow: {
        'fine': '0 1px 3px rgba(20, 23, 31, 0.05)',
        'card': '0 4px 16px rgba(20, 23, 31, 0.06)',
        'hover': '0 12px 28px rgba(78, 94, 151, 0.12)',
        'wa': '0 4px 14px rgba(37, 211, 102, 0.35)',
        'floating': '0 8px 30px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
};
