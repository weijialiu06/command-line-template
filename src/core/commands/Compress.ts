import { ICommandItem } from '.';
const chalk = require('chalk');

export default class Compress implements ICommandItem {
  public command = 'compress';
  public description = 'description of compress command';
  public option = {
    isDefault: false // true
  };
  public action(): void {
    console.log(chalk.yellow(this.description));
  }
}
