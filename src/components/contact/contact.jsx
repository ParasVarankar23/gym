'use client'
import React, { useState } from 'react';

export default function Contact() {
    const [agreed, setAgreed] = useState(false);

    const locations = [
        'Nigdi', 'Bhosari', 'Chinchwad', 'Talegaon', 'Baramati',
        'Kharghar', 'Pimpri', 'Hadapsar', 'Warana Nagar', 'Satara',
        'Peth Vadgaon', 'Gadhinglaj', 'Ichalkaranji', 'Nipani', 'Kamothe (Navi Mumbai)'
    ];

    return (
        <section className="bg-white py-16 px-6 sm:px-10 lg:px-20">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                        Contact Us
                    </span>
                </h2>
                <p className="text-gray-600 text-lg">
                    We’d love to hear from you. Fill out the form and our team will get back to you shortly.
                </p>
            </div>

            {/* Contact Form */}
            <form className="max-w-3xl mx-auto bg-purple-50 p-8 rounded-2xl shadow-md space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                            type="text"
                            className="w-full border border-purple-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full border border-purple-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input
                        type="text"
                        className="w-full border border-purple-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Subject"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Select Gym Location</label>
                    <select
                        className="w-full border border-purple-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    >
                        <option value="">-- Select Location --</option>
                        {locations.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                        rows="5"
                        className="w-full border border-purple-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                        placeholder="Write your message here..."
                        required
                    ></textarea>
                </div>

                <div className="flex items-start gap-2">
                    <input
                        type="checkbox"
                        className="mt-1 text-purple-600 focus:ring-purple-500"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                        required
                    />
                    <label className="text-gray-700 text-sm">
                        I agree to the <span className="text-purple-600 underline cursor-pointer">Terms and Conditions</span>.
                    </label>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="inline-block bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300"
                    >
                        Send Message
                    </button>
                </div>
            </form>

            {/* Address Section */}
            <div className="max-w-3xl mx-auto mt-16 text-center text-gray-700 space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900">Visit or Contact Us</h3>
                <p>PhyscGym Head Office, 2nd Floor, Wellness Plaza, Pune, Maharashtra, 411001</p>
                <p>Phone: <a href="tel:+918888888888" className="text-purple-600 font-medium">+91 88888 88888</a></p>
                <p>Email: <a href="mailto:info@physcgym.com" className="text-purple-600 font-medium">info@physcgym.com</a></p>
            </div>
        </section>
    );
}
