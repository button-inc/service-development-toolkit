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
