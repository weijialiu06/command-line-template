import program from './program';
import commandsHandler from './utils/commandsHandler';
import commands from './core/commands';
const version = require('../package.json').version;

program
  .version(version, '-V, --version', 'current version of ')
  .option('-d, --directory <Directory>', 'target directory')
  .option('-D, --directory <Directory>', 'the cache directory of ')
  .option('-o, --output <Directory>', 'the target directory to output')
  .parse(process.argv);

// regist commands
Object.keys(commands)
  .forEach(command => {
    const conf = commands[command];
    program
      .command(conf.command, null, { ...conf.option })
      .description(conf.description)
      .action(function (): void {
        commandsHandler(commands[command]);
      });
  });

program.parse(process.argv);
