"use client"

import { FaSearch } from "react-icons/fa";
import { PiHamburger, PiPizza, PiIceCream, PiBeerBottle } from "react-icons/pi";
import { BsCupStraw } from "react-icons/bs";
import { FaInstagram, FaFacebookF, FaXTwitter, FaTiktok } from 'react-icons/fa6';
import { CiHotdog, CiFries } from "react-icons/ci";
import { LuCupSoda, LuDonut, LuIceCreamBowl } from "react-icons/lu";
import { TbBottle } from "react-icons/tb";

import CardComida from "@/componentes/card/cardComida";
import ListaComidas from "@/componentes/listas/listaComidas";

import { foodItems, drinkItems, dessertItems } from "@/data/food";

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
        <div className="flex flex-col">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 px-2 py-2 text-white">
                <ListaComidas name="Good-Food" data={foodItems}/>
                
                <ListaComidas name="Good-Drinks" data={drinkItems}/>
                
                <ListaComidas name="Good-Desserts" data={dessertItems}/>
            </div>
        </div>
    )
}