import AdditionalBenefits from '@/components/memberships/AdditionalBenefits'
import HeroSection from '@/components/memberships/HeroSection'
import MembershipPage from '@/components/memberships/MemberShipPage'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection/>
      <MembershipPage/>
      <AdditionalBenefits/>
    </div>
  )
}
