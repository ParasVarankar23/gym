'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const gymImages = [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % gymImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0">
                {gymImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={image}
                            alt={`Gym ${index + 1}`}
                            fill
                            className="object-cover"
                            quality={80}
                            priority={index === 0}
                            unoptimized={true} // Temporary solution if you can't modify next.config.js
                        />
                    </div>
                ))}
            </div>

            {/* Rest of your component remains the same */}

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <div className="animate-[fadeInUp_1s_ease-out]">
                    <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                        Welcome to PhyscGym
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-100 mb-8 font-medium leading-relaxed animate-[fadeInUp_1s_ease-out_0.3s_both] drop-shadow-md">
                        Transform your body with our state-of-the-art facilities and expert trainers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_1s_ease-out_0.6s_both]">
                        <a
                            href="/membership"
                            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold rounded-lg shadow-lg hover:from-purple-500 hover:to-purple-300 transition-all duration-300 hover:shadow-xl"
                        >
                            Join Now
                        </a>
                        <a
                            href="/tours"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
                        >
                            Book a Tour
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}