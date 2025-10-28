'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async ()=> {
        router.push('/sign-in')
    }

    const user = {
        name: "John",
        email: "john@malinator.com"
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex item-center gap-3 text-grey-4 hover:text-yellow">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">{user.name}</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col item-start">
                        <span className="text-base font-medium text-grey-400">
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuLabel>
                
            </DropdownMenuLabel>
            <DropdownMenuContent className="text-grey-400">
                <DropdownMenuLabel>
                    <div className="flex relative item-center gap-3 py-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">{user.name}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-base font-medium text-grey-400">
                                {user.name}
                            </span>
                            <span className="text-sm text-grey-500">{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-grey-600"/>
                <DropdownMenuItem onClick={handleSignOut} className="text-grey-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-color cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm-block bg-grey-600"/>
                <nav className="sm:hidden">
                    <NavItems />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown
