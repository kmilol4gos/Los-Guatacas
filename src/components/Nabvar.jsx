import { useState } from "react";
import { IconX, IconMenu2 } from "../../public/Icons.jsx";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navbarMobile = [
        {
            name: "Inicio",
            href: "#inicio",
        },
        {
            name: "Menú",
            href: "#menu",
        },
        {
            name: "Promociones",
            href: "#promociones",
        },
        {
            name: "Sobre Nosotros",
            href: "#contacto",
        },
    ];

    const localName = "Los Guatacas";

    return (
        <>
            <header className="sticky top-0 z-10 bg-neutral-900 min-w-screen">
                <nav className="flex justify-between items-center px-4 mx-auto h-24 max-w-screen-xl">
                    <a href="#inicio" className="w-24">
                        <img src="/l2.png" alt="Los Guatacas" className="w-full h-full aspect-square" />
                    </a>

                    {/* Menú de escritorio */}
                    <ul className="hidden md:flex md:items-center md:gap-4 text-neutral-50 text-md font-bold">
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="/menu">Menú</a>
                        </li>
                        <li>
                            <a href="/about">Contacto</a>
                        </li>
                    </ul>

                    {/* Menú móvil */}
                    <div className="md:hidden z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none transition duration-300 ease-in-out p-2 text-neutral-50"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <IconX /> : <IconMenu2 />}
                        </button>
                        {isOpen && (
                            <ul className="absolute top-full left-0 w-full bg-neutral-900 shadow-md flex flex-col items-start p-4 gap-7">
                                {navbarMobile.map((item) => (
                                    <li key={item.name} className="w-full">
                                        <a
											href={item.href}
                                            className="block w-full text-left p-2 rounded text-neutral-50 font-bold text-xl"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
}
