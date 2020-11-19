# Design Decision 7 - Directory Structure

## Background

Decision for how to organize compiled npm package.

## Findings

We considered module-support (See decision 6), bundler tools, and general structure. 3 major react libraries were evaluated for comparison:

- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [semantic-ui react](https://github.com/Semantic-Org/Semantic-UI-React)
- [material-ui](https://github.com/mui-org/material-ui)

| React Bootstrap                                                                   | Semantic UI                                                                | Material UI                                                                           |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Supports cjs, ems, and umd. Uses webpack to bundle. Matches our current structure | Supports cjs, ems, and umd. Structures components into individual folders. | Supports cjs, ems, and umd. Uses rollup as bundler. Organizes components into folders |

## Decision

Decision to structure the library as:

### Component-library

```
└───src
│   └───Component1
│       │   index.ts
│       │   component1.ts
│       │   ...
│   └───Component2
│       │   index.ts
│       │   component2.ts
│       │   ...
```

And structure the compiled npm module as:

### Output package

```
└───Component-library
│   └───Component1
│       │   index.ts
│       │   component.ts
│       │   package.json
│       │   ...
│   └───Component2
│       │   index.ts
│       │   component.ts
│       │   package.json
│       │   ...
|   ...
│   └───esm
|       └───Component1
|       │       │   index.ts
|       │       │   component.ts
|       │       │   ...
|       │   └───Component2
|       │       │   index.ts
|       │       │   component.ts
|       │       │   ...
│   └───umd
```

Example component level package.json

```
{
  "sideEffects": false,
  "module": "../esm/Accordion/index.js",
  "typings": "./index.d.ts"
}
```

This will meet the requirement for decision 6 to support esm, umd, and cjs support, and also support importing individual components.
