'use client'
import React from "react";
import { Dumbbell, Heart, Users, Zap } from "lucide-react";

export default function FeaturesSection({ isVisible }) {
    const features = [
        {
            icon: <Dumbbell className="w-8 h-8" />,
            title: "Advanced Equipment",
            description: "State-of-the-art fitness equipment for all your training needs"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Personal Training",
            description: "Certified trainers to guide your fitness journey"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Group Classes",
            description: "Fun and motivating group fitness sessions"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Nutrition Coaching",
            description: "Expert nutritional guidance for optimal results"
        }
    ];

    return (
        <section className="py-20 bg-purple-50">
            <div className="max-w-6xl mx-auto px-6">
                <div
                    id="features"
                    data-animate
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-4xl font-bold text-purple-900 mb-4">Why Choose PhySC?</h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            data-animate
                            className={`group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-purple-100 ${isVisible.features ? `opacity-100 translate-y-0` : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-purple-900 mb-3">{feature.title}</h3>
                            <p className="text-purple-700 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}