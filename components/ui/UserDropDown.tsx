'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {useRouter} from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Button} from "@/components/ui/button";
import NavItems from "@/components/ui/NavItems";

const UserDropDown = () => {
    const router = useRouter();
    const handleSignOut = () => {
        // Add your sign-out logic here (e.g., clear auth tokens, call sign-out API)
        // After signing out, redirect to the homepage
        router.push('/sign-in');
    }

    const user = { name: 'Leo', email: 'contact@gmail.com'}

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-sm font-medium text-gray-500"> {user.name}</span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400" align="start">
                <DropdownMenuLabel>
                    <div className="flex relative items-center gap-3 py-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-base font-medium text-gray-400"> {user.email}</span>
                            <span className="text-sm text-gray-500"> {user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="sm:hidden "/>

                <nav className="sm:hidden">
                    <NavItems />
                </nav>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropDown
