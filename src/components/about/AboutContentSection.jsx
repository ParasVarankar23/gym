'use client'
import React from "react";

export default function AboutContentSection({ isVisible }) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <div
                    id="about-content"
                    data-animate
                    className={`space-y-8 transition-all duration-1000 ${isVisible['about-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="bg-gray-50 p-8 rounded-xl">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            PhySC Gym is one of the fastest growing fitness chains in India with 8
                            branches in a span of 2 years. We provide you the highest
                            quality fitness services such as advanced nutritional coaching,
                            personal training, group fitness classes, and corporate wellness
                            programs to encourage an active and healthy lifestyle.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We deliver the best possible fitness and nutrition solutions to our
                            customers' needs through fun, challenging, appropriate and effective
                            programs — thereby being recognized as a unique and respected fitness
                            resource for our community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}