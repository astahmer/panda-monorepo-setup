# Panda monorepo examples

## module-resolution

### with-emit-package

This example shows how to use the `config.emitPackage` option to generate the `outdir` (`styled-system` by default) in
the local `node_modules`.

[Read more](./module-resolution/with-emit-package/README.md)

### with-import-map

This example shows how to use the `config.importMap` option to indicate where each of the `outdir` (`styled-system` by
default) entrypoints should be imported from.

[Read more](./module-resolution/with-import-map/README.md)

### with-import-map-package

This example shows how to use the `config.importMap` option to indicate where each of the `outdir` (`styled-system` by
default) entrypoints should be imported from.

[Read more](./module-resolution/with-import-map-package/README.md)

### with-outdir

This example is a very basic example showing how to ship a Panda
[`preset`](https://panda-css.com/docs/customization/presets)

> This is the same example as [`shipping/with-preset`](./shipping/with-preset/README.md)

[Read more](./module-resolution/with-outdir/README.md)

## shipping

### with-build-infos

This example shows how to use the [`panda ship`](https://panda-css.com/docs/guides/component-library) command to easily
ship your library styles without having to expose your library source code.

[Read more](./shipping/with-build-info/README.md)

### with-preset

This example is a very basic example showing how to ship a Panda
[`preset`](https://panda-css.com/docs/customization/presets)

> This is the same example as [`module-resolution/with-outdir`](./module-resolution/with-outdir/README.md)

[Read more](./shipping/with-preset/README.md)

### with-src-files

This example shows how to use the to easily ship your library specific styles

[Read more](./shipping/with-src-files/README.md)

### with-static-css

This example shows how to use the `config.staticCss` to generate a static CSS file from your config, so that even
non-Panda users can use your library.

[Read more](./shipping/with-static-css/README.md)
