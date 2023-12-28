import * as React from 'react'

import SubscribePageHeader from './Navbar'

export default {
  title: 'Components/Navbar',
  component: SubscribePageHeader,
}

const Template = (args) => <SubscribePageHeader {...args} />

export const Default = Template.bind({})
Default.args = {}
