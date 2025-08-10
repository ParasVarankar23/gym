import FeatureSection from '@/components/home/featureSection'
import HeroSection from '@/components/home/heroSection'
import MembershipPlanPage from '@/components/home/MembershipPlanPage'
import PhyscBranches from '@/components/home/PhyscBranches'
import StatsSection from '@/components/home/statsSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <FeatureSection/>
      <MembershipPlanPage/>
      <PhyscBranches/>
    </div>
  )
}
