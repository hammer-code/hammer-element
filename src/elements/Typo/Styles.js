import styled, { css } from 'styled-components'
import { TEXT_SIZE, MARGIN } from '../../config/Metrics'
import { GREY } from '../../config/Colors'

const handleResizingHeading = ({ stage }) => {
  const stageOne = css`
    font-size: ${TEXT_SIZE.extraLarge};
    line-height: calc(${TEXT_SIZE.extraLarge} + 11px);
  `
  switch (stage) {
    case 'one':
      return stageOne
      break
    case 'two':
      return css`
        font-size: ${TEXT_SIZE.large};
        line-height: calc(${TEXT_SIZE.large} + 9px);
      `
      break
    case 'three':
      return css`
        font-size: ${TEXT_SIZE.medium};
        line-height: calc(${TEXT_SIZE.medium} + 7px);
      `
      break
    case 'four':
      return css`
        font-size: ${TEXT_SIZE.small};
        line-height: calc(${TEXT_SIZE.small} + 5px);
      `
      break
    default:
      return stageOne
      break
  }
}

export const HeadingContainer = styled.div`
  font-weight: 900;
  margin-bottom: ${MARGIN.base};
  ${handleResizingHeading}
`

export const SubHeadingContainer = styled.div`
  font-size: ${TEXT_SIZE.small};
  line-height: calc(${TEXT_SIZE.small} + 5px);
  color: ${GREY};
  text-transform: uppercase;
`