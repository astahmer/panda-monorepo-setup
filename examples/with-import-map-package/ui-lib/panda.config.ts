import { defineConfig } from '@pandacss/dev'
import preset from './src/preset'

export default defineConfig({
  presets: ['@pandacss/dev/presets', preset],
  // Whether to use css reset
  preflight: true,

  // The extension for the emitted JavaScript files
  outExtension: 'mjs',
  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: '../generated/dist',
  importMap: '@import-map-package/styled-system',
  // Equivalent to:
  // importMap: {
  //   css: '@import-map-package/styled-system/css',
  //   recipes: '@import-map-package/styled-system/recipes',
  //   patterns: '@import-map-package/styled-system/patterns',
  //   jsx: '@import-map-package/styled-system/jsx',
  // },
  // The JSX framework to use
  jsxFramework: 'react',

  // The CSS Syntax to use to use
  syntax: 'object-literal',
})
