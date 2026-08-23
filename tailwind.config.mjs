/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        briella: {
          blue: '#4E5E97',
          'blue-dark': '#35426B',
          'blue-light': '#F0F3F8',
          cream: '#F5F4EC',
          'cream-light': '#FAF9F6',
          'cream-dark': '#ECE8DC',
          gold: '#B89758',
          'gold-light': '#F7F3EB',
          silver: '#64748B',
          charcoal: '#14171F',
          'charcoal-light': '#242834',
          whatsapp: '#25D366',
          'whatsapp-dark': '#1EBE5D',
        }
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
        'card': '0 2px 8px rgba(20, 23, 31, 0.06)',
        'hover': '0 8px 24px rgba(78, 94, 151, 0.12)',
        'wa': '0 4px 14px rgba(37, 211, 102, 0.35)',
      }
    },
  },
  plugins: [],
};
