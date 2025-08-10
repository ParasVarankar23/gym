'use client'
import React from "react";

export default function CallToActionSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6 text-purple-900">Ready to Transform Your Life?</h2>
                <p className="text-xl mb-8 text-purple-700">Join thousands of members who have achieved their fitness goals with us</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                        Get Started Today
                    </button>
                    <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transform transition-all duration-300">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}