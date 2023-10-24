# module-resolution

## with-emit-package

### Description

This example shows how to use the `config.emitPackage` option to generate the `outdir` (`styled-system` by default) in
the local `node_modules`.

### Problem

When using `panda codegen` to generate the runtime code both in your `ui-lib` and in your `app`, the runtime code will
end up being duplicated, because it will be imported twice:

- once from the `ui-lib/styled-system`, used by your components (`Button` here)
- once from the `app/styled-system` by your app code

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
emitPackage: true,
```

This will generate the `styled-system` in your `node_modules`, as if you had installed it from NPM.

By generating the `outdir` in your `node_modules` we're essentially tricking the NodeJS module resolution to prevent the
`outdir` runtime code to be imported twice in your app

There are other ways to achieve the same result, such as using `config.importMap`.
