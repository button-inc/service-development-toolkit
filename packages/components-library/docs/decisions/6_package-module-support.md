# Design Decision 6 - Package Module Support

## Background

Decision to support different module imports

## Findings

We Considered the following to support:

CommonJS | ES Modules | UMD
---|---|---
CommonJS supports nodejs syntax, and will be used in server-side rendering applications like Next.js. | ES modules [offer support for tree-shaking](https://webpack.js.org/guides/tree-shaking/#conclusion) and are usable in the browser. | Universal module supporting both client and server. Can be used as a fallback module for webpack.

## Decision

In order to offer broad support for different application types, decision was made to compile into commonJS, ES modules, and UMD.
