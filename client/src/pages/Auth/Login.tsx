import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

const Login = () => {
  const [admissionNumberExist, setAdmissionNumberExist] = useState(false);

  const HandleAuthentication = () => {
    setAdmissionNumberExist(true);
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>;
  };
  return (
    <div className="h-screen w-full flex justify-center items-center  sm:p-6">
      
      <div className="border relative max-w-2xl w-full p-6 py-24 rounded-xl">
        <div
          className="h-12 bg-gradient-to-l from-blue-600 to-blue-400 text-center px-4 left-1/2 -translate-x-1/2  flex py-2 rounded-t-xl absolute top-0 max-w-2xl w-full 
        "
        >
          <p className="text-sm absolute right-6 top-3.5 text-white font-medium">
            version 1.0.0
          </p>
        </div>
        <Card className="w-full max-w-xl shadow-lg p-4 mx-auto">
          <CardTitle className="text-4xl sm:text-5xl flex items-center mx-auto font-bold text-blue-600 max-sm:-mb-2">
            Scholarly <sup className="text-xs ">TM</sup>
          </CardTitle>
          <div className="flex sm:justify-between gap-4">
            <div className="max-sm:hidden">
              {/* Instrucations for students and faculty */}
              <div className="mt-2">
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

                <a href="contact_support" className="text-[14px] text-blue-600">
                  Contact support
                </a>
              </div>

              {/* Padlock image */}
              <div className="mt-4">
                <img src="/images/padlock.png" width={100} alt="" />
              </div>
            </div>
            <div className="max-w-sm max-sm:mx-auto ">
              <img
                src="/images/padlock.png"
                width={100}
                className="sm:hidden mx-auto mb-2"
                alt="padlock"
              />
              <CardHeader className="text-center"></CardHeader>
              <CardContent className="space-y-4  border-2  rounded-xl p-4">
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
                  className="w-full bg-gradient-to-l from-blue-600 to-blue-400  max-w-xs mx-auto flex max-sm:w-60 sm:w-50"
                >
                  {admissionNumberExist ? "Login" : "Authenticate"}
                </Button>
                <CardFooter className="flex justify-center text-sm text-muted-foreground">
                  <p>
                    Don’t have an account?{" "}
                    <a
                      href="signup"
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
    </div>
  );
};

export default Login;
