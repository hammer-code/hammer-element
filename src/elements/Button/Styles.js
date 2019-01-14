import styled, { css } from 'styled-components'
import { WHITE, PRIMARY, BLACK, SECONDARY, RED, GREEN, YELLOW, ORANGE, TRANSPARENT } from '../../config/Colors'
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

const handleTypeContainer = ({ type }) => {
  switch (type) {
    case 'primary':
      COLOR_BASE = PRIMARY
      break
    case 'secondary':
      COLOR_BASE = SECONDARY
      break
    case 'warning':
      COLOR_BASE = ORANGE
      break
    case 'danger':
      COLOR_BASE = RED
      break
    case 'info':
      COLOR_BASE = YELLOW
      break
    case 'success':
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
    border: 2px solid ${COLOR_BASE};
    background-color: ${COLOR_BASE};
    color: ${WHITE};
  `
}

const handleWithShadowContainer = ({ shadow }) => shadow && css`
  box-shadow: ${SHADOW.medium};
`

const handleRoundedContainer = ({ rounded }) => rounded && css`
  border-radius: ${ROUNDED.medium};
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

export const Container = styled.button`
  font-weight: 300;
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all .3s ease;
  overflow: hidden;
  ${handleTypeContainer}
  ${handleOutlineContainer}
  ${handleSizeContainer}
  ${handleWithShadowContainer}
  ${handleRoundedContainer}
  ${handleFullWidthContainer}

  &:after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: .2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`

export const WrapperText = styled.span`
  z-index: 10;
`