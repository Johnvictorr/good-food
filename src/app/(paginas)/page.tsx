"use client"

import CardComida from "@/componentes/card/cardComida";
import ListaComidas from "@/componentes/listas/listaComidas";

import { foodItems, drinkItems, dessertItems } from "@/data/food";

export default function Home () {

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