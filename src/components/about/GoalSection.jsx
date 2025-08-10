'use client'
import React from "react";

export default function GoalsSection({ isVisible }) {
    return (
        <section className="py-20 bg-white text-purple-700">
            <div className="max-w-5xl mx-auto px-6">
                <div
                    id="goals"
                    data-animate
                    className={`space-y-12 transition-all duration-1000 ${isVisible.goals
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-6">Our Goals & Values</h2>
                        <div className="w-24 h-1 bg-purple-700 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-purple-50 p-8 rounded-xl border border-purple-200">
                            <h3 className="text-2xl font-bold mb-4">Our AIM</h3>
                            <p className="text-purple-600 leading-relaxed">
                                Our aim is to provide a well-managed gym with the best services at
                                affordable prices to the masses and to build a healthy India.
                            </p>
                        </div>

                        <div className="bg-purple-50 p-8 rounded-xl border border-purple-200">
                            <h3 className="text-2xl font-bold mb-4">Why Join Us?</h3>
                            <p className="text-purple-600 leading-relaxed">
                                We are for everyone — irrespective of your fitness goal, age, or
                                gender. We provide first-class services at economical prices without
                                compromising on quality.
                            </p>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-8 rounded-xl border border-purple-200">
                        <p className="text-lg text-purple-600 leading-relaxed text-center">
                            Despite our economical prices, we provide the best range of equipment
                            and infrastructure. We never compromise on the services or
                            infrastructure, as these are essential to ensure quality deliverables
                            to our clients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}