import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="flex justify-center text-3xl font-bold">Sign In</CardTitle>
          <CardDescription className="flex justify-center text-xl font-medium">
            Enter your details to login.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1">
                <Label htmlFor="email" className="pt-3">Email</Label>
                <Input
                  id="email"
                  placeholder="johndoe@gmail.com"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Label htmlFor="password" className="pt-3">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="password@123"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col justify-center pt-2">
          <Button
            onClick={async () => {
              try {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signin",
                  {
                    username : userName,
                    password,
                  },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                const { token } = response.data;
                localStorage.setItem("token", token);
                navigate("/dashboard");
              } catch (err) {
                console.error(`Error in login: ${err}`);
              }
            }}
          >
            Sign-In
          </Button>
          <CardDescription className="pt-1">
            Don't have an account?{" "}
            <Link className="pointer underline pl-1 cursor-pointer" to="/signup">
              Sign Up
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}