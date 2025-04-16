import { FaSearch } from "react-icons/fa";
import { PiHamburger, PiPizza, PiIceCream, PiBeerBottle } from "react-icons/pi";
import { BsCupStraw } from "react-icons/bs";
import { FaInstagram, FaFacebookF, FaXTwitter, FaTiktok } from 'react-icons/fa6';
import { CiHotdog, CiFries } from "react-icons/ci";
import { LuCupSoda, LuDonut, LuIceCreamBowl } from "react-icons/lu";
import { TbBottle } from "react-icons/tb";

export default function Home () {
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
                <section className="rounded-xl p-4">
                    <h2 className="flex items-center bg-red-600 w-auto mb-4 p-2 justify-center rounded-t-full text-2xl font-bold transition-transform duration-300 ease-in-out hover:-translate-y-2 text-shadow-lg">Good-Foods</h2>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <PiHamburger className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Cheese-Burguer</p>
                            <p>R$ 15,90</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <PiHamburger className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Cheese-Bacon</p>
                            <p>R$ 15,90</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <PiPizza className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Pepperoni Pizza</p>
                            <p>R$ 23,90</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <CiHotdog className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Hot Dog</p>
                            <p>R$ 10,90</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <CiFries className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Fries</p>
                            <p>R$ 9,90</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <CiFries className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Big Fries</p>
                            <p>R$ 12,90</p>
                        </div>
                    </div>
                </section>
                
                <section className="rounded-xl p-4">
                    <h2 className="flex items-center bg-red-600 w-auto mb-4 p-2 justify-center rounded-t-full text-2xl font-bold transition-transform duration-300 ease-in-out hover:-translate-y-2 text-shadow-lg">Good-Drinks</h2>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <PiBeerBottle className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Good-Soda</p>
                            <p>R$ 5,99</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <PiBeerBottle className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Good-Cola</p>
                            <p>R$ 5,99</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <PiBeerBottle className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Good-Fanta</p>
                            <p>R$ 5,99</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <BsCupStraw className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Grape Juice</p>
                            <p>R$ 3,90</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <TbBottle className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Water</p>
                            <p>R$ 7,29</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <TbBottle className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Sparkling Water</p>
                            <p>R$ 8,29</p>
                        </div>
                    </div>
                </section>
                
                <section className="rounded-xl p-4">
                    <h2 className="flex items-center bg-red-600 w-auto mb-4 p-2 justify-center rounded-t-full text-2xl font-bold transition-transform duration-300 ease-in-out hover:-translate-y-2 text-shadow-lg">Good-Desserts</h2>

                    <div className="grid grid-cols-1 gap-2">
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <PiIceCream className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Ice Cream</p>
                            <p>R$ 6,99</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <LuIceCreamBowl className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Sundae</p>
                            <p>R$ 19,99</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <LuCupSoda className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Chocolate shake</p>
                            <p>R$ 19,99</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <LuCupSoda className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Vanilla shake</p>
                            <p>R$ 9,99</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <LuDonut className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Vanilla Donut</p>
                            <p>R$ 11,59</p>
                        </div>
                        <div className="text-black text-xs md:text-lg justify-between items-center gap-10 flex bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                            <LuDonut className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Strawberry Donut</p>
                            <p>R$ 11,59</p>
                        </div>
                    </div>
                </section>
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