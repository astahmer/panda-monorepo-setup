# shipping

## with-src-files

### Description

This example shows how to use the to easily ship your library specific styles

### Problem

You're using Panda to generate your library styles, so you'll have to ship them somehow so that your consumers can also
generate the CSS from the styles found in your library code.

### Solution

You can just ask your consumers to add your library source code in their `config.include`

### Usage

In your consumers `panda.config.ts`, they'll have to include your library source files so Panda can generate the CSS
used by your library.

```ts
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/dev/presets', 'your-lib/preset'],
  // ...
  include: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/your-lib/src/**/*.{js,jsx,ts,tsx}'],
})
```

> If you can't publish your source files, you might want to look at the
> [`with-build-info`](../with-build-info/README.md) example using `panda ship` to solve that problem.

> If your consumers aren't Panda users, you might want to look at the [`with-static-css`](../with-static-css/README.md)
