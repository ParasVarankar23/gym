'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-purple-100 text-gray-700 mt-12 shadow-inner">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-bold text-purple-600 mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        {[
                            { label: 'Home', href: '/' },
                            { label: 'About', href: '/about' },
                            { label: 'Contact', href: '/contact' },
                            { label: 'Locations', href: '/locations' },
                            { label: 'Membership', href: '/memberships' },
                            { label: 'Career with Us', href: '/career' }
                        ].map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className="hover:text-purple-500 transition">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Details */}
                <div>
                    <h2 className="text-xl font-bold text-purple-600 mb-4">Contact</h2>
                    <p className="leading-relaxed">
                        <strong>Gym Name:</strong> PhyscGym<br />
                        <strong>Phone:</strong> +91 7720979979<br />
                        <strong>Monday to Saturday:</strong> 6:00am to 10:00pm<br />
                        <strong>Sunday:</strong> Holiday
                    </p>
                </div>


                {/* Address */}
                <div>
                    <h2 className="text-xl font-bold text-purple-600 mb-4">Address</h2>
                    <p className="leading-relaxed">
                        2nd floor, Fusion Park, Opp. PCMC Garden,<br />
                        Ajmera Road, Morwadi,<br />
                        Pimpri, Pune - 411018.
                    </p>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-xl font-bold text-purple-600 mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-400 transition text-xl">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-400 transition text-xl">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-400 transition text-xl">
                            <FaTwitter />
                        </a>
                        <a href="https://wa.me" target="_blank" rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-400 transition text-xl">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center py-4 text-sm text-gray-500 border-t border-purple-100">
                © {new Date().getFullYear()} PhyscGym. All rights reserved.
            </div>
        </footer>
    );
}
