import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { credentialsTypes } from "@/types/auth.types";
import { APP_VERSION } from "@/utils/constants";
import axios from "axios";
import { Loader, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Login = () => {
  const [identifierPresent, setIdentifierPresent] = useState(false);
  const [credentials, setCredentials] = useState<credentialsTypes>({
    identifier: "",
    password: "",
    role: "student",
  });
  const [tabValue, setTabValue] = useState<"student" | "parent" | "faculty">(
    "student"
  );
  const [loading, setLoading] = useState(false);
  const [showName, setShowName] = useState(false);
  const [name, setName] = useState("");
  const [passwordCounter, setPasswordCounter] = useState(0);
  const [errorCounter, setErrorCounter] = useState(0);

  // Handle validating if said identifier exists
  const HandleAuthentication = async () => {
    // Add role to credetials
    setCredentials((prev) => ({ ...prev, role: tabValue }));

    // Validate identifier
    if (credentials.identifier.trim() === "") {
      return toast.error("ID or admission number is required");
    }
    // Send credentials to server for validation
    try {
      setLoading(true);
      axios
        .post("http://localhost:4500/api/auth/login", credentials)
        .then((res) => {
          console.log(res);
          if (res.data?.message === "student exists") {
            setIdentifierPresent(true);

            // Check if fullName has been sent
            const fullName = res.data?.fullName;
            if (fullName) {
              setName(fullName);
              setShowName(true);
              console.log(fullName);
            }
          } else if (res.data?.message === "not found") {
            toast.error("No user found with the provided admission number");
          } else {
            toast.error("An unexpected error occurred. Please try again.");
          }
        })
        .catch((err) => {
          console.log("err----", err);
          if (err.message === "Network Error") {
            toast.error("Network error,Please connect to the internet");
            setErrorCounter((prev) => prev + 1);
            if (errorCounter >= 3) toast.info("Ran into an error, Contact admin please");
          }
        });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle logging in with password
  const HandeLogin = () => {
    if (credentials.password.trim() === "") {
      return toast.error("Enter password before proceeding!");
    }
    try {
      setLoading(true);
      axios
        .post("http://localhost:4500/api/auth/login", credentials)
        .then((res) => {
          console.log(res);
          if (res.data?.message === "student exists") {
            setIdentifierPresent(true);
          } else if (res.data?.message === "correct password") {
            toast.success("Login successful, welcome!");
          }
        })
        // axios error
        .catch((err) => {
          console.log(err.response);
          if (err.response?.data?.message === "wrong password") {
            toast.error("Incorrect password");
            // Start the wrong password timer
            setPasswordCounter((prev) => prev + 1);
            if (passwordCounter >= 3)
              toast.info("Consider resetting your password please");
          }
        });

      // Try catch err
    } catch (err: any) {
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  };
  // Handle updating the credentials object
  const HandleCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="h-screen w-full flex justify-center items-center  sm:p-6">
      {/* Login Card */}

      <div className="border relative max-w-2xl w-full p-6 py-24 rounded-xl">
        <div
          className="h-12 bg-gradient-to-l from-blue-600 to-blue-400 text-center px-4 left-1/2 -translate-x-1/2  flex py-2 rounded-t-xl absolute top-0 max-w-2xl w-full 
        "
        >
          <p className="text-sm absolute right-6 top-3.5 text-white font-medium">
            {APP_VERSION}{" "}
          </p>
        </div>

        {/* Choice tabs, student or faculty */}
        <Tabs
          defaultValue="student"
          className=" mx-auto mb-2  flex items-center "
        >
          <TabsList>
            <TabsTrigger
              disabled={identifierPresent}
              className="cursor-pointer"
              value="student"
              onClick={() => setTabValue("student")}
            >
              Student
            </TabsTrigger>
            <TabsTrigger
              disabled={identifierPresent}
              className="cursor-pointer"
              value="faculty"
              onClick={() => setTabValue("faculty")}
            >
              Faculty
            </TabsTrigger>
            <TabsTrigger
              disabled={identifierPresent}
              className="cursor-pointer"
              value="parent"
              onClick={() => setTabValue("parent")}
            >
              Parent
            </TabsTrigger>
          </TabsList>

          {/* Main card */}
          <Card className="w-full max-w-2xl shadow-lg  p-2 md:p-4 mx-auto">
            <CardTitle className="text-4xl sm:text-5xl flex items-center mx-auto font-bold text-blue-600 max-sm:-mb-2">
              Scholarly <sup className="text-xs ">TM</sup>
            </CardTitle>
            <div className="flex sm:justify-between gap-4">
              <div className="max-sm:hidden ">
                {/* Instrucations for students and faculty */}
                <div className="mt-2">
                  <p>
                    <span className="font-medium text-sm">Students:</span>{" "}
                    <span className="text-sm text-muted-foreground">
                      Use your admission number
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
                  <p>
                    <span className="font-medium text-sm">Parents :</span>{" "}
                    <span
                      className="text-sm text-muted-foreground
              "
                    >
                      Use your Phone number
                    </span>
                  </p>

                  <a
                    href="contact_support"
                    className="text-[14px] text-blue-600"
                  >
                    Contact support
                  </a>
                </div>

                {/* Padlock image */}
                <div className="mt-4">
                  <img src="/images/padlock.png" width={100} alt="padlock" />
                </div>
              </div>
              <div className="max-w-sm max-sm:mx-auto ">
                <img
                  src="/images/padlock.png"
                  width={100}
                  className="sm:hidden mx-auto mb-2"
                  alt="padlock"
                />  
                {/* INput form */}
                <CardContent className="space-y-4 max-sm:mt-4 max-sm:mb-4   border-1 shadow-lg  max-w-md   min-w-80 rounded-xl p-4">
                  <div>
                    <label htmlFor="identifier" className="text-sm font-medium">
                      <TabsContent value="student">
                        Admission number
                      </TabsContent>
                      <TabsContent value="faculty">Staff ID</TabsContent>
                      <TabsContent value="parent">Phone number</TabsContent>
                    </label>

                    {/* Student */}
                    <TabsContent value="student">
                      <Input
                        id="identifier"
                        name="identifier"
                        type="text"
                        readOnly={identifierPresent}
                        onChange={(e) => HandleCredentials(e)}
                        placeholder="i.e 1233"
                        className="mt-1"
                      />
                    </TabsContent>

                    {/* Faculty */}
                    <TabsContent value="faculty">
                      <Input
                        id="identifier"
                        name="identifier"
                        readOnly={identifierPresent}
                        onChange={(e) => HandleCredentials(e)}
                        type="text"
                        placeholder="i.e TDIOM2025"
                        className="mt-1"
                      />
                    </TabsContent>

                    {/* Parent */}
                    <TabsContent value="parent">
                      <Input
                        id="identifier"
                        name="identifier"
                        type="number"
                        readOnly={identifierPresent}
                        onChange={(e) => HandleCredentials(e)}
                        placeholder="i.e 071234567"
                        className="mt-1"
                      />
                    </TabsContent>

                    {/* Full name */}
                    {showName && (
                      <div className="mt-2">
                        <label htmlFor="name" className="text-sm  font-medium">
                          fullName
                        </label>
                        <Input
                          id="name"
                          readOnly
                          value={name}
                          placeholder={name}
                          className="mt-1 "
                        />
                      </div>
                    )}
                  </div>

                  {identifierPresent && (
                    <div>
                      <label htmlFor="password" className="text-sm font-medium">
                        Password
                      </label>
                      <Input
                        id="password"
                        type="password"
                        onChange={(e) => HandleCredentials(e)}
                        name="password"
                        placeholder="••••••••"
                        className="mt-1"
                      />
                    </div>
                  )}

                  {/* Login button */}
                  {identifierPresent ? (
                    <Button
                      onClick={HandeLogin}
                      disabled={credentials.password.length < 2}
                      className="w-full text-white  cursor-pointer bg-gradient-to-l from-blue-600 to-blue-400  max-w-xs mx-auto flex max-sm:w-60 sm:w-50"
                    >
                      Login
                    </Button>
                  ) : (
                    <Button
                      onClick={HandleAuthentication}
                      disabled={
                        loading || tabValue === "parent"
                          ? credentials.identifier.length < 10
                          : tabValue === "faculty"
                          ? credentials.identifier.length < 6
                          : credentials.identifier.length < 2
                      }
                      className="w-full text-white/90 hover:scale-102 active:scale-90  cursor-pointer bg-gradient-to-l from-blue-600 to-blue-400  max-w-xs mx-auto flex max-sm:w-60 sm:w-50"
                    >
                      {loading && <LoaderCircle className="animate-spin" />}
                      {loading ? "Authenticating..." : "Authenticate"}
                    </Button>
                  )}
                  <CardFooter className="flex flex-col justify-center text-sm text-muted-foreground">
                    <p>
                      Don’t have an account?{" "}
                      <a
                        href="signup"
                        className="text-primary/80 font-medium hover:underline"
                      >
                        Sign up
                      </a>
                    </p>
                    <a
                      href="forgot_password"
                      className="text-primary/80 text-[13px] hover:underline "
                    >
                      Forgot password?
                    </a>
                  </CardFooter>
                </CardContent>
              </div>
            </div>
          </Card>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
