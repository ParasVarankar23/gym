'use client'
import React from "react";
import { Target } from "lucide-react";

export default function MissionSection({ isVisible }) {
    return (
        <section className="py-20 bg-white text-purple-700">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div
                    id="mission"
                    data-animate
                    className={`transition-all duration-1000 ${isVisible.mission
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                >
                    <Target className="w-16 h-16 mx-auto mb-6 text-purple-700" />
                    <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                    <blockquote className="text-2xl font-light italic leading-relaxed text-purple-600">
                        "To have a positive impact on our client's lives by creating
                        a memorable fitness experience."
                    </blockquote>
                </div>
            </div>
        </section>
    );
}