import { User } from "./user";

export class Admin extends User {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
}