import { FaSearch } from "react-icons/fa";
import { PiHamburger } from "react-icons/pi";


export default function Header(){

    return(
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
    )
}