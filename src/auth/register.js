export async function register({ email, password }) {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  return {
    email,
    password,
  };
}
