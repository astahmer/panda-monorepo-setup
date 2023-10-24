import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/preset.ts'],
  format: ['esm', 'cjs'],
  external: ['@acme/ui-lib'],
  dts: true,
  clean: true,
})
