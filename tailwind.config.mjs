/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'reading': '680px',
      },
      boxShadow: {
        'card-hover': '0 12px 40px rgba(13, 148, 136, 0.15)',
        'card': '0 4px 16px rgba(13, 148, 136, 0.08)',
      },
      letterSpacing: {
        'heading': '-0.02em',
      },
      colors: {
        // Primary: Teal (based on #0D9488) - calm, professional, healing
        primary: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          950: '#042F2E',
        },
        // Secondary: Mint green - gentle, fresh, empowering
        secondary: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
        // Accent: Warm gray - grounded, professional, clean
        accent: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        // Light teal for backgrounds
        gold: {
          300: '#CCFBF1',
          400: '#99F6E4',
          500: '#5EEAD4',
          600: '#2DD4BF',
          700: '#14B8A6',
        },
      },
    },
  },
  plugins: [],
};
