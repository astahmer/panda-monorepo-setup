import { defineConfig } from '@pandacss/dev'
import preset from './src/preset'

export default defineConfig({
  presets: ['@pandacss/dev/presets', preset],
  // Whether to use css reset
  preflight: true,

  // The extension for the emitted JavaScript files
  outExtension: 'mjs',
  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
  emitPackage: true,

  // The JSX framework to use
  jsxFramework: 'react',

  // The CSS Syntax to use to use
  syntax: 'object-literal',
})
