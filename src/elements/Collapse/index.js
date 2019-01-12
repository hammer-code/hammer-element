import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Head, Body, Arrow, EmptyChildren  } from './Styles'

export default class Collapse extends Component {
  constructor ({ openDefault }) {
    super()
    let open = false
    if (openDefault) open = true
    this.state = {
      open
    }
  }

  handleToggleCollapse () {
    this.setState(({ open }) => ({
      open: !open
    }))
  }

  handleRenderChildren () {
    const { children, emptyText } = this.props
    let message = 'Cannot find data'
    if (emptyText) message = emptyText
    return (children) ? children : <EmptyChildren>{message}</EmptyChildren>
  }

  render () {
    const { open } = this.state
    const { title } = this.props
    return (
      <Container open={open}>
        <Head onClick={this.handleToggleCollapse.bind(this)}>
          <div>{ title }</div>
          <Arrow open={open} />
        </Head>
        <Body open={open}>
          { this.handleRenderChildren() }
        </Body>
      </Container>
    )
  }
}

Collapse.propTypes = {
  openDefault: PropTypes.bool,
  title: PropTypes.string,
  emptyText: PropTypes.string
}