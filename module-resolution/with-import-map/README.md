# module-resolution

## with-import-map

### Description

This example shows how to use the `config.importMap` option to indicate where each of the `outdir` (`styled-system` by
default) entrypoints should be imported from.

### Problem

When using `panda codegen` to generate the runtime code both in your `ui-lib` and in your `app`, the runtime code will
end up being duplicated, because it will be imported twice:

- once from the `ui-lib/styled-system`, used by your components (`Button` here)
- once from the `app/styled-system` by your app code

You might also just want to generate the runtime code somewhere and import it from another place. This option solves
that.

### Solution

When you import from the same module specifier both in your `ui-lib` and in your `app`, the generated JS runtime code
will only be imported once.

> (`yyy` is the module specifier in `import xxx from yyy`)

**You will also need to mark the `outdir` (`styled-system` in this example) as `external` using your favorite bundler
(tsup, vite, rollup, etc.) on the library (`ui-lib`) side so that the runtime code is not bundled twice, but only once
in your `app`.**

---

### Usage

```ts
outdir: 'styled-system',
importMap: {
    css: '#ui-lib/css',
    recipes: '#ui-lib/recipes',
    patterns: '#ui-lib/patterns',
    jsx: '#ui-lib/jsx',
},
```

This will still generate the `styled-system` folder locally (in `ui-lib/styled-system`), as this option is independant
from the `config.outdir`.

You are essentially telling Panda where to import the `outdir` entrypoints from, giving you freedom to generate the
`outdir` anywhere you want. This is a powerful option that gives you full control on the package entrypoints, by letting
you create your own `package.json` file for the `outdir` folder.

In this example, the `#ui-lib` is resolved at runtime using the ESM native
[`package.json`.`imports`](https://nodejs.org/api/packages.html#imports) and type-wise using `tsconfig` path aliases.

> There are other ways to achieve the same result, such as installing the package directly as a dependency of your app,
> rather than using `package.json`.`imports`, you can see what it looks like in the
> [`with-import-map-package`](../with-import-map-package/README.md) example Or you can also use the `config.emitPackage`
> option, see the [`with-emit-package`](../with-emit-package/README.md) example
