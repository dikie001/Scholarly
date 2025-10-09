import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Login = () => {
  const [admissionNumberExist, setAdmissionNumberExist] = useState(false);

  const HandleAuthentication = () => {
    setAdmissionNumberExist(true);
  };
  return (
    <div className="h-screen w-full flex justify-center items-center  p-6">
      <Card className="w-full max-w-xl shadow-lg p-4">
        <div className="flex justify-between gap-4">
          <div>
            
            <div className="mt-12">
              <p>
                <span className="font-medium text-sm">Students:</span>{" "}
                <span className="text-sm text-muted-foreground">
                  Use your admission number{" "}
                </span>
              </p>
              <p>
                <span className="font-medium text-sm">Faculty :</span>{" "}
                <span
                  className="text-sm text-muted-foreground
              "
                >
                  Use your staff ID
                </span>
              </p>

              <a href="contact_support" className="text-[14px] text-blue-600">Contact support</a>
            </div>
          </div>
          <div className="max-w-sm ">
            {" "}
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold text-blue-600">
                Scholarly <sup className="text-xs ">TM</sup>
              </CardTitle>
              {/* <CardDescription className="text-muted-foreground">
                Sign in to continue
              </CardDescription> */}
            </CardHeader>
            <CardContent className="space-y-4 border-2  rounded-xl p-4">
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Admission number
                </label>
                <Input
                  id="number"
                  type="number"
                  placeholder="14572"
                  className="mt-1"
                />
              </div>

              {admissionNumberExist && (
                <div>
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="mt-1"
                  />
                </div>
              )}

              <Button
                onClick={HandleAuthentication}
                className="w-full bg-blue-600 hover:bg-blue-700  max-w-xs mx-auto flex sm:w-50"
              >
                {admissionNumberExist ? "Login" : "Authenticate"}
              </Button>
              <CardFooter className="flex justify-center text-sm text-muted-foreground">
                <p>
                  Don’t have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-800 font-medium hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </CardFooter>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
