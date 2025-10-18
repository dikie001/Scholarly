
export type addStudentFormTypes = {
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  gender: "male" | "female" | "other" | "",
  admissionNumber: number | null,
  grade: string,
  stream: string,
  parentName: string,
  parentEmail: string,
  parentPhone: number | null,
  alternatePhone: number | null,
  address: string,
  medicalInfo: string,
  previousSchool: string,
  residence: string,
};
