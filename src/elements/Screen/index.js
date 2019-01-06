import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Wrapper } from './Styles'
import StatusBar from '../../assets/statusbar.png'

export default class Screen extends Component {
  render () {
    const { children, withPadding } = this.props
    return (
      <Container>
        <div>
          <img src={StatusBar} />
        </div>
        <Wrapper withPadding={withPadding}>
          { children }
        </Wrapper>
      </Container>
    )
  }
}

Screen.propTypes = {
  withPadding: PropTypes.bool
}