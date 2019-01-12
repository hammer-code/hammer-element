import styled, { css } from 'styled-components'
import { WHITE, PRIMARY, BLACK_MYTIC, GREY_LIGHT, SECONDARY, RED, GREEN, YELLOW, ORANGE } from '../../config/Colors'
import { PADDING, MARGIN, ROUNDED, TEXT_SIZE, SHADOW } from '../../config/Metrics'

const handleExpandContainer = ({ open }) => {
  return (open) ? css`
    max-height: 999px;
  ` : css`
    max-height: 34px;
  `
}

export const Container = styled.div`
  transition: all .3s ease;
  height: auto;
  overflow: hidden;
  ${handleExpandContainer}
`

export const Head = styled.div`
  padding: ${PADDING.tiny} ${PADDING.small};
  color: ${BLACK_MYTIC};
  font-size: ${TEXT_SIZE.medium};
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  touch-callout: none;
  user-select: none;
  position: relative;
`

const handleExpandBody = ({ open }) => {
  return (open) ? css`
    visibility: visible;
    opacity: 1;
    top: 0;
  ` : css`
    visibility: none;
    opacity: 0;
    top: -15px;
  `
}

export const Body = styled.div`
  padding: ${PADDING.tiny} ${PADDING.medium} ${PADDING.medium} ${PADDING.medium};
  margin-bottom: ${MARGIN.small};
  transition: all .3s ease;
  position: relative;
  ${handleExpandBody}
`

const handleExpandArrowBeforeRotate = (({ open }) => {
  return (open) ? css`
    transform: rotate(-45deg) translateX(-23%);
    transform-origin: top left;
  ` : css`
    transform: rotate(45deg) translateX(-23%);
    transform-origin: top left;
  `
})

const handleExpandArrowAfterRotate = (({ open }) => {
  return (open) ? css`
    transform: rotate(45deg) translateX(23%);
    transform-origin: top right;
  ` : css`
    transform: rotate(-45deg) translateX(23%);
    transform-origin: top right;
  `
})


const handleExpandChangeColorArrow = ({ open }) => {
  return (open) ? css`
    opacity: 1;
  ` : css`
    opacity: .6;
  `
}

export const Arrow = styled.div`
  border: 1px solid ${PRIMARY};
  border-radius: ${ROUNDED.small};
  height: 11px;
  width: 8px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: border .3s ease;
  &:before,
  &:after {
    content: "";
    background-color: ${PRIMARY};
    display: block;
    height:  1px;
    width: 4px;
    position: absolute;
    transition: all .3s ease;
  }

  &:before {
    ${handleExpandArrowBeforeRotate}
  }

  &:after {
    ${handleExpandArrowAfterRotate}
  }

  ${handleExpandChangeColorArrow}
`

export const EmptyChildren = styled.div`
  text-align: center;
  padding: ${PADDING.small};
`