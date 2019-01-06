import styled, { css } from 'styled-components'
import { GREY_SPACE } from '../../config/Colors'
import { SHADOW, PADDING } from '../../config/Metrics'

export const Container = styled.div`
  width: 361px;
  height: 550px;
  background-color: ${GREY_SPACE};
  margin: 20px auto;
  box-shadow: ${SHADOW.medium};
`

export const Wrapper = styled.div`
  ${({ withPadding }) => withPadding && css`
  padding: ${PADDING.small}
  `}
`