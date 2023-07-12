oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g arnat-demo-cli-nodejs-reusable-code
$ arnat-demo-cli-nodejs-reusable-code COMMAND
running command...
$ arnat-demo-cli-nodejs-reusable-code (--version)
arnat-demo-cli-nodejs-reusable-code/0.0.0 linux-x64 node-v18.12.0
$ arnat-demo-cli-nodejs-reusable-code --help [COMMAND]
USAGE
  $ arnat-demo-cli-nodejs-reusable-code COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`arnat-demo-cli-nodejs-reusable-code hello PERSON`](#arnat-demo-cli-nodejs-reusable-code-hello-person)
* [`arnat-demo-cli-nodejs-reusable-code hello world`](#arnat-demo-cli-nodejs-reusable-code-hello-world)
* [`arnat-demo-cli-nodejs-reusable-code help [COMMANDS]`](#arnat-demo-cli-nodejs-reusable-code-help-commands)
* [`arnat-demo-cli-nodejs-reusable-code plugins`](#arnat-demo-cli-nodejs-reusable-code-plugins)
* [`arnat-demo-cli-nodejs-reusable-code plugins:install PLUGIN...`](#arnat-demo-cli-nodejs-reusable-code-pluginsinstall-plugin)
* [`arnat-demo-cli-nodejs-reusable-code plugins:inspect PLUGIN...`](#arnat-demo-cli-nodejs-reusable-code-pluginsinspect-plugin)
* [`arnat-demo-cli-nodejs-reusable-code plugins:install PLUGIN...`](#arnat-demo-cli-nodejs-reusable-code-pluginsinstall-plugin-1)
* [`arnat-demo-cli-nodejs-reusable-code plugins:link PLUGIN`](#arnat-demo-cli-nodejs-reusable-code-pluginslink-plugin)
* [`arnat-demo-cli-nodejs-reusable-code plugins:uninstall PLUGIN...`](#arnat-demo-cli-nodejs-reusable-code-pluginsuninstall-plugin)
* [`arnat-demo-cli-nodejs-reusable-code plugins:uninstall PLUGIN...`](#arnat-demo-cli-nodejs-reusable-code-pluginsuninstall-plugin-1)
* [`arnat-demo-cli-nodejs-reusable-code plugins:uninstall PLUGIN...`](#arnat-demo-cli-nodejs-reusable-code-pluginsuninstall-plugin-2)
* [`arnat-demo-cli-nodejs-reusable-code plugins update`](#arnat-demo-cli-nodejs-reusable-code-plugins-update)

## `arnat-demo-cli-nodejs-reusable-code hello PERSON`

Say hello

```
USAGE
  $ arnat-demo-cli-nodejs-reusable-code hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/rsurjano/arnat-demo-cli-nodejs-reusable-code/blob/v0.0.0/dist/commands/hello/index.ts)_

## `arnat-demo-cli-nodejs-reusable-code hello world`

Say hello world

```
USAGE
  $ arnat-demo-cli-nodejs-reusable-code hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ arnat-demo-cli-nodejs-reusable-code hello world
  hello world! (./src/commands/hello/world.ts)
```

## `arnat-demo-cli-nodejs-reusable-code help [COMMANDS]`

Display help for arnat-demo-cli-nodejs-reusable-code.

```
USAGE
  $ arnat-demo-cli-nodejs-reusable-code help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for arnat-demo-cli-nodejs-reusable-code.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.11/src/commands/help.ts)_

## `arnat-demo-cli-nodejs-reusable-code plugins`

List installed plugins.

```
USAGE
  $ arnat-demo-cli-nodejs-reusable-code plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ arnat-demo-cli-nodejs-reusable-code plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `arnat-demo-cli-nodejs-reusable-code plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ arnat-demo-cli-nodejs-reusable-code plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ arnat-demo-cli-nodejs-reusable-code plugins add

EXAMPLES
  $ arnat-demo-cli-nodejs-reusable-code plugins:install myplugin 

  $ arnat-demo-cli-nodejs-reusable-code plugins:install https://github.com/someuser/someplugin

  $ arnat-demo-cli-nodejs-reusable-code plugins:install someuser/someplugin
```

## `arnat-demo-cli-nodejs-reusable-code plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ arnat-demo-cli-nodejs-reusable-code plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ arnat-demo-cli-nodejs-reusable-code plugins:inspect myplugin
```

## `arnat-demo-cli-nodejs-reusable-code plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ arnat-demo-cli-nodejs-reusable-code plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ arnat-demo-cli-nodejs-reusable-code plugins add

EXAMPLES
  $ arnat-demo-cli-nodejs-reusable-code plugins:install myplugin 

  $ arnat-demo-cli-nodejs-reusable-code plugins:install https://github.com/someuser/someplugin

  $ arnat-demo-cli-nodejs-reusable-code plugins:install someuser/someplugin
```

## `arnat-demo-cli-nodejs-reusable-code plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ arnat-demo-cli-nodejs-reusable-code plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ arnat-demo-cli-nodejs-reusable-code plugins:link myplugin
```

## `arnat-demo-cli-nodejs-reusable-code plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ arnat-demo-cli-nodejs-reusable-code plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ arnat-demo-cli-nodejs-reusable-code plugins unlink
  $ arnat-demo-cli-nodejs-reusable-code plugins remove
```

## `arnat-demo-cli-nodejs-reusable-code plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ arnat-demo-cli-nodejs-reusable-code plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ arnat-demo-cli-nodejs-reusable-code plugins unlink
  $ arnat-demo-cli-nodejs-reusable-code plugins remove
```

## `arnat-demo-cli-nodejs-reusable-code plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ arnat-demo-cli-nodejs-reusable-code plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ arnat-demo-cli-nodejs-reusable-code plugins unlink
  $ arnat-demo-cli-nodejs-reusable-code plugins remove
```

## `arnat-demo-cli-nodejs-reusable-code plugins update`

Update installed plugins.

```
USAGE
  $ arnat-demo-cli-nodejs-reusable-code plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
