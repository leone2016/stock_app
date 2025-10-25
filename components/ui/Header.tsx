import React from 'react'
import Image from "next/image";
import Link from "next/link";
import NavItems from "@/components/ui/NavItems";
import UserDropDown from "@/components/ui/UserDropDown";

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link rel="stylesheet" href="/">
                    <Image alt="Signalist logo" src="/assets/icons/logo.svg"
                           width={140}
                           height={32}
                           className="h-8 w-auto cursor-pointer" />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems />
                </nav>
                <UserDropDown/>
            </div>
        </header>
    )
}
export default Header
