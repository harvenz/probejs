import crypto from "node:crypto";

export function create({ email, passwordHash }) {
  return {
    id: crypto.randomUUID(),
    email: email,
    passwordHash: passwordHash,
    createdAt: new Date(),
  };
}
