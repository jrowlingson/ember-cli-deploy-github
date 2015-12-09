# ember-cli-deploy-github

> An ember-cli-deploy-plugin for GitHub integration

[![](https://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/plugins/ember-cli-deploy-github.svg)](http://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/)

<hr>
**WARNING: This plugin is a WIP and not ready for consumption yet.
<hr/>

## What is an ember-cli-deploy plugin?

A plugin is an addon that can be executed as a part of the ember-cli-deploy pipeline. A plugin will implement one or more of the ember-cli-deploy's pipeline hooks.

For more information on what plugins are and how they work, please refer to the [Plugin Documentation][1].

## Quick Start
To get up and running quickly, do the following:

- Ensure [ember-cli-deploy-build][2] is installed and configured

- Install this plugin

```bash
$ ember install ember-cli-deploy-github
```

- Run the pipeline

```bash
$ ember deploy
```

## Installation
Run the following command in your terminal:

```bash
ember install ember-cli-deploy-github
```

## Prerequisites

The following properties are expected to be present on the deployment `context` object:

- `distDir`   (provided by [ember-cli-deploy-build][2])
- `distFiles` (provided by [ember-cli-deploy-build][2])

## Running Tests

- `npm test`

[1]: http://ember-cli.github.io/ember-cli-deploy/plugins "Plugin Documentation"
[2]: https://github.com/ember-cli-deploy/ember-cli-deploy-build "ember-cli-deploy-build"
[3]: https://github.com/ember-cli/ember-cli-deploy "ember-cli-deploy"

