# Components Library

## Local Development

### Storybook

To initialize:
  - Run `lerna bootstrap` from the root pangolin directory
  - Run `lerna run tsc` from the root pangolin directory

To view changes to components using storybook, run `yarn storybook` from this directory.
If developing and altering the components-library-themes package, you may want to run `npx tsc -w` in the
components-library-themes directory to update storybook themes on save.

### Separate Project

To test components in another local project, you can import locally using [yarn link](https://classic.yarnpkg.com/en/docs/cli/link/)
  - In this directory, run `yarn link`
  - In your local project, run `yarn link components-library`

Note: If you run into errors with yarn link, consider using [yalc](https://www.npmjs.com/package/yalc) as an alternative.
