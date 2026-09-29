import { hash } from "./password.js";
import { create } from "./identity.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function register({ email, password }, options) {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  email = email.trim().toLowerCase();

  if (!EMAIL_REGEX.test(email)) {
    throw new Error("Invalid email");
  }

  // validate password length
  if (password.length < options.password.minLength) {
    throw new Error(
      `Password must be at least ${options.password.minLength} characters`,
    );
  }

  const passwordHash = await hash(password);

  return create({
    email,
    passwordHash,
  });
}
