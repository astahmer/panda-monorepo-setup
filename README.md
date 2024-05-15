# Panda monorepo examples

Consuming-side: Different ways to import Panda `styled-system` (outdir) functions and components:

- [with-import-map](#with-import-map)
- [with-import-map-package](#with-import-map-package)
- [with-outdir](#with-outdir)

Publishing-side: Shipping a Panda preset/component library:

- [with-preset](#with-preset)
- [with-static-css](#with-static-css)
- [with-build-infos](#with-build-infos)
- [with-src-files](#with-src-files)

---

### with-import-map

This example shows how to use the `config.importMap` option to indicate where each of the `outdir` (`styled-system` by
default) entrypoints should be imported from.

[Read more](./examples/with-import-map/README.md)

Tags: importMap, package.json, #imports, #exports, tsconfig, paths aliases, baseUrl

---

### with-import-map-package

This example shows how to use the `config.importMap` option to indicate where each of the `outdir` (`styled-system` by
default) entrypoints should be imported from.

[Read more](./examples/with-import-map-package/README.md)

Tags: importMap, package.json, custom entrypoints

---

## shipping

### with-build-infos

This example shows how to use the [`panda ship`](https://panda-css.com/docs/guides/component-library) command to easily
ship your library styles without having to expose your library source code.

[Read more](./examples/with-build-info/README.md)

Tags: panda.buildinfo.json, panda ship, include, src, files, dist, publish, expose

---

### with-preset

This example is a very basic example showing how to ship a Panda
[`preset`](https://panda-css.com/docs/customization/presets)

> This is the same example as [`module-resolution/with-outdir`](./examples/with-outdir/README.md)

[Read more](./examples/with-preset/README.md)

Tags: simple, default, styled-system, design-system

---

### with-src-files

This example shows how to use the to easily ship your library specific styles

[Read more](./examples/with-src-files/README.md)

Tags: include, src, files, dist, publish, expose

---

### with-static-css

This example shows how to use the `config.staticCss` to generate a static CSS file from your config, so that even
non-Panda users can use your library.

[Read more](./examples/with-static-css/README.md)

Tags: static, staticCss, css, dist, publish, expose, without, no build-step, dynamic

---
