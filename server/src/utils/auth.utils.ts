import bcrypt from "bcryptjs";

const saltRounds = 10;

// Hash the  password
export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, saltRounds);
};

// Compare the password
export const comparePassword = async (hash: string, password: string) => {
  bcrypt.compare(password, hash, function (err, result) {
    if (err) console.log(err);
    return result;
  });
};
