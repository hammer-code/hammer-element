import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListsContainer, ListContainer, ContentWrapper } from './Styles'

export class Lists extends Component {
  render () {
    const { children } = this.props
    return (
      <ListsContainer>
        {children}
      </ListsContainer>
    )
  }
}

export class ListItem extends Component {
  render () {
    const { children, clickable } = this.props
    return (
      <ListContainer
        clickable={clickable}>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </ListContainer>
    )
  }
}

ListItem.propsTypes = {
  clickable: PropTypes.bool
}