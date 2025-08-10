'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/locations', label: 'Locations' },
        { href: '/memberships', label: 'Membership' },
        { href: '/career', label: 'Career with Us' },
    ];

    return (
        <nav className="w-full bg-white/95 backdrop-blur-md shadow-md border-b border-purple-100 sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="group flex-shrink-0">
                        <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent hover:from-purple-500 hover:to-purple-300 transition-all duration-300">
                            PhyscGym
                        </div>
                        <div className="h-1 w-0 bg-gradient-to-r from-purple-600 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <ul className="flex items-center space-x-1">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="relative px-4 py-2 text-gray-700 font-medium rounded-xl hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 group"
                                    >
                                        {item.label}
                                        <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {/* Join Now Button - only on desktop */}
                        <Link
                            href="/memberships"
                            className="ml-4 block text-center bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
                        >
                            Join Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            className="w-10 h-10 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
                        >
                            <span className={`block w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    id="mobile-menu"
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen pb-4' : 'max-h-0'}`}
                >
                    <ul className="flex flex-col space-y-2 pt-4 border-t border-purple-100">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        {/* Join Now Button inside mobile menu */}
                        <li className="pt-2">
                            <Link
                                href="/memberships"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-center bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
                            >
                                Join Now
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
