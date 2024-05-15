import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/preset.ts'],
  format: ['esm', 'cjs'],
  external: ['#ui-lib'],
  dts: true,
  clean: true,
})
