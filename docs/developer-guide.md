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

- Clone this repository
- Run `yarn` to install package dependencies
- Run `yarn build` to compile all packages
- Run `yarn start` in an example app to test

```sh
yarn bootstrap
yarn llink
yarn build
```

## Storybook

To run locally, run `yarn llink` followed by `yarn storybook:<theme>` where theme is one of:

- base
- gov

To build, run `yarn llink` followed by `yarn build-storybook:<theme>` where theme is one of:

- base
- gov

To test build locally, run `npx http-server ./storybook-static` after building.

## Test

To run unit tests in all packages, run `yarn test:jest`
