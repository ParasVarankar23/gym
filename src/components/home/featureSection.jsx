'use client'
import React, { useState, useEffect, useRef } from 'react';

// Mock icons since react-icons isn't available
const FaDumbbell = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 12c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm10 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm-2 0c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7z" />
        <rect x="2" y="10" width="20" height="4" rx="2" />
        <circle cx="4" cy="12" r="3" />
        <circle cx="20" cy="12" r="3" />
    </svg>
);

const FaUsers = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7h-5c-.8 0-1.5.7-1.5 1.5v.5h2v6H8V9h2v-.5C10 7.7 9.3 7 8.5 7h-5c-.66 0-1.23.42-1.46 1.04L0 16h2.5v6h4v-6H8v6h4v-6h1.5v6H16zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5z" />
    </svg>
);

const FaHeartbeat = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.4 7.7c0-1.4-.5-2.8-1.5-3.8C18.9 2.9 17.5 2.4 16.1 2.4s-2.8.5-3.8 1.5L12 4.2l-.3-.3c-1-1-2.4-1.5-3.8-1.5S5.1 2.9 4.1 3.9C3.1 4.9 2.6 6.3 2.6 7.7s.5 2.8 1.5 3.8L12 19.4l7.9-7.9c1-1 1.5-2.4 1.5-3.8z" />
        <path d="M2 12h3l2-4 2 8 2-6 1 2h2" />
    </svg>
);

export default function FeatureSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const sectionRef = useRef(null);

    const features = [
        {
            icon: <FaDumbbell className="text-4xl text-purple-500 group-hover:text-purple-700 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12" />,
            title: 'State-of-the-Art Equipment',
            description: 'Train with the latest fitness technology and modern machines for optimal results.',
            bgColor: 'from-purple-50 to-purple-100',
            hoverColor: 'from-purple-100 to-purple-200',
            iconBg: 'bg-purple-100',
            stats: '200+ Machines'
        },
        {
            icon: <FaUsers className="text-4xl text-purple-500 group-hover:text-purple-700 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6" />,
            title: 'Certified Trainers',
            description: 'Get expert guidance from certified professionals to achieve your fitness goals.',
            bgColor: 'from-blue-50 to-blue-100',
            hoverColor: 'from-blue-100 to-blue-200',
            iconBg: 'bg-blue-100',
            stats: '50+ Experts'
        },
        {
            icon: <FaHeartbeat className="text-4xl text-purple-500 group-hover:text-purple-700 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6" />,
            title: 'Health & Wellness',
            description: 'Enjoy personalized plans focusing on overall health, nutrition, and well-being.',
            bgColor: 'from-green-50 to-green-100',
            hoverColor: 'from-green-100 to-green-200',
            iconBg: 'bg-green-100',
            stats: '100% Success'
        },
    ];

    // Intersection Observer for scroll-triggered animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-200 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-300 rounded-full animate-float opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                {/* Header Section */}
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 border border-purple-100">
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">Premium Features</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                            Our Key Features
                        </span>
                    </h2>
                    <p className="text-gray-600 mb-16 text-xl max-w-3xl mx-auto leading-relaxed">
                        Experience the best fitness journey with our world-class facilities and programs designed for your success.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white hover:bg-gradient-to-br ${feature.hoverColor} border border-gray-100 hover:border-purple-200 rounded-3xl p-8 transition-all duration-700 hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 ${isVisible
                                    ? 'opacity-100 translate-y-0 scale-100'
                                    : 'opacity-0 translate-y-12 scale-90'
                                }`}
                            style={{
                                transitionDelay: `${index * 200}ms`
                            }}
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon Container */}
                                <div className={`${feature.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:shadow-lg transition-all duration-500 ${activeCard === index ? 'animate-bounce' : ''
                                    }`}>
                                    {feature.icon}
                                </div>

                                {/* Stats Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-purple-600 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {feature.stats}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-all duration-500 mb-4">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed mb-6">
                                    {feature.description}
                                </p>

                                {/* Progress bar */}
                                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1000 ease-out ${activeCard === index ? 'animate-pulse' : ''
                                            }`}
                                        style={{
                                            width: isVisible ? '100%' : '0%',
                                            transitionDelay: `${index * 200 + 500}ms`
                                        }}
                                    ></div>
                                </div>

                                {/* Hover CTA */}
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 mt-6">
                                    <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className={`mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '800ms' }}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-spin"></div>
                            <span>Always Improving</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
                            <span>24/7 Support</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-green-500 rounded-full animate-bounce"></div>
                            <span>Premium Quality</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-10px) scale(1.1); }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}