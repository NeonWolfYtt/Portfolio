//components/Header.jsx
import { FaInstagram, FaTiktok, FaFileAlt } from "react-icons/fa";

export default function Header(){
    return(
// Sticky header CSS (Tailwind)
        <header className="sticky top-0 z-50 bg-black shadow-md">
            <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-cyan-300">Raivis Priede</h1>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/neonwolfyt/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                        <FaInstagram size={24}/>
                    </a>
                    <a href="https://www.tiktok.com/@neonwolfytt" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                        <FaTiktok size={24}/>
                    </a>
                    <a href="/RaivisPriede_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                        <FaFileAlt size={24}/>
                    </a>
                </div>
            </div>
            <nav className="bg-gray-900 text-sm text-white mt-2 px-4 py-2">
                <ul className="flex gap-4 justify-center">
                <li><a href="#portfolio" className="hover:text-cyan-400">Portfolio</a></li>
                <li><a href="#about" className="hover:text-cyan-400">About</a></li>
                <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
                <li><a href="#education" className="hover:text-cyan-400">Education</a></li>
                <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}