import React from 'react'
import { storiesOf } from '@storybook/react'
import Screen from '../src/elements/Screen'

export default storiesOf('Screen', module)
.add('Conatiner', () => (
  <Screen>
    this is screen
  </Screen>
))
