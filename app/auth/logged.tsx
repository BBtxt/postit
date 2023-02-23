"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Logged(){
    return(
       <li className="flex gap-8 items-center">
           <button className="text-sm bg-gray-600 text-white py-2 px-6 rounded-xl disabled:opacity-25">Sign Out</button> 
       </li> 
    )
} 