/**
 * Components - Molecules - Row
 */

// React
import React, { memo, useRef } from 'react'
import { bool, string } from 'prop-types'
import { useDrag, useDrop } from 'react-dnd'
// Style
import styled, { css } from 'styled-components'

// UI
import themeBackground from '../../../utils/background/background'

const ItemTypes = {
  CARD: 'card'
}

const DragableStyledTableRow = (props) => {
  const { id, index, moveRow, dragableRows, ...rest } = props
  const ref = useRef(null)

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveRow(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    }
  })

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
	console.log(id)
  return <StyledTableRow {...rest} opacity={opacity} ref={ref} data-handler-id={handlerId} />
}

const TableRow = memo(
  (props) => {
    const { id, index, moveRow, dragableRows, ...rest } = props
    return dragableRows ? <DragableStyledTableRow {...props} /> : <StyledTableRow {...rest} />
  },
  () => true
)

const StyledTableRow = styled.tr`
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'initial')};

  ${({ context, striped, theme }) =>
    !context &&
    striped &&
    `
		:nth-child(odd) {
			background-color: ${theme.COLOUR.light};
		}
	`}

  ${(props) =>
    props.context &&
    `
		${themeBackground(props)}
		color: white;
	`}

${({ hover }) =>
    hover &&
    `
		:hover {
			background-color: #eee;
		}
	`}

${({ selected, theme }) =>
    selected === true &&
    `
		background-color: ${theme.TABLE.selectedRowBackground} !important;
	`}
	${({ opacity }) =>
    css`
      opacity: ${opacity};
    `}
`
TableRow.propTypes = {
  context: string,
  hover: bool,
  pointer: bool,
  striped: bool
}

export default TableRow
