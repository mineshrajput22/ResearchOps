export type ActionContent = {
  label: string
  href: string
}

export type HeroContent = {
  eyebrow: string
  title: string
  lede: string
  primaryAction: ActionContent
  secondaryAction: ActionContent
}

export type FeatureContent = {
  title: string
  body: string
}

export type FeaturesContent = {
  id: string
  title: string
  items: readonly FeatureContent[]
}

export type SiteConfig = {
  name: string
  description: string
  loginHref: string
}

/**
 * Marketing copy lives here, not in JSX, so it can later be sourced from a CMS
 * or i18n layer without touching component code.
 */
export const site: SiteConfig = {
  name: 'ResearchOps',
  description:
    'Collect studies, track participants and share findings in one calm workspace, built for small research teams.',
  loginHref: '/login',
}

export const landingContent: {
  hero: HeroContent
  features: FeaturesContent
} = {
  hero: {
    eyebrow: 'Research workspace',
    title: 'Run your research without the spreadsheets.',
    lede: site.description,
    primaryAction: { label: 'Log in', href: site.loginHref },
    secondaryAction: { label: "See what's inside", href: '#features' },
  },
  features: {
    id: 'features',
    title: "What's inside",
    items: [
      {
        title: 'Study plans',
        body: 'Write a plan once and keep every session, note and participant attached to it.',
      },
      {
        title: 'Participant tracker',
        body: 'See who is booked, who showed up and who still needs a follow-up.',
      },
      {
        title: 'Shared findings',
        body: 'Turn raw notes into a short readout your team can actually use.',
      },
    ],
  },
}
