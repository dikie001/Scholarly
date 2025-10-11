// Account roles
export type accountTypes = "student" | "faculty" | "parent" | "";

// User data types in signup
export type userTypes = {
  fullName: string;
  email: string;
  accountType: accountTypes;
  admissionNumber?: number;
  password: string;
  phoneNumber: string;
  role: string;
};

// User credentials in login
export type credentialsTypes = {
  identifier: string;
  password: string;
};

// Zod Issues
export type zodIssuesTypes = {
  path: string | number | symbol;
  message: string;
};
