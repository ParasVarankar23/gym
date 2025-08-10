'use client'
import React, { useState, useEffect } from 'react';

export default function PhyscBranches() {
    const branches = [
        'Nigdi', 'Bhosari', 'Chinchwad', 'Talegaon', 'Baramati',
        'Kharghar', 'Pimpri', 'Hadapsar', 'Warana Nagar', 'Satara',
        'Peth Vadgaon', 'Gadhinglaj', 'Ichalkaranji', 'Nipani', 'Kamothe (Navi Mumbai)'
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBranches, setFilteredBranches] = useState(branches);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay for better perceived performance
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const results = branches.filter(branch =>
            branch.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBranches(results);
    }, [searchTerm]);

    return (
        <section className="bg-white py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-10 animate-slide-down">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
                    <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                        PHYSIC GYM BRANCHES
                    </span>
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                    We have branches at the following locations:
                </p>

                {/* Search Input */}
                <div className="max-w-md mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search branches..."
                        className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <svg
                        className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>

            {/* Loading Skeleton */}
            {isLoading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {[...Array(15)].map((_, index) => (
                        <div
                            key={index}
                            className="h-16 bg-gray-100 rounded-xl animate-pulse"
                        />
                    ))}
                </div>
            ) : (
                <>
                    {/* Results Count */}
                    <div className="text-center text-gray-500 mb-6">
                        {filteredBranches.length} {filteredBranches.length === 1 ? 'branch' : 'branches'} found
                    </div>

                    {/* Branch Grid */}
                    {filteredBranches.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                            {filteredBranches.map((branch, index) => (
                                <div
                                    key={index}
                                    className="text-center text-purple-600 font-semibold text-lg bg-purple-50 py-4 px-2 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fade-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {branch}
                                    <div className="mt-2 text-xs text-purple-400 font-normal">
                                        <button
                                            className="hover:text-purple-700 transition-colors"
                                            onClick={() => {
                                                // In a real app, this would link to the specific branch page
                                                alert(`More info about ${branch} branch coming soon!`);
                                            }}
                                        >
                                            View details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10">
                            <div className="text-gray-500 text-lg mb-4">No branches found matching your search</div>
                            <button
                                className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                                onClick={() => setSearchTerm('')}
                            >
                                Clear search
                            </button>
                        </div>
                    )}
                </>
            )}

            {/* Contact CTA */}
            <div className="mt-16 text-center animate-fade-in">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Can't find your location?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    We're expanding! Contact us to suggest a new location or inquire about franchise opportunities.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-medium rounded-full hover:from-purple-700 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                    Contact Us
                </button>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes fadeUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes slideDown {
                    0% {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
                .animate-fade-up {
                    animation: fadeUp 0.6s ease-out forwards;
                }
                .animate-slide-down {
                    animation: slideDown 0.8s ease-out forwards;
                }
                .animate-fade-in {
                    animation: fadeIn 1s ease-out forwards;
                }
            `}</style>
        </section>
    );
}