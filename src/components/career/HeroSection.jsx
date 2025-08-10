'use client';
import React from 'react';

export default function CareerPage() {
    const jobs = [
        {
            title: "Fitness Trainer",
            location: "Pune, India",
            type: "Full-Time",
            description: "Lead fitness classes, provide personal training, and guide members on achieving their health goals."
        },
        {
            title: "Front Desk Executive",
            location: "Mumbai, India",
            type: "Full-Time",
            description: "Manage front desk operations, greet members, handle inquiries, and maintain smooth workflow."
        },
        {
            title: "Nutritionist",
            location: "Bangalore, India",
            type: "Part-Time",
            description: "Provide customized diet plans and nutrition guidance to help clients meet their fitness targets."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')` }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Career With Us</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Join our passionate team and help us transform lives through fitness, nutrition, and community support.
                    </p>
                </div>
            </section>

            {/* About Careers */}
            <section className="py-16 max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">Why Work With Us?</h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    At PhySC Gym, we believe in creating an environment where our team members grow professionally and personally.
                    From ongoing training programs to performance-based incentives, we ensure you have everything you need to excel.
                    Whether you're a trainer, nutritionist, or part of our admin staff, you'll be part of a close-knit family that values dedication, creativity, and passion.
                </p>
            </section>

            {/* Job Listings */}
            <section className="pb-16 max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Open Positions</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {jobs.map((job, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-purple-800">{job.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">{job.location} • {job.type}</p>
                            <p className="text-gray-700 mb-4">{job.description}</p>
                            <button className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
