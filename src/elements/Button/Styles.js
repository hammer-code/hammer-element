import styled, { css } from 'styled-components'
import { WHITE, PRIMARY } from '../../config/Colors'
import { PADDING, ROUNDED, TEXT_SIZE, SHADOW } from '../../config/Metrics'

const SMALL = css`
  padding-left: ${PADDING.small};
  padding-right: ${PADDING.small};
  padding-top: ${PADDING.tiny};
  padding-bottom: ${PADDING.tiny};
  font-size: ${TEXT_SIZE.tiny};
`

const MEDIUM = css`
  padding-left: ${PADDING.small};
  padding-right: ${PADDING.small};
  padding-top: ${PADDING.tiny};
  padding-bottom: ${PADDING.tiny};
  font-size: ${TEXT_SIZE.small};
`

const LARGE = css`
  padding-left: ${PADDING.medium};
  padding-right: ${PADDING.medium};
  padding-top: ${PADDING.small};
  padding-bottom: ${PADDING.small};
  font-size: ${TEXT_SIZE.medium};
`

const EXTRA_LARGE = css`
  padding-left: ${PADDING.large};
  padding-right: ${PADDING.large};
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

const handleWithShadowContainer = ({ shadow }) => shadow && css`
  box-shadow: ${SHADOW.medium};
`

const handleRoundedContainer = ({ rounded }) => rounded && css`
  border-radius: ${ROUNDED.default};
`

export const Container = styled.button`
  background-color: ${PRIMARY};
  color: ${WHITE};
  font-weight: 300;
  outline: none;
  border: none;
  cursor: pointer;
  ${handleSizeContainer}
  ${handleWithShadowContainer}
  ${handleRoundedContainer}
`