export type accountTypes = "student" | "faculty" | "parent" | "";
export type userTypes = {
  fullName: string;
  email: string;
  accountType: accountTypes;
  admissionNumber?: string;
  password: string;
  phoneNumber: string;
};
export type credentialsTypes = {
  identifier: string;
  password: string;
};
