import styled, { css } from 'styled-components'
import { WHITE, GREY_LIGHT, PRIMARY, BLACK, SECONDARY, RED, BLUE, GREEN, YELLOW, ORANGE, TRANSPARENT } from '../../config/Colors'
import { PADDING, ROUNDED, TEXT_SIZE, SHADOW } from '../../config/Metrics'

let COLOR_BASE = PRIMARY

const SMALL = css`
  padding-left: ${PADDING.medium};
  padding-right: ${PADDING.medium};
  padding-top: ${PADDING.extraTiny};
  padding-bottom: ${PADDING.extraTiny};
  font-size: ${TEXT_SIZE.tiny};
`

const MEDIUM = css`
  padding-left: calc(${PADDING.medium} * 2);
  padding-right: calc(${PADDING.medium} * 2);
  padding-top: ${PADDING.tiny};
  padding-bottom: ${PADDING.tiny};
  font-size: ${TEXT_SIZE.small};
`

const LARGE = css`
  padding-left: calc(${PADDING.extraLarge} * 2);
  padding-right: calc(${PADDING.extraLarge} * 2);
  padding-top: ${PADDING.small};
  padding-bottom: ${PADDING.small};
  font-size: ${TEXT_SIZE.medium};
`

const EXTRA_LARGE = css`
  padding-left: calc(${PADDING.extraLarge} * 2);
  padding-right: calc(${PADDING.extraLarge} * 2);
  padding-top: ${PADDING.medium};
  padding-bottom: ${PADDING.medium};
  font-size: ${TEXT_SIZE.medium};
`

const handleSizeContainer = ({ size }) => {
  switch (size) {
    case 'small':
      return SMALL
      break
    case 'medium':
      return MEDIUM
      break
    case 'large':
      return LARGE
      break
    case 'extraLarge':
      return EXTRA_LARGE
      break
    default:
      return SMALL
      break
  }
}

const handleColorContainer = ({ color }) => {
  switch (color) {
    case 'primary':
      COLOR_BASE = PRIMARY
      break
    case 'secondary':
      COLOR_BASE = SECONDARY
      break
    case 'orange':
      COLOR_BASE = ORANGE
      break
    case 'red':
      COLOR_BASE = RED
      break
    case 'blue':
      COLOR_BASE = BLUE
      break
    case 'yellow':
      COLOR_BASE = YELLOW
      break
    case 'green':
      COLOR_BASE = GREEN
      break
    case 'black':
      COLOR_BASE = BLACK
      break
    default:
      COLOR_BASE = PRIMARY
      break
  }
}

const handleOutlineContainer = ({ outline }) => {
  if (outline) return css`
    border: 1px solid ${COLOR_BASE};
    background-color: ${TRANSPARENT};
    color: ${COLOR_BASE};
  `

  return css`
    border: 1px solid ${COLOR_BASE};
    background-color: ${COLOR_BASE};
    color: ${WHITE};
  `
}

const handleWithShadowContainer = ({ shadow }) => shadow && css`
  box-shadow: ${SHADOW.medium};
`

const handleRoundedContainer = ({ rounded }) => rounded && css`
  border-radius: ${ROUNDED.default};
`

const handleFullWidthContainer = ({ full }) => {
  if (full) return css`
    display: block;
    width: 100%;
  `
  return css`
    display: inline-block;
  `
}

const handleDisabledContainer = ({ disabled }) => {
  if (disabled) return css`
    cursor: no-drop;
    background-color: ${GREY_LIGHT};
    border: 1px solid ${GREY_LIGHT};
  `
}

export const Container = styled.button`
  font-weight: 300;
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all .3s ease;
  overflow: hidden;
  ${handleColorContainer}
  ${handleOutlineContainer}
  ${handleSizeContainer}
  ${handleWithShadowContainer}
  ${handleRoundedContainer}
  ${handleFullWidthContainer}
  ${handleDisabledContainer}
`

export const WrapperText = styled.span`
  z-index: 10;
`