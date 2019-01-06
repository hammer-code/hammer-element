import React from 'react'
import { storiesOf } from '@storybook/react'
import Screen from '../src/elements/Screen'
import Button from '../src/elements/Button'

export default storiesOf('Button', module)
.add('Normal Button', () => (
  <Screen withPadding>
    <div>
      <Button size="small">
        Small Button
      </Button>
    </div>
    <br />
    <div>
      <Button size="medium">
        Medium Button
      </Button>
    </div>
    <br />
    <div>
      <Button size="large">
        Large Button
      </Button>
    </div>
    <br />
    <div>
      <Button size="extraLarge">
        Extra Large Button
      </Button>
    </div>
  </Screen>
))
.add('Shadow', () => (
  <Screen withPadding>
    <div>
      <Button size="small" shadow>
        Small Button
      </Button>
    </div>
    <br />
    <div>
      <Button size="medium" shadow>
        Medium Button
      </Button>
    </div>
    <br />
    <div>
      <Button size="large" shadow>
        Large Button
      </Button>
    </div>
    <br />
    <div>
      <Button size="extraLarge" shadow>
        Extra Large Button
      </Button>
    </div>
  </Screen>
))
.add('Rounded', () => (
  <Screen withPadding>
    <div>
      <Button size="small" rounded>
        Small Button
      </Button>
    </div>
    <br />
    <div>
      <Button size="medium" rounded>
        Medium Button
      </Button>
    </div>
    <br />
    <div>
      <Button size="large" rounded>
        Large Button
      </Button>
    </div>
    <br />
    <div>
      <Button size="extraLarge" rounded>
        Extra Large Button
      </Button>
    </div>
  </Screen>
))