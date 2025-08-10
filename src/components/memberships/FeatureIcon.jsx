'use client';
import React from 'react';
import { FaDumbbell, FaHeartbeat, FaUsers, FaShower, FaAward, FaLock } from 'react-icons/fa';

export default function FeatureIcon({ feature }) {
    const lower = feature.toLowerCase();
    if (lower.includes("training")) return <FaDumbbell className="w-5 h-5 text-purple-600" />;
    if (lower.includes("yoga") || lower.includes("aerobics")) return <FaHeartbeat className="w-5 h-5 text-purple-600" />;
    if (lower.includes("trainer")) return <FaUsers className="w-5 h-5 text-purple-600" />;
    if (lower.includes("room") || lower.includes("shower")) return <FaShower className="w-5 h-5 text-purple-600" />;
    if (lower.includes("measure")) return <FaAward className="w-5 h-5 text-purple-600" />;
    if (lower.includes("lock")) return <FaLock className="w-5 h-5 text-purple-600" />;
    return <FaDumbbell className="w-5 h-5 text-purple-600" />;
}
