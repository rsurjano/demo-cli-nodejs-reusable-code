import { Args, Command, ux } from '@oclif/core'
import { generate } from '../../lib/generator/generate'

export default class New extends Command {
  static description = 'Generates a new TypeScript project'

  static examples = [
    `$ arnat-starter typescript new my-typescript-project
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
