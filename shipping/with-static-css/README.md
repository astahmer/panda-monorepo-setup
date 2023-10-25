# shipping

## with-static-css

### Description

This example shows how to use the `config.staticCss` to generate a static CSS file from your config, so that even
non-Panda users can use your library.

### Problem

You're using Panda to generate your library styles, but your consumers are not necessarily Panda users.

### Solution

You can generate a CSS file using [`config.staticCss`](https://panda-css.com/docs/guides/static) from your library
styles and [ship it with your library](https://panda-css.com/docs/guides/component-library#ship-a-static-css-file).

### Usage

In your library `panda.config.ts`, you'll have to specify which CSS rules should be generated in the static CSS file
using `config.staticCss`.

```ts
// your (library side) panda.config.ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/dev/presets', 'your-lib/preset'],
  // ...
  staticCss: {
    recipes: {
      button: ['*'],
    },
  },
})
```

With this configuration, Panda will generate every values of every variants of the `button` recipe, even thought we
don't have any of those statically extracted in our library source code. This is to ensure that the generated CSS file
will always contain the needed CSS rules for the consumers.

Finally, you can ship the generated CSS file with your library, and ask your consumers to include it in their HTML.

By default, Panda generates a `{outdir}/styles.css` when using the `panda` command, you can also use the `panda cssgen`
command to specifically generate the static CSS file and decide where it should be generated.

```bash
# Generate the static CSS file in {outdir}/styles.css
panda cssgen

# Specify the output file
panda cssgen --outfile dist/my-lib.css
```

```html
<!-- consumer.html -->
<link rel="stylesheet" href="your-lib/styles.css" />
```

In this example, we're using the `config.importMap` option to take control on the `outdir` entrypoints by making our own
`package.json`, so that we only expose the one we chose: here, it's the usual `recipes` and `tokens` ones with an
additional `cx` entrypoint (instead of it usually being in the `css` entrypoint).

This prevents consumers from importing the `css` function from your library, which would not be working as expected
since they're not using Panda, only the className would be applied at runtime but no matching CSS would be generated.

> If your consumers also use Panda, you might want to look at the [`with-src-files`](../with-src-files/README.md)
> example to take advantage of Panda features and only generate the CSS they're using.

And if some of your consumers use Panda and some others don't, you probably want to :

- export both the static CSS file and the library source files (or the `panda.buildinfo.json` file from `panda ship`),
  so that Panda users can use the library source files and non-Panda users can use the static CSS
- export the library in 2 distinct packages:
  - 1. with the `outdir` set as `external` so that your Panda users can override it using their own outdir
  - 2. with the `outdir` bundled with the rest of your library code, so that your non-Panda users can just use import
       your library and import the static CSS file without having to install Panda
