import { Args, Command, Flags, ux } from '@oclif/core';
import { generate } from '../../lib/generator/generate';

export default class New extends Command {
  static description = 'Creates a new Angular project';

  static examples = [
    `$ generator angular new --eslint --jest my-new-angular-project
`,
  ];

  static flags = {
    eslint: Flags.boolean({ description: 'Add a custom eslint with Arnat Settings' }),
    gitignore: Flags.boolean({ default: true }),
  };

  static args = {
    name: Args.string({ description: 'Project name', required: true, default: 'new-angular-project' }),
  };

  async run(): Promise<void> {
    const { args, flags } = await this.parse(New);

    ux.action.start('Generating a new angular project');
    generate('angular new ' + args.name);
    if (flags.eslint) await generate('features eslint --name ' + args.name);
    if (flags.gitignore) await generate('features gitignore --name ' + args.name);
    ux.action.stop();
  }
}
