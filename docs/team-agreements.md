# Development and Version Control

- Branch naming policy is as follows: [issue#]-brief-description. In the event that an issue does not already exist for the changes being made in a branch, one should be made using the repos' issue templates.
- Make draft pull requests early and often (ideally right after the first commit) to facilitate a transparent process.
- When a PR is ready, move the card to the Review/QA swim lane and post a request for review with a link to the branch in Teams.
- PR reviews can be done by the first person who gets to it. If the code needs explaining, request the author to walk you through it.
- Follow [peer review best practices](https://google.github.io/eng-practices/review/reviewer/) by suggesting opportunities to improve code during peer review, and merging as soon as the code is better than the code in the target branch and release ready. Important best practices:
  - "It’s also useful to think about the [PR] in the context of the system as a whole. Is this [PR] improving the code health of the system or is it making the whole system more complex, less tested, etc.? **Don’t accept [PRs] that degrade the code health of the system.** Most systems become complex through many small changes that add up, so it’s important to prevent even small complexities in new changes."
  - "If you see something nice in the [CL], tell the developer, especially when they addressed one of your comments in a great way. Code reviews often just focus on mistakes, but they should offer encouragement and appreciation for good practices, as well. It’s sometimes even more valuable, in terms of mentoring, to tell a developer what they did right than to tell them what they did wrong."
  - Feel free to comment on everything that could be improved in the PR. This doesn't mean that all of the comments have to be addressed. Such comments should be identified by the reviewer, and the author should decide to either:
    - address the comment, providing it doesn't result in the scope of the PR ballooning
    - record an issue to track the comment, often technical debt (see below)
- Treat any opportunity for improvement feedback identified during peer review but not implemented in the PR where it was raised as technical debt worthy of a new issue referencing the PR where the comments first came up.
- PRs require only one reviewer's approval before merging but multiple reviewers are welcome.
- When necessary, use git rebase to sync a feature branch with main. This keeps a tidier history in git, however, can be destructive, so do so cautiously.
- Squash merge when merging into develop.
- Once a PR is approved, either a reviewer or author can merge it. (If you're a reviewer, feel free to get in touch with the author if you have any concerns about the PR being ready.)

## Guardrails

The following guardrails are in place to ensure we keep a clean working tree, while avoiding merging breaking changes.

- The default branch for this repo is develop.
- All commits must be made to a non-protected branch and submitted via a pull request before they can be squash merged into develop or main. (There can be no direct commits made to develop or main.) (ELT repo is an exception.)
- Branches must pass CI checks before they can be merged into develop or main.
- All commits must be signed before they can be merged into develop or main.
