import type { zodIssuesTypes } from "@/types/auth.types";

// Find the error messages for signup page from zod
export const getError = (params: string, error: zodIssuesTypes[]) => {
    const errorMessage =error.find((e)=>e.path === params)?.message
    return errorMessage
};

// Find out if a path exist in the error array
export const findPath=(params:string, error:zodIssuesTypes[])=>{
    const pathExists = error.some((e)=>e.path===params)
    return pathExists
}
