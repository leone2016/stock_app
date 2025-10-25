'use client' // This is a client component, important for usePathname hook
import React from 'react'
import {CONSTANTS} from "@/lib/contants";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavItems = () => {
    const pathname = usePathname();
    const isActive = (path: string) => {
       if(path === '/') return pathname === '/';

       return pathname.startsWith(path);

    }
    return (
       <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
           {CONSTANTS.map(({href, label}) => (
               <li key={href}>
                    <Link href={label}
                          className={`hover: text-yellow-500 transition-colors 
                          ${isActive(href) ? 'text-gray-100': '' }  `}>
                        {label}
                    </Link>
               </li>
           ))}
       </ul>
    )
}
export default NavItems
 