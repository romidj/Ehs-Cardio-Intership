import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { href: '/', label: 'Accueil' },
        { href: '#Services', label: 'Services' },
        { href: '/medecins', label: 'Nos médecins' },
    ];

    return (
        <header className="bg-gradient-to-r from-blue-100 to-red-100 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-1 flex justify-between items-center">
                <a href="#home" className="flex items-center">
                    <img src={logo} alt="Logo" className="h-16 w-auto" />
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-2 space-x-6">
                    <ul className="flex space-x-6">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.href}
                                    className="text-blue-950 font-medium hover:text-red-700 hover:font-medium transition-colors duration-200"
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="/rdv"
                        className="bg-red-700 border border-red-700 text-white  px-6 py-3 rounded-full shadow
                        hover:bg-transparent hover:text-red-700 hover:border hover:border-red-700 transition-colors duration-100"
                    >
                        Prendre Un Rendez-vous
                    </a>
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-900 rounded"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <aside className="md:hidden bg-white shadow-lg px-4 py-4">
                    <nav>
                        <ul className="flex flex-col space-y-3">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        onClick={toggleMenu}
                                        className="block text-gray-700 hover:text-blue-800 hover:font-bold py-2"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <a
                                href="#appointment"
                                onClick={toggleMenu}
                                className="block bg-red-700 hover:bg-red-600 text-white text-center px-4 py-2 rounded-full"
                            >
                                Prendre Rendez-vous
                            </a>
                        </div>
                    </nav>
                </aside>
            )}
        </header>
    );
};

export default Header;
