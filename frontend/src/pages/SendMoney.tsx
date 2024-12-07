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
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"



export default function SendMoney() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount,setAmount] = useState(0)

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="flex justify-center text-3xl font-bold">Send Money</CardTitle>
          <CardDescription className="flex justify-center text-xl font-medium">Enter the details of the reciever</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center">
                    <span className="text-2xl text-white">{name?.[0]?.toUpperCase() ?? ""}</span>
                </div>
                <h3 className="text-2xl font-semibold">{name}</h3>
              </div>
              <div className="flex flex-col space-y-1 gap-1 ">
                <Label htmlFor="name" className="text-xl font-medium">Amount(in Rs)</Label>
                <Input id="name" placeholder="Enter the Amount" onChange={(e) => {
                    setAmount(parseInt(e.target.value))
                }} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col justify-center pt-2">
          <Button onClick={()=> {
            axios.post('http://localhost:3000/api/v1/account/transfer',{
                to : id,
                amount
            },{
                headers : {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
          }}>Send Money</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
