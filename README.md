# CLI en NODEJS para generar y reutilizar codigo

Como el uso del CLI permite al desarrollador de hoy poder automatizar tareas comunes y agilizar su flujo de trabajo

## Objetivo

La presente implementacion propone entregar al usuario un CLI simple que genera codigo en base a la entrada del usuario,extendible y personalizable. Como punto adicional cabe resaltar que el CLI ofrece soporte de ejecucion para Windows / Linux / OSX

## Caracteristicas

- Genera Codigo en base a plantillas y usando un CLI de facil uso
- Facilmente extendible a traves de Oclif

## Requisitos

- NodeJS >=16

## Actualizando el proyecto base

Modificamos el archivo package.json con lo siguiente

```json
{
  "bin": {
    "generator": "./bin/run"
  },
  "oclif": {
    "topics": {
      "typescript": {
        "description": "Genera un proyecto typescript"
      },
      "webpack": {
        "description": "Genera un proyecto Webpack v5"
      }
    }
  },
}
```

Agregamos el generador de plantillas

```shell
npm install -S hygen
```

> Puedes encontrar la implementacion hasta el momento aqui

## Implementacion del generador de template

Se agregara Hygen como generador de plantillas, nos ayudara a organizar las plantillas y generar el codigo resultante, crearemos el archivo `src/lib/generator/generate.ts` con el siguiente contenido

```typescript
const { runner } = require('hygen')
const Logger = require('hygen/dist/logger')

export const generate = async (cmd: string): Promise<void> => {
  const templates = process.cwd() + '/templates'
  return runner(cmd, {
    templates,
    cwd: process.cwd(),
    logger: new Logger.default(console.log.bind(console)),
    createPrompter: () => require('enquirer'),
    exec: (action: any, body: any) => {
      const opts = body && body.length > 0 ? { input: body } : {}
      return require('execa').shell(action, opts)
    },
    debug: !!process.env.DEBUG,
  })
}
```

> Puedes encontrar la implementacion hasta el momento aqui

## Implementando generador typescript new

1. Creamos el archivo en `new.ts` en `src/commands/typescript`

```typescript
import { Args, Command, ux } from '@oclif/core'
import { generate } from '../../lib/generator/generate'

export default class New extends Command {
  static description = 'Generates a new TypeScript project'

  static examples = [
    `$ generator typescript new my-typescript-project
`,
  ]

  static args = {
    name: Args.string({
      description: 'Generates a new TypeScript project',
      default: 'my-typescript-project',
      required: true,
    }),
  }

  async run(): Promise<void> {
    const { args } = await this.parse(New)

    ux.action.start('Generating a new TypeScript Project')
    await generate('typescript new --name ' + args.name)
    ux.action.stop()
  }
}
```

Y aqui vamos entendiendo la implementacion del comando

```typescript
  // indicamos la descripcion del proyecto
  static description = 'Generates a new TypeScript project'
```

```typescript
  // Agregamos un ejemplo que servira como ayuda para el comando 
  static examples = [
    `$ generator typescript new typescript
`,
  ]
```

Ahora toca implementar el manejador de ejecucion para el CLI, que es como sigue

1. Obtenemos los argumentos y flags que el usuario ha enviado, `this.parse(New)`
2. `ux.action.start` permite agregar un loader al prompt
3. Pasamos el nombre del comando al generador(lo veremos mas adelante) y renderiza el template
4. Verificamos si el usuario ha agregado algunos flags y agregamos sus templates respectivos si aplica
5. Detenemos el loader

```typescript
export default class New extends Command {
  // ...
  async run(): Promise<void> {
    const { args } = await this.parse(New)

    ux.action.start('Generating a new TypeScript Project')
    await generate('typescript new --name ' + args.name)
    ux.action.stop()
  }
  // ...
}
```

## Implementando generador webpack new

Creamos el archivo `new.ts` en `src/commands/webpack`

```typescript
import { Args, Flags, Command, ux } from '@oclif/core'
import { generate } from '../../lib/generator/generate'

export default class New extends Command {
  static description = 'Generates a new Webpack project'

  static examples = [
    `$ arnat-starter webpack new my-webpack-project
`,
  ]

  static flags = {
    gitignore: Flags.boolean({ description: 'Add a .gitignore file', default: true }),
    html: Flags.boolean({ description: 'Add a Webpack HTML plugin' }),
  }

  static args = {
    name: Args.string({
      description: 'Generates a new Webpack project',
      default: 'my-webpack-project',
      required: true,
    }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(New)

    ux.action.start('Generating a new Webpack Project')
    generate('webpack new --name ' + args.name)
    if (flags.gitignore) await generate('features gitignore --name ' + args.name)
    if (flags.html) await generate('features webpack-html --name ' + args.name)

    ux.action.stop()
  }
}
```

Los flags pueden agruparse y son independientes, aqui su implementacin

```typescript
  static flags = {
    gitignore: Flags.boolean({ description: 'Add a .gitignore file', default: true }),
    html: Flags.boolean({ description: 'Add a Webpack HTML plugin' }),
  }
```

Aqui agregamos un argumento para guardar el nombre del proyecto, solo usaremos uno

- name: almacena el nombre del proyecto, ejem: `generator webpack new my-webpack-project`

```typescript
  // Un unico argumento que recibe el nombre del proyecto
  static args = {
    name: Args.string({
      description: 'Generates a new Webpack project',
      default: 'my-webpack-project',
      required: true,
    }),
  }
```

> Puedes encontrar la implementacion hasta el momento aqui

### Populamos el proyecto con las plantillas

Las plantillas usan Embedded JavaScript Templating y tienen extension `.ejs.t` por lo que el uso de variables esta permitido `<%= name %>`. Puedes encontrarlas en el siguiente link, aqui un ejemplo

```handlebars
---
to: <%= name %>/tsconfig.json
from: starters/typescript/new/tsconfig.json
---
```

En esta plantilla se reemplaza el nombre de la carpeta con una variable y se copia el contenido de un archivo que contiene la configuracion

aqui otro ejemplo donde se indica el destino del archivo y su contenido, aqui se pueden reemplazar variables

```handlebars
---
to: <%= name %>/package.json
---
{
  "name": "<%= name %>",
  "version": "0.0.1",
  "main": "./build/esm/main.js",
  "module": "./build/cjs/main.js",
  "exports": {
    ".": "./build/esm/main.js",
    "./*": "./build/esm/*.js"
  },
  "scripts": {
    "build": "rimraf build && tsc -b ./tsconfig.cjs.json ./tsconfig.esm.json ./tsconfig.types.json"
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "5.0.4"
  },
  "sideEffects": false,
  "private": false
}
```

> Puedes encontrar la implementacion hasta el momento aqui

Listo! recapitulamos nuestra implementacion del CLI

- Agregamos el flujo y la logica para obtener los comandos
- Agregamos las plantillas base `ejs`
- Agregamos los archivos `raw` del proyecto

> Puedes encontrar la implementacion hasta el momento aqui

Estariamos listos para su verificacion/ejecucion

## Ejecucion y testeo

Podemos instalar el paquete como un ejecutable global o usar `./bin/run` para ejecuciones locales

```shell
# Compilacion & generacion de archivo oclif.manifest.json
npm run prepack

# Prueba en local
❯ ./bin/run typescript new my-typescript-project

# Instalacion en global
npm install --global .

# Ejecucion

```

## Licencia

MIT
