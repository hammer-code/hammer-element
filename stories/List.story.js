import React from 'react'
import { storiesOf } from '@storybook/react'
import Screen from '../src/elements/Screen'
import { Lists, ListItem } from '../src/elements/List'

export default storiesOf('List', module)
.add('Default', () => (
  <Screen withPadding>
    <Lists>
      <ListItem>
        <b>
          Zeck Maroin
        </b>
      </ListItem>
      <ListItem>
        <b>
          Markoni Jocka
        </b>
      </ListItem>
      <ListItem>
        <b>
          Nimasha Mark
        </b>
      </ListItem>
    </Lists>
  </Screen>
))
.add('Clickable', () => (
  <Screen withPadding>
    <Lists>
      <ListItem clickable>
        <b>
          Zeck Maroin
        </b>
      </ListItem>
      <ListItem clickable>
        <b>
          Markoni Jocka
        </b>
      </ListItem>
      <ListItem clickable>
        <b>
          Nimasha Mark
        </b>
      </ListItem>
    </Lists>
  </Screen>
))
