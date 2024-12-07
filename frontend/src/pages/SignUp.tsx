import { Link } from "react-router-dom"
import axios from "axios"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"



export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="flex justify-center text-3xl font-bold">Sign Up</CardTitle>
          <CardDescription className="flex justify-center text-xl font-medium">Enter your details</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">First Name</Label>
                <Input id="name" placeholder="John" onChange={(e) => {
                    setFirstName(e.target.value);
                }}/>
                <Label htmlFor="name" className="pt-3">Last Name</Label>
                <Input id="name" placeholder="Doe" onChange={(e) => {
                    setLastName(e.target.value);
                }}/>
                <Label htmlFor="name"className="pt-3">Email</Label>
                <Input id="name" placeholder="johndoe@gmail.com" onChange={(e) =>{
                    setUsername(e.target.value)
                }} />
                <Label htmlFor="name" className="pt-3" >password</Label>
                <Input id="name" placeholder="password@123" onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col justify-center pt-2">
          <Button onClick={async () => {
                try {
                const response = await axios.post(
                    "http://localhost:3000/api/v1/user/signup",
                    {
                    username,
                    password,
                    firstName,
                    lastName,
                    },
                    {
                    headers: {
                        "Content-Type": "application/json", // Set the Content-Type header
                    },
                    }
                );
                localStorage.setItem("token", response.data.token);
                alert("Signup successful!");
                } catch (error) {
                console.error("Signup error:", error);
                alert("Signup failed. Please try again.");
                }
            }}
          >Sign-Up</Button>
          <CardDescription className="pt-1">Have an account? 
            <Link className="pointer underline pl-1 cursor-pointer" to="/signin">Sign In</Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}
