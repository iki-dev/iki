import { Model } from "@iki-dev/framework/database/model";

export class User extends Model {
  constructor(
    public name: string,
    public id?: number,
  ) {
    super();
  }
}
