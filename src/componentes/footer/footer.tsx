import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {

    return(
        <footer className="bg-gray-200 text-black w-full justify-between">
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
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>

                <div className="text-xs text-center">
                    &copy; {new Date().getFullYear()} Good-Food. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}