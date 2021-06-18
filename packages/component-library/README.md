# Component Library

**Contents**
  - [Overview](#overview)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
    - [End User](#end-user)
    - [Theme Builder](../../docs/theme-builder.md)
  - [Components](../../docs/components.md)

# Overview

This package is a library of react components focused on accessibility and progressive enhancement. When used with a server-side-rendered react application, these components remain functional for users who may not have javascript or css available.

# Getting Started

Install the package:

 - `npm i @button-inc/component-library` or `yarn add @button-inc/component-library`

Import component(s):

- `import Button from @button-inc/component-library/Button`

For themed components, you can add `@button-inc/bcgov-theme` or `@button-inc/button-theme`.

If you want to build your own theme, see [Here](../../docs/theme-builder.md) for instructions. There is also a [live playground](https://service-development-toolkit.herokuapp.com/theme-builder/button) to test it out.

# Components

For a list of components and their properties, see [Components](../../docs/components.md)

# Update documentation

To keep the documentation easy to update, the core components information is located in the docs section of the root of this repository, in the file components.js.
After updating information, from the root directory run `make document-components` to update across the storybook instance and this readme.
