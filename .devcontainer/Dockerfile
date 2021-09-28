# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.192.0/containers/typescript-node/.devcontainer/base.Dockerfile. Includes Node.js, eslint, nvm, yarn, and the TypeScript compiler.

# [Choice] Node.js version: 16, 14, 12
ARG VARIANT="12-buster"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN su node -c "npm install -g <your-package-list -here>"

RUN git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.8.1 --depth 1


ENV HOME=/root
WORKDIR ${HOME}


RUN echo ". $HOME/.asdf/asdf.sh" >> ${HOME}/.bashrc
SHELL ["/bin/bash", "-c"]
RUN source ${HOME}/.bashrc

RUN cd ${HOME}/.asdf && git checkout v0.8.1
ENV BASH_ENV="${HOME}/.asdf/asdf.sh"
# Because asdf is loaded via BASH_ENV, all commands using adsf need to be executed using /usr/bin/env bash -c
SHELL ["/usr/bin/env", "bash", "-c"]

COPY .tool-versions ${HOME}/.tool-versions

RUN cat ${HOME}/.tool-versions | cut -f 1 -d ' ' | xargs -n 1 asdf plugin-add

RUN asdf plugin-update --all
# The nodejs release team keyring is needed to install the asdf node plugin
RUN ~/.asdf/plugins/nodejs/bin/import-release-team-keyring


RUN asdf install
RUN asdf reshim

COPY requirements.txt ${HOME}/requirements.txt
RUN pip install -r requirements.txt
ENV PRECOMMIT_ENV="/root/.asdf/installs/python/3.8.6/bin"
# Set path so pip-installed modules are available from CLI
RUN echo "PATH=$PRECOMMIT_ENV:$PATH" >> ${HOME}/.bashrc
