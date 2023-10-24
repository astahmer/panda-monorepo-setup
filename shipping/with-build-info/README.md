# shipping

## with-build-info

### Description

This example shows how to use the [`panda ship`](https://panda-css.com/docs/guides/component-library) command to easily
ship your library styles without having to expose your library source code.

### Problem

You're using Panda to generate your library styles, so you'll have to ship them somehow so that your consumers can also
generate the CSS from the styles found in your library code.

That would be easy if you were shipping the library source code, just ask them to add your source files in their
`config.include` but your use-case require that you can't publish your source code, only the built code (usually
`dist`).

### Solution

Using the `panda ship` command you can generate a JSON file that will need to be published alongside your library, in
your `dist` (or equivalent) folder. This JSON file will contain all the information needed for your consummrs to
generate the CSS from the styles found in your app code, found using your `config.include`.

> The generated file does not contain any of your library source code, it's only metadata equivalent to what Panda sees
> when it scans your source code, in a compressed format.

---

### Usage

```sh
pnpm panda ship -o dist/panda.buildinfo.json
```

It could be integrated in your pipeline like this `package.json` example

```json
{
  // ..
  "scripts": {
    "prepare": "pnpm panda codegen",
    "ship": "pnpm panda ship -o dist/panda.buildinfo.json",
    "build": "tsup",
    "postbuild": "pnpm ship"
  },
  "files": ["dist"]
}
```

Finally, you will need to ask your consumers to add it to their `config.include` like this

```ts
// panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/dev/presets', 'your-lib/preset'],
  // ...
  include: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/your-lib/dist/panda.buildinfo.json'],
})
```

> Don't forget to add a [`files`](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#files) entry in your
> `package.json` so that only the `dist` folder is published.

```json
{
  "files": ["dist"]
}
```
