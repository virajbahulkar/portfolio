/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          'primary': '#2563eb',
          'secondary': '#7d308fff',
          'accent': '#f59e42',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          'primary': '#0ea5e9',
          'secondary': '#7d308fff',
          'accent': '#f59e42',
        },
        cupcake: {
          ...require('daisyui/src/theming/themes')['[data-theme=cupcake]'],
          'primary': '#2563eb',
          'secondary': '#7d308fff',
          'accent': '#f6c1c1',
        },
        synthwave: {
          ...require('daisyui/src/theming/themes')['[data-theme=synthwave]'],
          'primary': '#e779c1',
          'secondary': '#58c7f3',
          'accent': '#f3cc30',
        },
        retro: {
          ...require('daisyui/src/theming/themes')['[data-theme=retro]'],
          'primary': '#2563eb',
          'secondary': '#7d308fff',
          'accent': '#ebdc99',
        },
        cyberpunk: {
          ...require('daisyui/src/theming/themes')['[data-theme=cyberpunk]'],
          'primary': '#FF9900',
          'secondary': '#00FFF7',
          'accent': '#F000B8',
        },
      },
    ],
    darkTheme: 'dark',
    logs: false,
  },
};
