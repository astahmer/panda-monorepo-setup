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

  staticCss: {
    recipes: {
      button: ['*'],
    },
  },

  // The output directory for your css system
  outdir: '../generated',
  importMap: {
    css: '@acme/ui-lib/css',
    recipes: '@acme/ui-lib/recipes',
    patterns: '@acme/ui-lib/patterns',
    jsx: '@acme/ui-lib/jsx',
  },
  // The JSX framework to use
  jsxFramework: 'react',

  // The CSS Syntax to use to use
  syntax: 'object-literal',
})
