import bcrypt from "bcryptjs";

const saltRounds = 10;

// Hash the  password
export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, saltRounds);
};

// Compare the password
export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {

  return await bcrypt.compare(password, hash);
};
