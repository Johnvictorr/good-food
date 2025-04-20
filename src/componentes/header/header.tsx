"use client";

import Link from "next/link";
import { PiHamburger, PiShoppingCartSimple } from "react-icons/pi";

import { useModalCartStore } from "@/store/modalCartStore";
import SearchBar from "../inputs/searchBar";
import { useCartStore } from "@/store/cartStore";

import { foodItems, drinkItems, dessertItems } from "@/data/food"; // <- aqui

export default function Header() {
  const { openModal } = useModalCartStore();
  const totalQuantity = useCartStore((state) =>
    state.items.reduce((acc, item) => acc + item.quantity, 0)
  );
  

  const allItems = [...foodItems, ...drinkItems, ...dessertItems]; // <- unificando os dados

  return (
    <header className="flex items-center justify-between py-4 px-2 md:px-5">
      <Link href={"/"}>
        <div className="flex items-center gap-3 bg-red-600 md:pr-5 rounded-full hover:shadow-md shadow-gray-400 transition duration-300 ease-in-out cursor-pointer">
          <PiHamburger className="w-10 h-10 md:w-15 md:h-15 bg-red-600 text-amber-400 p-1 rounded-full" size={10} />
          <span className="hidden md:block text-sm md:text-3xl text-white font-bold text-shadow-lg">
            G<span className="text-amber-400">OO</span>D-F<span className="text-amber-400">OO</span>D
          </span>
        </div>
      </Link>

        <div className="w-1/2 md:w-2/4">
            <SearchBar data={allItems}  />
        </div>


        <button
          className="flex items-center gap-3 md:pr-5 rounded-full bg-red-600 hover:shadow-md cursor-pointer shadow-gray-400 transition duration-300 ease-in-out"
          onClick={openModal}
        >
          <div className="relative w-10 h-10 md:w-15 md:h-15 flex items-center justify-center">
            <PiShoppingCartSimple className="w-full h-full text-amber-400 p-1" />

            {totalQuantity > 0 && (
              <span className="absolute -right-1 inset-0 flex items-center justify-center text-xs font-bold text-white pointer-events-none">
                {totalQuantity}
              </span>
            )}
          </div>

          <span className="hidden md:block text-sm md:text-3xl text-white font-bold text-shadow-lg">
            C<span className="text-amber-400">A</span>RT
          </span>
        </button>
    </header>
  );
}