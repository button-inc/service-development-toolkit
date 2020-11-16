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

# Components

Unless otherwise specified, props are type boolean and can be passed alone. e.g `<Button primary></Button>`

## Button

Props | Decription
--|--
primary | Main theme styling
secondary | Secondary theme styling
warning | Potentially destructive action button styling
danger | Destructive action button styling
success | Destructive action button styling
large | Larger button size
small | Smaller button size

## Input

Props | Decription
--|--
large | Larger button size
small | Smaller button size

## TextArea

Props | Decription
--|--
large | Larger button size
small | Smaller button size

## Checkbox

Props | Decription
--|--
large | Larger button size
small | Smaller button size

## Radio

Props | Decription
--|--
large | Larger button size
small | Smaller button size

## Label

Props | Decription
--|--
large | Larger button size
small | Smaller button size
