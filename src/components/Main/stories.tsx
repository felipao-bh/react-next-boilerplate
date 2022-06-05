import { Meta, Story } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title basic',
    description: 'description basic'
  }
} as Meta

const Template: Story<typeof Main> = (args) => <Main {...args} />

export const Preview = Template.bind({})

Preview.args = {
  title: 'title basic',
  description: 'description basic'
}
