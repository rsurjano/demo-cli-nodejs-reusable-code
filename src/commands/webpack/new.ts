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
    if (flags.html) await generate('features html --name ' + args.name)

    ux.action.stop()
  }
}
