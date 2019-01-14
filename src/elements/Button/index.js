import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, WrapperText } from './Styles'
export default class Button extends Component {
  render () {
    const {
      children,
      size,
      shadow,
      rounded,
      full,
      outline,
      disabled,
      color } = this.props
    return (
      <Container
        size={size}
        shadow={shadow}
        rounded={rounded}
        full={full}
        color={color}
        outline={outline}
        disabled={disabled}>
        <WrapperText>
          { children }
        </WrapperText>
      </Container>
    )
  }
}

Button.propTypes = {
  size: PropTypes.string,
  shadow: PropTypes.bool,
  runded: PropTypes.bool,
  full: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string
}