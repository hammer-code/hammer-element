import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from './Styles'
export default class Button extends Component {
  render () {
    const { children, size, shadow, rounded } = this.props
    return (
      <Container size={size} shadow={shadow} rounded={rounded}>
        { children }
      </Container>
    )
  }
}

Button.propTypes = {
  size: PropTypes.string,
  shadow: PropTypes.bool,
  runded: PropTypes.bool,
}