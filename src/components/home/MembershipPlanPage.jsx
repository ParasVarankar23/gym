'use client'
import React, { useState, useEffect, useRef } from 'react';

// Mock icons since react-icons isn't available
const FaUser = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

const FaCrown = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm2.7-2h8.6l.9-5.4-2.1 1.4L12 8l-3.1 2-2.1-1.4L7.7 14z" />
    </svg>
);

const FaShieldAlt = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
    </svg>
);

export default function MembershipPlanPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(1); // Premium is default selected
    const [animatedPrices, setAnimatedPrices] = useState([0, 0, 0]);
    const sectionRef = useRef(null);

    const plans = [
        {
            id: 0,
            icon: FaUser,
            name: 'Basic Plan',
            description: 'Access to gym during working hours, cardio zone & locker facilities.',
            price: 999,
            originalPrice: 1299,
            features: [
                'Gym access during working hours',
                'Cardio zone access',
                'Locker facilities',
                'Basic equipment usage',
                'Community support'
            ],
            bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
            iconColor: 'text-blue-500',
            accentColor: 'blue',
            popular: false
        },
        {
            id: 1,
            icon: FaCrown,
            name: 'Premium Plan',
            description: 'Includes personal trainer, diet plan & unlimited access to all zones.',
            price: 1999,
            originalPrice: 2499,
            features: [
                'Everything in Basic Plan',
                'Personal trainer sessions',
                'Custom diet plan',
                'Unlimited zone access',
                'Group classes included',
                'Priority support'
            ],
            bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
            iconColor: 'text-purple-500',
            accentColor: 'purple',
            popular: true
        },
        {
            id: 2,
            icon: FaShieldAlt,
            name: 'Pro Plan',
            description: 'Ideal for athletes: full-body analysis, custom workouts, and rehab care.',
            price: 2999,
            originalPrice: 3499,
            features: [
                'Everything in Premium Plan',
                'Full-body analysis',
                'Custom workout programs',
                'Rehabilitation care',
                'Nutrition consultation',
                'VIP locker access',
                '24/7 gym access'
            ],
            bgColor: 'bg-gradient-to-br from-gold-50 to-yellow-100',
            iconColor: 'text-yellow-600',
            accentColor: 'yellow',
            popular: false
        }
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

    // Animate prices when visible
    useEffect(() => {
        if (isVisible) {
            plans.forEach((plan, index) => {
                let start = 0;
                const end = plan.price;
                const duration = 1500;
                const increment = end / (duration / 16);

                const animate = () => {
                    start += increment;
                    if (start < end) {
                        setAnimatedPrices(prev => {
                            const newPrices = [...prev];
                            newPrices[index] = Math.floor(start);
                            return newPrices;
                        });
                        requestAnimationFrame(animate);
                    } else {
                        setAnimatedPrices(prev => {
                            const newPrices = [...prev];
                            newPrices[index] = end;
                            return newPrices;
                        });
                    }
                };

                setTimeout(() => animate(), index * 200);
            });
        }
    }, [isVisible]);

    const getAccentClasses = (color) => {
        const colors = {
            blue: {
                border: 'border-blue-200',
                hoverBorder: 'hover:border-blue-300',
                button: 'bg-blue-600 hover:bg-blue-700',
                text: 'text-blue-600',
                ring: 'ring-blue-200'
            },
            purple: {
                border: 'border-purple-300',
                hoverBorder: 'hover:border-purple-400',
                button: 'bg-purple-600 hover:bg-purple-700',
                text: 'text-purple-600',
                ring: 'ring-purple-200'
            },
            yellow: {
                border: 'border-yellow-300',
                hoverBorder: 'hover:border-yellow-400',
                button: 'bg-yellow-600 hover:bg-yellow-700',
                text: 'text-yellow-600',
                ring: 'ring-yellow-200'
            }
        };
        return colors[color];
    };

    return (
        <div
            ref={sectionRef}
            className="bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-400 rounded-full animate-float opacity-30"
                        style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${4 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 border border-purple-100">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-gray-700">Flexible Pricing</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Choose Your
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400"> Membership </span>
                        Plan
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Find the perfect plan that fits your fitness journey and budget
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => {
                        const IconComponent = plan.icon;
                        const accentClasses = getAccentClasses(plan.accentColor);
                        const isSelected = selectedPlan === plan.id;
                        const isPremium = plan.popular;

                        return (
                            <div
                                key={index}
                                className={`relative ${plan.bgColor} border-2 ${accentClasses.border} ${accentClasses.hoverBorder} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 p-8 text-center group cursor-pointer transform hover:-translate-y-4 hover:scale-105 ${isPremium ? 'ring-4 ring-purple-200 scale-105' : ''
                                    } ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-12'
                                    }`}
                                style={{
                                    transitionDelay: `${index * 200}ms`
                                }}
                                onClick={() => setSelectedPlan(plan.id)}
                            >
                                {/* Popular Badge */}
                                {isPremium && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                                            🔥 Most Popular
                                        </div>
                                    </div>
                                )}

                                {/* Selection indicator */}
                                {isSelected && (
                                    <div className="absolute top-4 right-4">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                )}

                                {/* Glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-${plan.accentColor}-400/20 to-${plan.accentColor}-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`w-24 h-24 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${isSelected ? 'animate-bounce' : ''
                                        }`}>
                                        <IconComponent className={`text-5xl ${plan.iconColor} group-hover:text-${plan.accentColor}-700`} />
                                    </div>

                                    {/* Plan Name */}
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-800 transition-colors duration-300">
                                        {plan.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {plan.description}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="flex items-center justify-center gap-3 mb-2">
                                            <span className="text-lg text-gray-400 line-through">
                                                ₹{plan.originalPrice.toLocaleString()}
                                            </span>
                                            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                                                SAVE ₹{(plan.originalPrice - plan.price).toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <span className="text-4xl font-bold text-gray-800 font-mono">
                                                ₹{animatedPrices[index] || plan.price}
                                            </span>
                                            <span className="text-gray-600 ml-2">/month</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="text-left mb-8">
                                        <h4 className="font-semibold text-gray-800 mb-3">What's included:</h4>
                                        <ul className="space-y-2">
                                            {plan.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-center text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Button */}
                                    <button className={`w-full ${accentClasses.button} text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${isSelected ? 'ring-4 ring-green-200' : ''
                                        }`}>
                                        {isSelected ? '✓ Selected' : 'Choose Plan'}
                                    </button>

                                    {/* Money back guarantee */}
                                    <p className="text-xs text-gray-500 mt-4 flex items-center justify-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        30-day money back guarantee
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '800ms' }}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h3>
                        <p className="text-gray-600 mb-6">Our fitness experts are here to help you choose the perfect plan</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                                Talk to an Expert
                            </button>
                            <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                                Schedule a Tour
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(10deg); }
                }
                
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}