import React from 'react'
import { storiesOf } from '@storybook/react'
import Screen from '../src/elements/Screen'
import { Heading, SubHeading } from '../src/elements/Typo'

export default storiesOf('Typography', module)
.add('Heading', () => (
  <Screen withPadding>
    <Heading>
      Heading One
    </Heading>
    <Heading stage="two">
      Heading Two
    </Heading>
    <Heading stage="three">
      Heading Three
    </Heading>
    <Heading stage="four">
      Heading Four
    </Heading>
  </Screen>
))
.add('Sub Heading', () => (
  <Screen withPadding>
    <SubHeading>
      Sub Head
    </SubHeading>
  </Screen>
))
.add('Example', () => (
  <Screen withPadding>
    <Heading>
      Now add your first project
    </Heading>
    <SubHeading>
      Project Name
    </SubHeading>
  </Screen>
))
