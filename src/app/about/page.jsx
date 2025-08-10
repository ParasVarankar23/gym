'use client'
import AboutContentSection from "@/components/about/AboutContentSection";
import BranchesSection from "@/components/about/BranchSection";
import CallToActionSection from "@/components/about/CallToActionSection";
import GoalsSection from "@/components/about/GoalSection";
import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissionSection";
import FeatureSection from "@/components/home/featureSection";
import React, { useState, useEffect } from "react";

export default function Home() {
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <HeroSection/>
            <FeatureSection isVisible={isVisible}/>
            <MissionSection isVisible={isVisible}/>
            <AboutContentSection isVisible={isVisible}/>
            <BranchesSection/>
            <GoalsSection isVisible={isVisible}/>
            <CallToActionSection/>
        </div>
    );
}
