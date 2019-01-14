import React from 'react'
import { storiesOf } from '@storybook/react'
import Screen from '../src/elements/Screen'
import Button from '../src/elements/Button'

export default storiesOf('Button', module)
.add('Size', () => (
  <Screen withPadding>
    <div>
      <Button rounded size="small">
        Small Button
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium">
        Medium Button
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="large">
        Large Button
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="extraLarge">
        Extra Large Button
      </Button>
    </div>
  </Screen>
))
.add('Shadow', () => (
  <Screen withPadding>
    <div>
      <Button size="large" rounded shadow>
        Shadow Button
      </Button>
    </div>
  </Screen>
))
.add('Without Rounded', () => (
  <Screen withPadding>
    <div>
      <Button size="large">
        Rounded Button
      </Button>
    </div>
  </Screen>
))
.add('Full', () => (
  <Screen withPadding>
    <div>
      <Button rounded size="small" full>
        Small Button
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" full>
        Medium Button
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="large" full>
        Large Button
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="extraLarge" full>
        Extra Large Button
      </Button>
    </div>
  </Screen>
))
.add('Color', () => (
  <Screen withPadding>
    <div>
      <Button rounded size="medium" color="primary">
        Primary
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" color="secondary">
        Secondary
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" color="black">
        Black
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" color="orange">
        Orange
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" color="yellow">
        Yellow
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" color="green">
        Green
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" color="blue">
        Blue
      </Button>
    </div>
  </Screen>
))
.add('Outline', () => (
  <Screen withPadding>
    <div>
      <Button rounded outline size="medium" color="primary">
        Primary
      </Button>
    </div>
    <br />
    <div>
      <Button rounded outline size="medium" color="secondary">
        Secondary
      </Button>
    </div>
    <br />
    <div>
      <Button rounded outline size="medium" color="black">
        Black
      </Button>
    </div>
    <br />
    <div>
      <Button rounded outline size="medium" color="orange">
        Orange
      </Button>
    </div>
    <br />
    <div>
      <Button rounded outline size="medium" color="yellow">
        Yellow
      </Button>
    </div>
    <br />
    <div>
      <Button rounded outline size="medium" color="green">
        Green
      </Button>
    </div>
    <br />
    <div>
      <Button rounded outline size="medium" color="blue">
        Blue
      </Button>
    </div>
  </Screen>
))
.add('Disabled', () => (
  <Screen withPadding>
    <div>
      <Button rounded size="medium" color="primary" disabled>
        Primary
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" color="secondary" disabled>
        Secondary
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" color="black" disabled>
        Black
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" color="orange" disabled>
        Orange
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" color="yellow" disabled>
        Yellow
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" color="green" disabled>
        Green
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" color="blue" disabled>
        Blue
      </Button>
    </div>
  </Screen>
))