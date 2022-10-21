# Developer Guidelines

## Setup for Local Development

### Prerequisites

1. Install `asdf` if not already installed
2. Clone this repository
3. `cd` into the repository

### Build and Run Storybook

- Run `yarn` to install package dependencies (follow any prompts `asdf` provides)
- Run `yarn bootstrap` to install necessary dependencies.
- Run `yarn llink` to set up symlinks
- Run `yarn build` to compile all packages
- Run `yarn storybook:<theme>` where `<theme>` is `bcgov`, `button`, or your custom theme
- Storybook will open in a browser

### Set Up Pre-Commit Locally

- See [docs](https://github.com/button-inc/digital_marketplace/blob/main/docs/pre-commit.md) for setup
- Run `bash .git/hooks/pre-commit` from repo to execute pre-commit on staged files without commiting

What are [pre-commit hooks](https://pre-commit.com/)?


### Test

To run unit tests in all packages, run `yarn test:jest`

## Building, Continous Integration, Deploying, and Publishing

### Build

To build, run `yarn bootstrap` followed by `yarn llink` followed by `yarn build-storybook:<theme>` where theme is one of:

- button
- bcgov

To test build locally, run `npx http-server ./storybook-static` after building.

### Continuous Integration (CI)

It runs a set of checks in github actions to ensure that new changes meet the code conventions and standards.

#### Checks

1. Unit tests
1. Pre-commit hooks

### Continuous Deployment (CD)

It generates build artifacts to deploy/publish a new storybook and NPM package versions.

#### Publish Packages to NPM Registry

In order to avoid potential side effects using `lerna version/publish` commands, we deploy packages individually using helper scripts in the `scripts` directory.

1. Create a new branch off `develop` called [issue#]-release-[library] (library is base, button, or bcgov)
1. Log into the NPM registry. (See Toolkit credentials in 1Password.)
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
1. If desired, update the version of the other packages that reference the updated package. (This happens automatically when you update the base library.)
   - In the root directory,
   ```sh
       yarn sync-version --name=<package-name>
   ```
1. Merge the release branch into `develop`.

#### Storybook

- On `develop` merge event, new `Storybook` static artifacts are deployed to github pages in `storybook` branch.
- Build and deploy storybook:
  - `yarn build-storybook:button` or `yarn build-storybook:bcgov`
  - `yarn deploy-storybook`
    Running `yarn deploy-storybook` does this:
    1. [storybook-deployer](https://github.com/storybookjs/storybook-deployer) allows to generate a default index.html that links to all of the loaded storybooks in `packages` directory.
    1. As `storybook-deployer` deploys storybook using [PAT](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) in CI environment, we only use `storybook-deployer` to generate the artifacts, and we force update `storybook` branch using [Deploy Key](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/github-glossary#deploy-key) to have fine-grained controls over permissions.
