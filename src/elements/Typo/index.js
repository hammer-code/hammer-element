import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HeadingContainer, SubHeadingContainer } from './Styles'
export class Heading extends Component {
  render () {
    const { children, stage } = this.props
    return (
      <HeadingContainer stage={stage}>
        {children}
      </HeadingContainer>
    )
  }
}

export class SubHeading extends Component {
  render () {
    const { children } = this.props
    return (
      <SubHeadingContainer>
        {children}
      </SubHeadingContainer>
    )
  }
}

Heading.propTypes = {
  stage: PropTypes.string
}