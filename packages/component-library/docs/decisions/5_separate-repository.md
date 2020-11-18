# Design decision 5 - Separate from pangolin repository

## Background

Whether to include project as a subdirectory of the pangolin repository, or break out into its own repo.

## Findings

- This package is part of the pangolin toolkit, and can be kept in the same directory
- Package management tools like [lerna](https://github.com/lerna/lerna) will be explored to facilitate this.

## Decision

Decision to include in the pangolin repository was made.
