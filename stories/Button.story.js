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
.add('Rounded', () => (
  <Screen withPadding>
    <div>
      <Button size="large" rounded>
        Rounded Button
      </Button>
    </div>
  </Screen>
))
.add('Full Width', () => (
  <Screen withPadding>
    <div>
      <Button size="extraLarge" rounded full>
        Extra Large Full Button
      </Button>
    </div>
  </Screen>
))
.add('Type Button', () => (
  <Screen withPadding>
    <div>
      <Button rounded size="medium" type="primary">
        Type Primary
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" type="secondary">
        Type Secondary
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" type="black">
        Type Black
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" type="warning">
        Type Warning
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" type="danger">
        Type Danger
      </Button>
    </div>
    <br />
    <div>
      <Button rounded size="medium" type="success">
        Type Success
      </Button>
    </div>
  </Screen>
))
.add('Outline', () => (
  <Screen withPadding>
    <div>
      <Button rounded outline size="medium" type="primary">
        Type Primary Outline
      </Button>
    </div>
    <br />
    <div>
      <Button rounded outline size="medium" type="secondary">
        Type Secondary Outline
      </Button>
    </div>
    <br />
    <div>
      <Button rounded outline size="medium" type="black">
        Type Black Outline
      </Button>
    </div>
    <br />
    <div>
      <Button rounded outline size="medium" type="warning">
        Type Warning Outline
      </Button>
    </div>
    <br />
    <div>
      <Button rounded outline size="medium" type="danger">
        Type Danger Outline
      </Button>
    </div>
    <br />
    <div>
      <Button rounded outline size="medium" type="success">
        Type Success Outline
      </Button>
    </div>
  </Screen>
))