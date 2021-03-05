SHELL := /usr/bin/env bash

.PHONY: publish
publish:
	yarn build
	yarn pre-publish
	pushd lib && npm publish --access public && popd
	yarn sync-version
