'use client'
import React, { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedValues, setAnimatedValues] = useState(['0', '0', '0', '0']);
    const sectionRef = useRef(null);

    const stats = [
        { value: '10K+', label: 'Members Trained', rawValue: 10000 },
        { value: '50+', label: 'Expert Trainers', rawValue: 50 },
        { value: '100+', label: 'Fitness Programs', rawValue: 100 },
        { value: '25+', label: 'Branches Across India', rawValue: 25 },
    ];

    // Intersection Observer for scroll-triggered animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Animate counter values when visible
    useEffect(() => {
        if (isVisible) {
            stats.forEach((stat, index) => {
                let start = 0;
                const end = stat.rawValue;
                const duration = 2000;
                const increment = end / (duration / 16);

                const animate = () => {
                    start += increment;
                    if (start < end) {
                        setAnimatedValues(prev => {
                            const newValues = [...prev];
                            if (end >= 1000) {
                                newValues[index] = Math.floor(start / 1000) + 'K+';
                            } else {
                                newValues[index] = Math.floor(start) + '+';
                            }
                            return newValues;
                        });
                        requestAnimationFrame(animate);
                    } else {
                        setAnimatedValues(prev => {
                            const newValues = [...prev];
                            newValues[index] = stat.value;
                            return newValues;
                        });
                    }
                };

                setTimeout(() => animate(), index * 200);
            });
        }
    }, [isVisible]);

    return (
        <section
            ref={sectionRef}
            className="bg-white py-16 px-6 md:px-20 relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
            }}
        >
            {/* Floating background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-20 animate-float"></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-float-delayed"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-500 rounded-full opacity-40 animate-pulse"></div>
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6 border border-purple-100">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-purple-700">Our Success Story</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 mb-4">
                        Our Achievements
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
                        Transforming lives through fitness excellence across the nation
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`group bg-purple-50 hover:bg-purple-100 transition-all duration-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 border border-purple-100 hover:border-purple-200 ${isVisible
                                ? 'opacity-100 translate-y-0 scale-100'
                                : 'opacity-0 translate-y-12 scale-95'
                                }`}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                                background: 'linear-gradient(145deg, #f3f4f6, #e5e7eb)',
                                boxShadow: isVisible ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none'
                            }}
                        >
                            {/* Animated background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Glowing border effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300 -z-10"></div>

                            <div className="relative z-10">
                                {/* Icon placeholder with animation */}
                                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-6 h-6 bg-purple-600 rounded-full animate-pulse"></div>
                                </div>

                                <div className="text-4xl font-extrabold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors duration-300 font-mono">
                                    <span className="inline-block animate-fade-in-up">
                                        {animatedValues[index]}
                                    </span>
                                </div>

                                <p className="text-gray-700 font-medium group-hover:text-gray-800 transition-colors duration-300">
                                    {stat.label}
                                </p>

                                {/* Progress indicator */}
                                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1500 ease-out"
                                        style={{
                                            width: isVisible ? '100%' : '0%',
                                            transitionDelay: `${index * 150 + 800}ms`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom floating elements */}
                <div className={`flex justify-center items-center gap-3 mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1s' }}>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-gray-500 ml-3">Growing every day</span>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(-3deg); }
                }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                    animation-delay: 2s;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                }
                
                .group:hover {
                    transform: translateY(-12px) rotate(1deg) scale(1.02);
                }
            `}</style>
        </section>
    );
}