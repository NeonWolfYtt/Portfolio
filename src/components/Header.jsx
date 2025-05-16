//components/Header.jsx
import { FaInstagram, FaTiktok, FaFileAlt } from "react-icons/fa";

export default function Header(){
    return(
// Sticky header CSS (Tailwind)
        <header className="sticky top-0 z-50 bg-[#0f0f0f] shadow-md text-pink-100 shadow-cyan-800/10 border-b border-cyan-700 pb-2">
            <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-cyan-400">Raivis Priede</h1>
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
            <nav className="space-x-6">
                <a
                    href="#portfolio"
                    className="hover:text-cyan-400 transition duration-200 relative group"
                >
                    <span className="group-hover:border-b-2 border-cyan-400 pb-0.5">Projects</span>
                </a>
                <a
                    href="#about"
                    className="hover:text-cyan-400 transition duration-200 relative group"
                >
                    <span className="group-hover:border-b-2 border-cyan-400 pb-0.5">About</span>
                </a>
                <a
                    href="#education"
                    className="hover:text-cyan-400 transition duration-200 relative group"
                >
                    <span className="group-hover:border-b-2 border-cyan-400 pb-0.5">Education</span>
                </a>
            </nav>
        </header>
    );
}