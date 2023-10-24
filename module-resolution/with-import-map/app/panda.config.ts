import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/dev/presets', 'panda-monorepo-setup-with-import-map-ui-lib/preset'],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
  importMap: {
    css: '#ui-lib/css',
    recipes: '#ui-lib/recipes',
    patterns: '#ui-lib/patterns',
    jsx: '#ui-lib/jsx',
  },
})
