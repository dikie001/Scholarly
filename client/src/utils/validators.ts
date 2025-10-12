import type { zodIssuesTypes } from "@/types/auth.types";
import type { AxiosResponse } from "axios";
import { toast } from "sonner";

// Find the error messages for signup page from zod
export const getError = (params: string, error: zodIssuesTypes[]) => {
  const errorMessage = error.find((e) => e.path === params)?.message;
  return errorMessage;
};

// Find out if a path exist in the error array
export const findPath = (params: string, error: zodIssuesTypes[]) => {
  const pathExists = error.some((e) => e.path === params);
  console.log(pathExists);
  return pathExists;
};

// Parse response from server, check for error messages, success messages and ststus codes
export const parseResponse = (res: AxiosResponse<any, any, {}>) => {
  // Student response
  if (res.data.message === "Student registered successfully")
    toast.success("Account created successfuly!");
  // Faculty response
  if (res.data.message === "faculty registered successfully") {
    toast.success("Account created successfuly!");
  }
  // Perent response
  if (res.data.message === "parent registered successfully") {
    toast.success("Account created successfuly!");
  }
};

// Parse the errors from server and show feedback
export const parseError = (err: any) => {
  // Student error
  if (err.response?.data?.error === "Admission number exists") {
    toast.error("The admission number exists!");
  }

  //   Faculty error
  if (err.response?.data?.error === "faculty number exists") {
    toast.error("The phone number exists!");
  } else if (err.response?.data.error === "faculty email exists") {
    toast.error("The email is already registered, login instead");
  }

//   Parent error
  if (err.response?.data?.error === "parent number exists") {
    toast.error("The phone number exists!");
  } 

};
