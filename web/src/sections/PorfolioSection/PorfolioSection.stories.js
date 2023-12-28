import * as React from 'react'

import PorfolioSection from './PorfolioSection'

export default {
  title: 'Sections/PorfolioSection',
  component: PorfolioSection,
}

const Template = (args) => <PorfolioSection {...args} />

export const Default = Template.bind({})
Default.args = {}
