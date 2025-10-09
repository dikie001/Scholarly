import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Signup = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center sm:p-6 ">
      <div className="border relative max-w-2xl w-full p-6 py-24 rounded-xl">
        <div className="h-12 bg-gradient-to-l from-blue-600 to-blue-400 text-center px-4 left-1/2 -translate-x-1/2 flex py-2 rounded-t-xl absolute top-0 max-w-2xl w-full">
          <p className="text-sm absolute right-6 top-3.5 text-white font-medium">
            version 1.0.0
          </p>
        </div>
        <Card className="w-full max-w-xl shadow-lg p-4 mx-auto">
          <CardTitle className="text-4xl sm:text-5xl flex items-center mx-auto font-bold text-blue-600 max-sm:-mb-2">
            Scholarly <sup className="text-xs">TM</sup>
          </CardTitle>{" "}
          <CardDescription className="mx-auto -mt-2 -mb-2 sm:hidden">Fill in your details</CardDescription>
          <div className="flex sm:justify-between gap-4">
            <div className="max-sm:hidden">
              <div className="mt-20">
                <a href="contact_support" className="text-[14px] text-blue-600">
                  Contact support
                </a>
              </div>
              <div className="mt-4">
                <img src="/images/padlock.png" width={100} alt="padlock" />
              </div>
            </div>
            <div className="max-w-sm max-sm:mx-auto">
            
              <CardContent className="space-y-4 border-2 rounded-xl p-4">
                <div>
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John doe"
                    className="mt-1"
                  />
                </div>
    
        
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="mt-1"
                  />
                </div>
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
                    placeholder="14572"
                    className="mt-1"
                  />
                </div>
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
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium"
                  >
                    Confirm Password
                  </label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="mt-1"
                  />
                </div>
                <Button className="w-full bg-gradient-to-l from-blue-600 to-blue-400 max-w-xs mx-auto flex max-sm:w-60 sm:w-50">
                  Sign Up
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
