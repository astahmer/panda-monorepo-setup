import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/dev/presets', '@import-map-package/ui-lib/preset'],
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
  outdir: '../generated/dist',
  importMap: '@import-map-package/styled-system',
  // Equivalent to:
  // importMap: {
  //   css: '@acme/ui-lib/css',
  //   recipes: '@acme/ui-lib/recipes',
  //   patterns: '@acme/ui-lib/patterns',
  //   jsx: '@acme/ui-lib/jsx',
  // },
})
