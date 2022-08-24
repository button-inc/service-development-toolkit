# Developer Guidelines

## Continuous Integration (CI)

It runs a set of checks in github actions to ensure that new changes meet the code conventions and standards.

### Checks

1. Unit tests
1. Pre-commit hooks

## Continuous Deployment (CD)

It generates build artifacts to deploy/publish a new storybook and NPM package versions.

### Storybook

- On `develop` merge event, new `Storybook` static artifacts are deployed to github pages in `storybook` branch.
- [storybook-deployer](https://github.com/storybookjs/storybook-deployer) allows to generate a default index.html that links to all of the loaded storybooks in `packages` directory.
- As `storybook-deployer` deploys storybook using [PAT](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) in CI environment, we only use `storybook-deployer` to generate the artifacts, and we force update `storybook` branch using [Deploy Key](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/github-glossary#deploy-key) to have fine-grained controls over permissions.

### Publish Packages to NPM Registry

In order to avoid potential side effects using `lerna version/publish` commands, we deploy packages individually using helper scripts in the `scripts` directory.

1. Log into the NPM registry.
   ```sh
       npm login
   ```
1. Update the version in the `package.json` of the target package.
1. Publish the target package to NPM registry using Make command.
   - In the target directory,
   ```sh
       make publish
   ```
   - it copies `package.json`, `LICENSE`, and `README.md` files into `lib` directory to publish the packages based off `lib` directory.
1. Update the version of the other packages/examples that reference the updated package.
   - In the root directory,
   ```sh
       yarn sync-version --name=<package-name>
   ```

# Setup

Use [Localhost](#localhost) setup if you want to install and run the development environment on your own Mac or Linux machine.

For near-instant access to a working development environment without the need to install or run anything on your local machine, skip localhost setup and try using our [remote devcontainer on GitHub Codespaces](#remote-devcontainer-on-github-codespaces).

## Localhost

- Clone this repository
- Run `yarn` to install package dependencies
- Run `yarn build` to compile all packages
- Run `yarn start` in an example app to test

```sh
yarn bootstrap
yarn llink
yarn build
```

### Storybook

To run locally, run `yarn llink` followed by `yarn storybook:<theme>` where theme is one of:

- base
- gov

To build, run `yarn llink` followed by `yarn build-storybook:<theme>` where theme is one of:

- base
- gov

To test build locally, run `npx http-server ./storybook-static` after building.

### Test

To run unit tests in all packages, run `yarn test:jest`

## Remote devcontainer on GitHub Codespaces

You can create and access a codespace either via the browser or by connecting directly to it in your VS Code editor. (Note: the browser experience may be laggy compared with the in-editor experience)

#### Browser
- [Follow these instructions](https://docs.github.com/en/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace) to create and access a new codespace from the repository homepage

#### VS Code Editor

- Add the [GitHub Codespaces extension](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)
- [Follow these instructions](https://docs.github.com/en/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code) to use the Remote Explorer to sign in, create a codespace and connect to it from your editor.

Once you've connected to the codespace:
- To start one of the example apps, run `yarn start`
- To run the storybook, run `yarn storybook:bcgov` or `yarn storybook:button`. Click "open in browser" when prompted by VS Code.
- To run unit tests in all packages, run `yarn test:jest`
