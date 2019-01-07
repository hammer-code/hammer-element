import React from 'react'
import { storiesOf } from '@storybook/react'
import Screen from '../src/elements/Screen'

export default storiesOf('Screen', module)
.add('Container', () => (
  <Screen>
    this is screen
  </Screen>
))
