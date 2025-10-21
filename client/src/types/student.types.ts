
export type addStudentFormTypes = {
  firstName: string,
  lastName: string,
  dateOfBirth: string | undefined,
  gender: "male" | "female" | "other" | "",
  admissionNumber: number | undefined,
  grade: string,
  stream: string,
  parentName: string,
  parentAddress:string,
  parentEmail: string,
  parentPhone: number | undefined,
  alternatePhone: number | undefined,
  address: string,
  medicalInfo: string,
  previousSchool: string,
  residence: string,
};
