import * as React from 'react'

import Accordions from './Accordions'

export default {
  title: 'Components/Accordions',
  component: Accordions,
}

const Template = (args) => <Accordions {...args} />

export const Default = Template.bind({})
Default.args = {}
