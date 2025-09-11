import { Moon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="p-4 flex items-center justify-between">
            collapseButton
            <div className="flex items-center gap-4">
                <Link href={"/"}>Dashboard</Link>
                <Moon />
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    )
}

export default Navbar