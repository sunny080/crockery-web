import * as React from 'react'

import HomeHeroSection from './HomeHeroSection'

export default {
  title: 'Sections/HomeHeroSection',
  component: HomeHeroSection,
}

const Template = (args) => <HomeHeroSection {...args} />

export const Default = Template.bind({})
Default.args = {}
