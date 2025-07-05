import { useState } from "react"

function HeaderSection({name, navLinks}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    return(
        <header className="sticky top-0 bg-[#064E3B] h-fit">
            <nav className="flex justify-between items-center max-w-[960px] sm:mx-auto mx-4 sm:py-4 py-2 text-white">
                <div className="sm:text-[32px] text-2xl font-medium">{name}</div>
                <div className="hidden sm:flex flex-row gap-8 w-fit h-fit">
                    {navLinks.map((link, index) =>(
                        <a key={index} href={link.href} className="sm:text-base text-sm font-normal">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="relative">
                <button onClick={toggleMenu} className="flex flex-row sm:hidden items-center gap-2" id="menu-toggle">
                    <span className="sm:text-base text-sm font-normal">Menu</span>
                    <div className="flex flex-col gap-1">
                        <div className="w-4 rounded-full h-0.5 bg-white"></div>
                        <div className="w-4 rounded-full h-0.5 bg-white"></div>
                        <div className="w-4 rounded-full h-0.5 bg-white"></div>
                    </div>
                </button>

                {isMenuOpen && (
                <div className="absolute right-0 mt-2 z-50 rounded-lg shadow-lg p-4 flex flex-col gap-2 w-[160px] bg-[#064E3B] transition-all duration-300 ease-in-out">
                    {navLinks.map((link, index) => (
                                <a key={index} href={link.href} className="sm:text-base text-sm text-white font-normal hover:underline">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default HeaderSection