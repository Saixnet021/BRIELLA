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
          cream: '#F7F6F0',
          'cream-light': '#FAF9F6',
          'cream-dark': '#EBE7DF',
          gold: '#B89758',
          'gold-light': '#F7F2E7',
          'gold-dark': '#8C6D2D',
          silver: '#64748B',
          charcoal: '#14171F',
          'charcoal-light': '#242834',
          whatsapp: '#25D366',
          'whatsapp-dark': '#1EBE5D',
          mint: '#D6EFE5',
          'mint-dark': '#15573B',
          lavender: '#EDE9F6',
          'lavender-dark': '#48356C',
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
