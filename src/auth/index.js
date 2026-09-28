import { register } from "./register.js";

export class Auth {
  constructor(options = {}) {
    this.options = options;
  }

  async register(data) {
    return register(data);
  }
}
