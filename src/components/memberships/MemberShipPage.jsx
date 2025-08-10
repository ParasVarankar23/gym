'use client';
import React from 'react';
import { FaClock } from 'react-icons/fa';
import FeatureIcon from './FeatureIcon';

export default function MembershipPage() {
  const membershipTypes = [
    {
      name: "PEAK HOURS",
      timing: "6:00AM to 10:00AM & 6:00PM to 10:00PM",
      features: [
        "Weight Training, Cardio, Group Activities",
        "Yoga, Aerobics, Abs, Spinning, Circuit Training",
        "Tabata, Hips & Thighs, Stretching batches",
        "Changing room, Steam, Shower, Lockers",
        "5 General trainers available",
        "Bi-weekly body measurements (BMI, BMR, Fat %)"
      ],
      price: "₹2,999/month",
      popular: true
    },
    {
      name: "OFF PEAK HOURS",
      timing: "11:00AM to 05:00PM",
      features: [
        "Weight Training, Cardio, Group Activities",
        "Yoga, Aerobics, Abs, Spinning, Circuit Training",
        "Tabata, Hips & Thighs, Stretching batches",
        "Changing room, Steam, Shower, Lockers",
        "5 General trainers available",
        "Bi-weekly body measurements (BMI, BMR, Fat %)"
      ],
      price: "₹2,499/month"
    },
    {
      name: "STUDENT MEMBERSHIP",
      timing: "10:00AM to 06:00PM",
      features: [
        "Weight Training, Cardio, Group Activities",
        "Yoga, Aerobics, Abs, Spinning, Circuit Training",
        "Tabata, Hips & Thighs, Stretching batches",
        "Changing room, Steam, Shower, Lockers",
        "5 General trainers available",
        "Bi-weekly body measurements (BMI, BMR, Fat %)",
        "Valid student ID required"
      ],
      price: "₹1,999/month"
    },
    {
      name: "GROUP MEMBERSHIP",
      timing: "7:00AM to 9:30PM",
      features: [
        "All group activities included",
        "Yoga, Aerobics, Abs, Spinning, Circuit Training",
        "Tabata, Hips & Thighs, Stretching batches",
        "Changing room, Steam, Shower, Lockers",
        "Certified trainers for group sessions",
        "Perfect for corporate groups or friends"
      ],
      price: "₹1,799/month per person (min. 5 people)"
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Membership Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipTypes.map((membership, index) => (
              <div
                key={index}
                className={`relative rounded-xl shadow-lg overflow-hidden border-2 ${membership.popular ? 'border-purple-500' : 'border-gray-200'}`}
              >
                {membership.popular && (
                  <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">{membership.name}</h3>
                  <div className="flex items-center text-purple-700 mb-4">
                    <FaClock className="w-5 h-5 mr-2" />
                    <span>{membership.timing}</span>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-purple-900">{membership.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {membership.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FeatureIcon feature={feature} />
                        <span className="ml-2 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold ${membership.popular ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50'}`}>
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
