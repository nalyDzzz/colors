import type { Config } from 'tailwindcss';
import tailwindanimate from 'tailwindcss-animate';
import daisyui from 'daisyui';

const config: Config = {
  darkMode: ['selector', 'data-theme="dark"'],
  daisyui: {
    themes: ['garden', 'dracula'],
    darkTheme: 'dracula',
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
