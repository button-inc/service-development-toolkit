# Pangolin

Pangolin is a toolkit to bring best practices to data intake applications built with [React](https://reactjs.org/).

The toolkit can be used to easily create progressively enhancing, accessible form-based applications that are themable and focused on
minimizing resource size. It consists of a component library for themed, accessible,  progressively enhancing components, and a form-builder application
to help create progressively enhancing forms with good UI pricnciples. See below for live demonstrations:

- [Component Library Storybook](https://thebuttonclan.github.io/pangolin/)
- [Component Library Theme Builder](https://pangolin-toolkit.herokuapp.com/theme-builder/button)
- [Form Builder](https://pangolin-toolkit.herokuapp.com/form-builder)

## Getting Started

See the documentation below for getting setup in each tool:

- [component-library](https://github.com/thebuttonclan/pangolin/tree/develop/packages/component-library#getting-started)
- [form-schema](https://github.com/thebuttonclan/pangolin/tree/develop/packages/form-schema#getting-started)

## Contributing

- To contribute, fork this repository. See the [developer guide](https://github.com/thebuttonclan/pangolin/blob/develop/docs/developer-guide.md) for getting a local instance running.
- Create a branch off the **develop** branch, named after the issue number you are working on, e.g `feat/12`.
- When ready to commit your changes, run `make commit` from the root directory. If you have installed pre-commit, this will check your changes are linted correctly.
- From the root, run `yarn test:jest` to ensure tests are passing.
- Create a pull request to the **develop** branch.

To make it easier to accept your pull request, add tests where possible to ensure code is working as expected. Thank you for your contributions!
