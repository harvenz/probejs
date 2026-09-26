import { Auth } from "./auth/index.js";

export class Probe {
  constructor(options = {}) {
    this.options = options;
    this.auth = new Auth(options.auth);
  }
}
