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
