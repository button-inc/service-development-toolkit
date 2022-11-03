<br/>

> 👋 Welcome! The toolkit [component library](./packages/component-library) is in preview; this means the API is subject to change without notice.
>
> If you're interested in production use of this codebase, we'd love to chat! Please reach out at [toolkit@button.is](mailto:toolkit@button.is).

<br/>

# Service Development Toolkit

The Service Development Toolkit is a toolkit to bring best practices to data intake applications built with [React](https://reactjs.org/).

The toolkit can be used to easily create progressively enhanced, accessible form-based applications that are themable and focused on
minimizing resource size. It consists of a component library for themed, accessible, progressively enhanced components, and a form-builder application
to help create progressively enhanced forms with good UI pricnciples. See below for live demonstrations:

- [Component Library Storybook](https://button-inc.github.io/service-development-toolkit/)
- [Component Library Theme Builder](https://service-development-toolkit.herokuapp.com/theme-builder/button)
- [Form Builder](https://service-development-toolkit.herokuapp.com/form-builder)

## Acknowledgements

We would like to thank the following awesome open-source projects that have been a big inspiration and help to this toolkit:

- [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form): The form builder tool to support progressive enhancement in single question per page forms relies heavily on the work in this package.
- [WFP](https://uikit.wfp.org/docs/index.html?path=/story/getting-started-intro--page): The layout of their documentation in storybook was an inspiration for our component-library docs.

## Getting Started

See the documentation below for getting setup in each tool:

- [component-library](/packages/component-library/README.md#getting-started)
- [form-schema](/packages/form-schema/README.md#getting-started)

Information on getting started and usage of the themed component libraries is also available in the component's Storybooks:

- [BCGov themed components](https://button-inc.github.io/service-development-toolkit/@button-inc/bcgov-theme/index.html?path=/docs/getting-started-using-the-kit--page)
- [Button themed components](https://button-inc.github.io/service-development-toolkit/@button-inc/button-theme/index.html?path=/story/getting-started-using-the-kit--page)

## Contributing

- To contribute, fork this repository. See the [developer guide](/docs/developer-guide.md) for getting a local instance running.
- Create a branch off the **develop** branch, named after the issue number you are working on, e.g `feat/12`.
- When ready to commit your changes, run `make commit` from the root directory. If you have installed pre-commit, this will check your changes are linted correctly.
- From the root, run `yarn test:jest` to ensure tests are passing.
- Create a pull request to the **develop** branch.

To make it easier to accept your pull request, add tests where possible to ensure code is working as expected. Thank you for your contributions!
