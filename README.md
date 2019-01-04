# awesome-manager

[![GitHub open issues](https://img.shields.io/github/issues/linuxing3/awesome-manager.svg?maxAge=2592000)](https://github.com/linuxing3/awesome-manager/issues)
[![Npm version](https://img.shields.io/npm/v/awesome-manager.svg?maxAge=2592000)](https://www.npmjs.com/package/awesome-manager)

## Features

- [**Thorough documentation**](docs/): Written with the same care as Vue's core docs to quickly train new team members and consolidate knowledge.
- [**Guaranteed consistency**](docs/): Opinionated linting for Vue, JavaScript/JSON, SCSS, and Markdown, integrated into Visual Studio Code and run against staged files on pre-commit.
- [**First-class tests**](docs/): Practice test-driven development with both unit and end-to-end tests. Unit tests with Jest live as first-class citizens alongside your source files, while Cypress provides reliable end-to-end tests in an intuitive GUI for development.
- [**Speedy development**](docs/): Between [configurable generators](docs), [handy aliases](docs/development.md#aliases), and [global base components](docs/development.md#base-components), your productivity will skyrocket.

请务必查看 [文档](https://github.com/linuxing3/awesome-manager/blob/master/docs/README.md)。

在这里，你将找到有关项目配置、项目结构和构建应用程序的有用信息。


## Electron Project setup

### Compiles and hot-reloads for electron development
```
yarn dev
yarn electron:serve
```

### Compiles and minifies for production
```
yarn dist
yarn electron:build
```

### install necessary plugins

```
yarn plugins:install
```

### install local vue plugins

``` sh
yarn db:add
yarn db:invoke
```

### generate new

``` sh
# hygen new component-table
yarn new component-table
# hygen new model && hygen new router && hygen new component-table && hygen new component-form",
yarn new:all
```

## General Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Run your end-to-end tests
```
yarn run test:e2e
```

## Graphql

``` sh
yarn prisma:add
yarn prisma:generate
yarn prisma:demo
yarn prisma:deploy
```

## Storybook

``` sh
yarn storybook:serve
yarn storybook:build
```

## Documentation

This project includes a `docs` folder with more details on:

## FAQ
