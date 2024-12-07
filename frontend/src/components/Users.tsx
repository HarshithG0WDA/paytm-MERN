import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface UserType {
    firstName: string;
    lastName: string;
    _id: number;
}

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])
    return (
        <>
            <div className="font-bold mt-6 text-lg pl-6 text-gray-600">
                Users
            </div>
            <div className="my-2 pl-4 pr-4">
                <Input type="text" placeholder="Search users..." onChange={(e)=>{
                    setFilter(e.target.value)
                }}></Input>
            </div>
            <div>
                {users.map(user => (
                    <User users={user} />
                ))}
            </div>
        </>
    );
}

function User({users}: {users: UserType}){
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex p-4">
            <div className="rounded-full h-12 w-12 bg-slate-900 flex justify-between">
                <div className="flex flex-col justify-center items-center h-full text-white text-xl p-5">
                    {users.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full p-2">
                <div>
                    {users.firstName} {users.lastName}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-full p-6">
            <Button onClick={() => {
                navigate(`/send?id=${users._id}&name=${users.firstName}`);
            }}>Send Money</Button>
        </div>

    </div>
}