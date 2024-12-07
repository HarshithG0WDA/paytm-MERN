import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {Wallet} from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex justify-between shadow-md">
        <nav className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
                <Wallet className="size-12 ml-6"/>
                <div className="flex felx-col gap-4">
                    <span className="tracking-tighter text-3xl font-extrabold text-primary flex gap-2 items-center">
                        PayTM
                    </span>
                </div>
            </div>
        </nav>
        <div className="flex flex-col justify-center font-semibold text-xl mr-6">
            <Avatar>
                <AvatarImage 
                    className="h-16 w-16 rounded-full" 
                    src="https://github.com/shadcn.png" 
                    alt="@shadcn" 
                />
            </Avatar>
        </div>
        </div>
    )
}

export default Navbar;
