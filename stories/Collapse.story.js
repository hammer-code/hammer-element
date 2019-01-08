import React from 'react'
import { storiesOf } from '@storybook/react'
import Screen from '../src/elements/Screen'
import Collapse from '../src/elements/Collapse'

export default storiesOf('Collapse', module)
.add('Normal', () => (
  <Screen withPadding>
    <Collapse title="Popular in Music">
      Use max-height in the transformation and not height. And set a value on max-height to something bigger than your box will ever get.
    </Collapse>
    <Collapse title="Popular in Food & Drink">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Collapse>
    <Collapse title="Popular in Auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Collapse>
  </Screen>
))
.add('Empty State', () => (
  <Screen withPadding>
    <Collapse title="Empty State">
    </Collapse>
    <Collapse title="Empty State with Custom Message" emptyText="This is empty message">
    </Collapse>
  </Screen>
))
.add('Default to Open', () => (
  <Screen withPadding>
    <Collapse title="Open is default" openDefault>
      Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Collapse>
  </Screen>
))
.add('Image', () => (
  <Screen withPadding>
    <Collapse title="Image in">
      <img src="https://avatars2.githubusercontent.com/u/32449516?s=200&v=4" />
      <div>
        Hammer Code
      </div>
      <p>Tech Community</p>
    </Collapse>
  </Screen>
))

