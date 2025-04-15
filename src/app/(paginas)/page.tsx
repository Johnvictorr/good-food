import { FaSearch } from "react-icons/fa";
import { PiHamburger } from "react-icons/pi";

export default function Home () {
    return (
        <div className="min-h-screen">

            <header className="flex items-center justify-between py-4 px-1 md:px-10 bg-red-600">

                <div className="flex items-center gap-3">
                    <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                    <span className="text-sm md:text-3xl font-bold">G<span className="text-green-500">O</span><span className="text-orange-800">O</span>D-F<span className="text-green-500">O</span><span className="text-amber-400">O</span>D</span>
                </div>

                <div className="flex-1 max-w-xl mx-8">
                    <div className="flex rounded-full overflow-hidden">
                        <input 
                            type="text"
                            className="w-full px-2 md:px-4 py-1.5 md:py-2.5 bg-white text-black focus:outline-none"
                        />
                        <button className="px-3 md:px-4 cursor-pointer bg-white hover:bg-red-600 text-red-600 hover:text-white transition duration-100 ease-in-out">
                            <FaSearch size={20}/>
                        </button>
                    </div>
                </div>

                <div className="text-sm md:text-lg bg-red-700 rounded-full px-5 py-2">
                    <p className="font-bold text-green-400">Open <span className="text-white">12:00 - 23:00</span></p>
                </div>

            </header>

            <section className="py-4 w-30 ml-auto mr-auto">
                <p className="bg-red-600 p-1 w-auto text-center rounded-full text-2xl font-bold">MENU</p>
            </section>

            <main className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2 text-black">
                <section className="border-3 border-black rounded-xl p-4">
                    <h2 className="text-2xl font-bold mb-2 text-center">Snacks</h2>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                    </div>
                </section>
                
                <section className="border-3 border-black rounded-xl p-4">
                    <h2 className="text-2xl font-bold mb-2 text-center">Drinks</h2>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                    </div>
                </section>
                
                <section className="border-3 border-black rounded-xl p-4">
                    <h2 className="text-2xl font-bold mb-2 text-center">Desserts</h2>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                        <div className="text-white text-sm md:text-md justify-between items-center gap-10 flex bg-black p-4 rounded-xl">
                            <PiHamburger className="w-15 h-15 bg-red-700 text-amber-400 p-1 rounded-full" size={10}/>
                            <p>Burger: Big-Food</p>
                            <p>R$ 23,90</p>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}