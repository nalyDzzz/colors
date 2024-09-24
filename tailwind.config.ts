import type { Config } from 'tailwindcss';
import tailwindanimate from 'tailwindcss-animate';
import daisyui from 'daisyui';

const config: Config = {
  darkMode: ['selector', 'data-theme="dark"'],
  daisyui: {
    themes: [
      'garden',
      {
        gardendark: {
          primary: '#5a7c65',
          'primary-focus': '#48604f',
          'primary-content': '#ffffff',
          secondary: '#ecf4e7',
          'secondary-focus': '#cde2c1',
          'secondary-content': '#24321a',
          accent: '#f9e1e1',
          'accent-focus': '#f4bebe',
          'accent-content': '#322020',
          neutral: '#5c5757',
          'neutral-focus': '#272525',
          'neutral-content': '#e9e7e7',
          'base-100': '#262626',
          'base-200': '#202020',
          'base-300': '#191919',
          'base-content': '#d1d1d1',
          info: '#1c92f2',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',
        },
      },
    ],
    darkTheme: 'gardendark',
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindanimate, daisyui],
};
export default config;
