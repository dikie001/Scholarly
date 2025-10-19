
export type addStudentFormTypes = {
  firstName: string,
  lastName: string,
  dateOfBirth: Date | undefined,
  gender: "male" | "female" | "other" | "",
  admissionNumber: number | undefined,
  grade: string,
  stream: string,
  parentName: string,
  parentEmail: string,
  parentPhone: number | undefined,
  alternatePhone: number | undefined,
  address: string,
  medicalInfo: string,
  previousSchool: string,
  residence: string,
};
