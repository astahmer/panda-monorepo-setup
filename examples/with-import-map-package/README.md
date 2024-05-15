# module-resolution

## with-import-map-package

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
outdir: '../generated',
// Equivalent to:
// `importMap: "@acme/ui-lib"`
importMap: {
    css: '@acme/ui-lib/css',
    recipes: '@acme/ui-lib/recipes',
    patterns: '@acme/ui-lib/patterns',
    jsx: '@acme/ui-lib/jsx',
},
```

This will generate the `outdir` folder in your monorepo in the same level as any other workspace packages.

You are essentially telling Panda where to import the `outdir` entrypoints from, giving you freedom to generate the
`outdir` anywhere you want. This is a powerful option that gives you full control on the package entrypoints, by letting
you create your own `package.json` file for the `outdir` folder.

In this example, the `@acme/ui-lib` is resolved at runtime using a package.json dependency, just like any other package.

> There are other ways to achieve the same result, such as using the ESM native
> [`package.json`.`imports`](https://nodejs.org/api/packages.html#imports) for the runtime and using `tsconfig` path
> aliases for type suggestions.
