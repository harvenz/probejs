import { hash } from "./password.js";

export async function register({ email, password }) {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const passwordHash = await hash(password);

  return {
    email,
    passwordHash,
  };
}
