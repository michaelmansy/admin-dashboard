import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.png";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Navbar(){
    return (
        <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
            <Link href="/">
                <Image src={logo} alt="Logo" width={40} height={50} />
            </Link>

            

            <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline" />}>
                    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    {/* AvatarFallBack is basically what text goes in if the avatar is not showing  */}
                    <AvatarFallback>BT</AvatarFallback>
                </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-lg">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/auth">Logout</Link>
                    </DropdownMenuItem>
                    </DropdownMenuGroup>
                    
                    <DropdownMenuGroup>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
                </DropdownMenu>
        </div>
    )
}