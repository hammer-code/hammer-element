import styled, { css } from 'styled-components'
import { GREY_SPACE } from '../../config/Colors'
import { SHADOW, PADDING, TEXT_SIZE } from '../../config/Metrics'

export const Container = styled.div`
  width: 361px;
  height: 550px;
  background-color: ${GREY_SPACE};
  font-family: 'San Francisco', sans-serif;
  font-size: ${TEXT_SIZE.small};
  margin: 20px 0 20px 100px;
  box-shadow: ${SHADOW.medium};
`

export const Wrapper = styled.div`
  ${({ withPadding }) => withPadding && css`
  padding: ${PADDING.small}
  `}
`