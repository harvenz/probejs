import { register } from "./register.js";

export class Auth {
  constructor(options = {}) {
    this.options = {
      ...options,
      password: {
        minLength: 8,
        ...options.password,
      },
    };
  }

  async register(data) {
    return register(data, this.options);
  }
}
