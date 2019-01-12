import styled, { css } from 'styled-components'
import { WHITE, PRIMARY_LIGHT, BLACK_MYTIC, GREY_LIGHT, SECONDARY, RED, GREEN, YELLOW, ORANGE } from '../../config/Colors'
import { PADDING, MARGIN, ROUNDED, TEXT_SIZE, SHADOW } from '../../config/Metrics'

export const ListsContainer = styled.ul`
  list-style: none;
  margin: ${MARGIN.remove};
  padding-left: ${PADDING.remove};

  & li:first-child {
    border-top: 1px solid ${GREY_LIGHT};
  }
`

const handleClickable = ({ clickable }) => {
  return (clickable) ? css`
    cursor: pointer;
  ` : null
}

export const ListContainer = styled.li`
  padding: ${PADDING.small} ${PADDING.tiny};
  border-bottom: 1px solid ${GREY_LIGHT};
  ${handleClickable}
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`

export const ContentWrapper = styled.div`
  float: left;
`