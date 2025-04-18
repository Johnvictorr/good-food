"use client"

import { FaSearch } from "react-icons/fa";
import { PiHamburger, PiPizza, PiIceCream, PiBeerBottle } from "react-icons/pi";
import { BsCupStraw } from "react-icons/bs";
import { FaInstagram, FaFacebookF, FaXTwitter, FaTiktok } from 'react-icons/fa6';
import { CiHotdog, CiFries } from "react-icons/ci";
import { LuCupSoda, LuDonut, LuIceCreamBowl } from "react-icons/lu";
import { TbBottle } from "react-icons/tb";

import CardComida from "../componentes/card/cardComida";
import ListaComidas from "../componentes/listas/listaComidas";

import { foodItems, drinkItems, dessertItems } from "../data/food";

export default function Home () {
    /*
    ICONES:
        // Comidas
        BURGER: "PiHamburger",
        HOT_DOG: "CiHotdog",
        FRIES: "CiFries",
        PIZZA: "PiPizza",

        // Bebidas
        SODA: "BsCupStraw",
        BEER: "PiBeerBottle",
        BOTTLE: "TbBottle",

        // Sobremesas
        ICE_CREAM: "PiIceCream",
        SUNDAE: "LuIceCreamBowl",
        MILKSHAKE: "LuCupSoda",
        DONUT: "LuDonut"
    */




    return (
        <div className="min-h-screen flex flex-col">

            <header className="flex items-center justify-between py-4 px-3 md:px-8 border-b-1 border-gray-200">
                <div className="flex items-center gap-3 bg-red-600 md:pr-5 rounded-full">
                    <PiHamburger className="w-15 h-15 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                    <span className="hidden md:block text-sm md:text-3xl text-white font-bold text-shadow-lg">G<span className="text-amber-400">OO</span>D-F<span className="text-amber-400">OO</span>D</span>
                </div>

                <div className="flex-1 max-w-xl ml-4">
                    <div className="flex rounded-full overflow-hidden">
                        <input 
                            type="text"
                            placeholder="Search"
                            className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-200 text-black focus:outline-none"
                        />
                        <button className="px-3 md:px-4 cursor-pointer bg-red-600 text-gray-200 hover:text-red-600 hover:bg-gray-200 transition duration-100 ease-in-out">
                            <FaSearch size={20}/>
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 grid grid-cols-1 md:grid-cols-3 px-2 py-2 text-white">
                <ListaComidas name="Good-Food" data={foodItems}/>
                
                <ListaComidas name="Good-Drinks" data={drinkItems}/>
                
                <ListaComidas name="Good-Desserts" data={dessertItems}/>
            </main>

            <footer className="bg-gray-200 text-black w-full justify-between border-t-1 border-black">
                <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    
                    <div className="flex gap-4 text-xl">
                        <a href="#" aria-label="Instagram" className="hover:text-red-600 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" aria-label="Facebook" className="hover:text-red-600 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="X" className="hover:text-red-600 transition">
                            <FaXTwitter />
                        </a>
                        <a href="#" aria-label="TikTok" className="hover:text-red-600 transition">
                            <FaTiktok />
                        </a>
                    </div>

                    <div className="text-sm flex flex-wrap justify-center gap-5">
                        <a href="#" className="hover:underline">Termos de Serviço</a>
                        <a href="#" className="hover:underline">Política de Privacidade</a>
                        <a href="#" className="hover:underline">Contato</a>
                    </div>

                    <div className="text-xs text-center">
                        &copy; {new Date().getFullYear()} Good-Food. Todos os direitos reservados.
                    </div>
                </div>
            </footer>

        </div>
    )
}