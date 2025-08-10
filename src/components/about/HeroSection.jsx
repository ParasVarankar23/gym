'use client'
import React, { useState, useEffect } from "react";
import { MapPin, Target, Users, Award, Dumbbell, Heart, Zap } from "lucide-react";

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const gymImages = [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % gymImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Background Image Carousel */}
            <div className="absolute inset-0">
                {gymImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{
                            backgroundImage: `url('${image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                ))}
            </div>

            {/* Simple Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Clean Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <div className="animate-[fadeInUp_1s_ease-out]">
                    <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white">
                        PhySC Gym
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-200 mb-8 font-light leading-relaxed animate-[fadeInUp_1s_ease-out_0.3s_both]">
                        Your fitness journey starts here — excellence in training, nutrition,
                        <br className="hidden sm:block" />
                        and community support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_1s_ease-out_0.6s_both]">
                        <button className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transform transition-all duration-300 shadow-lg">
                            Start Your Journey
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transform transition-all duration-300">
                            Find Locations
                        </button>
                    </div>
                </div>
            </div>

            {/* Simple Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}