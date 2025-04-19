"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { PiHamburger } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";

import { useModalCartStore } from "@/store/modalCartStore";

export default function Header(){
    const { openModal } = useModalCartStore();

    return(
        <header className="flex items-center justify-between py-4 px-3 md:px-8 border-b-1 border-gray-200">
            <Link href={"/"}>
                <div className="flex items-center gap-3 bg-red-600 md:pr-5 rounded-full cursor-pointer">
                    <PiHamburger className="w-15 h-15 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                    <span className="hidden md:block text-sm md:text-3xl text-white font-bold text-shadow-lg">G<span className="text-amber-400">OO</span>D-F<span className="text-amber-400">OO</span>D</span>
                </div>
            </Link>

            <button onClick={openModal}>
                <TiShoppingCart
                className="w-15 h-15 bg-red-600 text-amber-400 p-1 rounded-full"
                size={10}
                />
            </button>
        </header>
    )
}