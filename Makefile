SHELL := /usr/bin/env bash

.PHONY: commit
commit:
	@@node_modules/.bin/git-cz

document-components:
	node scripts/create-docs.js
