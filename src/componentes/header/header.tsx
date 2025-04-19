"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { PiHamburger, PiShoppingCartSimple } from "react-icons/pi";

import { useModalCartStore } from "@/store/modalCartStore";

export default function Header(){
    const { openModal } = useModalCartStore();

    return(
        <header className="flex items-center justify-between py-4 px-2 md:px-5 border-b-1 border-gray-300">
            <Link href={"/"}>
                <div className="flex items-center gap-3 bg-red-600 md:pr-5 rounded-full cursor-pointer">
                    <PiHamburger className="w-10 h-10 md:w-15 md:h-15 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                    <span className="hidden md:block text-sm md:text-3xl text-white font-bold text-shadow-lg">G<span className="text-amber-400">OO</span>D-F<span className="text-amber-400">OO</span>D</span>
                </div>
            </Link>

            <div className="flex overflow-hidden w-1/2 md:w-2/4 rounded-full">
                <input 
                    type="text"
                    placeholder="Search"
                    className="w-full rounded-l-full px-3 md:px-4 py-2 md:py-3 bg-gray-200 text-black focus:outline-none"
                />
                <button className="rounded-r-full px-3 md:px-4 cursor-pointer bg-gray-200 text-red-600 hover:text-white transition duration-100 ease-in-out"><FaSearch size={15} /></button>
            </div>

            <button className="rounded-full bg-red-600 hover:shadow-lg cursor-pointer shadow-gray-400 transition duration-300 ease-in-out" onClick={openModal}>
                <PiShoppingCartSimple
                className="w-10 h-10 md:w-15 md:h-15 text-amber-400 p-1 md:p-2"
                size={10}
                />
            </button>
        </header>
    )
}