'use client';
import React from 'react';
import { FaUsers, FaAward, FaDumbbell } from 'react-icons/fa';

export default function AdditionalBenefits() {
    return (
        <section className="py-16 bg-purple-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">
                    All Members Enjoy
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                            <FaUsers className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-purple-900 mb-3">Community Support</h3>
                        <p className="text-purple-700">Join our vibrant fitness community with regular events and challenges</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                            <FaAward className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-purple-900 mb-3">Progress Tracking</h3>
                        <p className="text-purple-700">Regular body measurements to track your fitness journey</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                            <FaDumbbell className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-purple-900 mb-3">Equipment Orientation</h3>
                        <p className="text-purple-700">Free orientation session for all new members</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
