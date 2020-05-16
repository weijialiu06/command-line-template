import { ICommandItem } from '.';

export default class Clear implements ICommandItem {
  public command = 'clear';
  public description = 'description of clear command';
  public option = {};
  public action(): void {
    console.log(this.description);
  }
}
