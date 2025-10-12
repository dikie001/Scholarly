import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import type {
  accountTypes,
  userTypes,
  zodIssuesTypes,
} from "@/types/auth.types";
import { APP_VERSION } from "@/utils/constants";
import {
  findPath,
  getError,
  parseError,
  parseResponse,
} from "@/utils/validators";
import { facultySchema, parentSchema, studentSchema } from "@/zod/auth.schema";
import axios from "axios";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const Signup = () => {
  const [accountType, setAccountType] = useState<accountTypes>("");
  const [user, setUser] = useState<userTypes>({
    fullName: "",
    email: "",
    password: "",
    admissionNumber: null,
    phoneNumber: 0,
    accountType: "",
    role: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // MAKE SURE TO REMOVE THIS ANY
  const [error, setError] = useState<zodIssuesTypes[]>([]);
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle user info, update the object
  const HandleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle account type selection
  const HandleAccountType = (params: accountTypes) => {
    setAccountType(params);
    setUser((prev) => ({ ...prev, role: params }));
  };

  // Handle signup
  const HandleSignup = () => {
    // Clear error messages if available
    if (passwordError) setPasswordError("");
    // Check if role is selected
    if (user.role.trim() === "") {
      return toast.error("Select account type!");
    }
    // Check if password is same as  confirm password
    const isValidPassword = user.password === confirmPassword;
    if (!isValidPassword) return setPasswordError("Password do not match!");

    // Validate data
    const schema =
      user.role === "student"
        ? studentSchema
        : user.role === "parent"
        ? parentSchema
        : facultySchema;
    const result = schema.safeParse(user);
    if (!result.success) {
      console.log(result.error.issues);
      const issuesArray = result.error.issues;

      // Map the issues array to error states
      const errArray = issuesArray.map((issue) => ({
        path: issue.path.join(""),
        message: issue.message,
      }));
      setError(errArray);
      console.log("error-arr", errArray);
      return;
    } else {
      console.log(result);
    }
    try {
      setLoading(true);
      axios
        .post("http://localhost:4500/api/auth/register", user)
        .then((res) => {
          // parse response
          parseResponse(res);
        })
        .catch((err) => {
          
          // Parse error
          parseError(err);
        });
    } catch (err) {
      console.log("Axios error", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen w-full flex justify-center items-center sm:p-6 ">
      {/* <Toaster richColors position="top-right"/> */}
      <div className="border relative max-w-2xl w-full p-4 py-24 rounded-xl">
        <div className="h-12 bg-gradient-to-l from-blue-600 to-blue-400 text-center px-4 left-1/2 -translate-x-1/2 flex py-2 rounded-t-xl absolute top-0 max-w-2xl w-full">
          <p className="text-sm absolute right-6 top-3.5 text-white font-medium">
            {APP_VERSION}
          </p>
        </div>
        <Card className="w-full max-w-xl shadow-lg p-3 py-6 md:p-4 mx-auto">
          <CardTitle className="text-4xl sm:text-5xl flex items-center mx-auto font-bold text-blue-600 max-sm:-mb-2">
            Scholarly <sup className="text-xs">TM</sup>
          </CardTitle>{" "}
          <CardDescription className="mx-auto -mt-2 -mb-2 sm:hidden">
            Fill in your details
          </CardDescription>
          <div className="flex sm:justify-between gap-4">
            <div className="max-sm:hidden">
              <div className="mt-20">
                <a href="contact_support" className="text-[14px] text-blue-600">
                  Contact support
                </a>
              </div>
              <div className="mt-4">
                <img src="/images/shield.png" width={100} alt="padlock" />
              </div>
            </div>
            <div className="max-w-sm max-sm:mx-auto">
              <CardContent className="space-y-4 border-2 rounded-xl p-4">
                {/* Account type */}
                <label className="text-sm font-medium">Account type</label>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`border cursor-pointer  flex  w-full py-1.5 px-4 rounded-lg ${
                      accountType === "" && "text-gray-500"
                    }`}
                  >
                    {accountType || "Select role"}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Select role</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => HandleAccountType("student")}
                    >
                      Student
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => HandleAccountType("faculty")}
                    >
                      Faculty
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => HandleAccountType("parent")}
                    >
                      Parent
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Full name */}
                <div>
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    name="fullName"
                    onChange={(e) => HandleUser(e)}
                    placeholder="John doe"
                    className="mt-1"
                  />
                  {findPath("fullName", error) && (
                    <p className="text-red-500  text-xs mt-1">
                      {getError("fullName", error)}
                    </p>
                  )}
                </div>

                {/* Email */}
                {accountType === "faculty" && (
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      onChange={(e) => HandleUser(e)}
                      name="email"
                      placeholder="john.doe@example.com"
                      className="mt-1"
                    />{" "}
                    {findPath("email", error) && (
                      <p className="text-red-500  text-xs mt-1">
                        {getError("email", error)}
                      </p>
                    )}
                  </div>
                )}

                {/* Admission Number */}
                {accountType === "student" && (
                  <div>
                    <label
                      htmlFor="admissionNumber"
                      className="text-sm font-medium"
                    >
                      Admission Number
                    </label>
                    <Input
                      id="admissionNumber"
                      type="number"
                      onChange={(e) => HandleUser(e)}
                      name="admissionNumber"
                      placeholder="14572"
                      className="mt-1"
                    />
                    {findPath("admissionNumber", error) && (
                      <p className="text-red-500  text-xs mt-1">
                        {getError("admissionNumber", error)}
                      </p>
                    )}
                  </div>
                )}

                {/* Phone Number */}
                {(accountType === "parent" || accountType === "faculty") && (
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="text-sm font-medium"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phoneNumber"
                      type="number"
                      onChange={(e) => HandleUser(e)}
                      name="phoneNumber"
                      placeholder="0716952782"
                      className="mt-1"
                    />
                    {findPath("phoneNumber", error) && (
                      <p className="text-red-500  text-xs mt-1">
                        {getError("phoneNumber", error)}
                      </p>
                    )}
                  </div>
                )}
                {/* Password */}
                <div className="relative">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    onChange={(e) => HandleUser(e)}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="mt-1"
                  />
                  {/* Password error */}
                  {findPath("password", error) && (
                    <p className="text-red-500  text-xs mt-1">
                      {getError("password", error)}
                    </p>
                  )}
                  {/* show password toggle */}
                  <div
                    onClick={() => {
                      if (user.password.trim() === "") {
                        return toast.info("Enter password first");
                      }
                      setShowPassword(!showPassword);
                    }}
                    className="absolute text-gray-500 cursor-pointer top-9 right-4"
                  >
                    {showPassword ? <Eye size={16} /> : <EyeOff size={14} />}
                  </div>
                </div>

                {/* Coonfirm passsword */}
                <div className="relative">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium"
                  >
                    Confirm Password
                  </label>
                  <Input
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="mt-1"
                  />
                  {/* show password toggle */}
                  <div
                    onClick={() => {
                      if (confirmPassword.trim() === "") {
                        return toast.info("Enter password first");
                      }
                      setShowPassword(!showPassword);
                    }}
                    className="absolute text-gray-500 cursor-pointer top-9 right-4"
                  >
                    {showPassword ? <Eye size={16} /> : <EyeOff size={14} />}
                  </div>
                  {passwordError && (
                    <p className="text-red-500  text-xs mt-1">
                      {passwordError}
                    </p>
                  )}
                </div>

                {/* Sign up btn */}

                <Button
                  onClick={HandleSignup}
                  className="w-full mt-6 hover:scale-102 duration-200 active:scale-90 cursor-pointer bg-gradient-to-l from-blue-600 to-blue-400 max-w-xs mx-auto flex max-sm:w-60 sm:w-50"
                >
                  {loading && <LoaderCircle className="animate-spin" />}
                  {loading ? "Creating account..." : "Create account"}
                </Button>

                <CardFooter className="flex justify-center text-sm text-muted-foreground">
                  <p>
                    Already have an account?{" "}
                    <a
                      href="login"
                      className="text-blue-800 font-medium hover:underline"
                    >
                      Login
                    </a>
                  </p>
                </CardFooter>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
