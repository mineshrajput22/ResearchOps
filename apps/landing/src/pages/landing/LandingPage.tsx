import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { Hero } from '@/components/sections/Hero'
import { landingContent } from '@/config/site'

export function LandingPage() {
  return (
    <>
      <Hero content={landingContent.hero} />
      <FeatureGrid content={landingContent.features} />
    </>
  )
}
