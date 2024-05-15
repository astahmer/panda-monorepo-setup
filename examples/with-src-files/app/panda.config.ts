import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/dev/presets', 'panda-mono-with-src-files-ui-lib/preset'],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/panda-mono-with-src-files-ui-lib/src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  jsxFramework: 'react',

  // The output directory for your css system
  outdir: '../generated',
  importMap: {
    css: '@acme/ui-lib/css',
    recipes: '@acme/ui-lib/recipes',
    patterns: '@acme/ui-lib/patterns',
    jsx: '@acme/ui-lib/jsx',
  },
})
