import { ICommandItem } from '../core/commands';

function commandsHandler(command: ICommandItem): void {
  command.action();
}

export default commandsHandler;
