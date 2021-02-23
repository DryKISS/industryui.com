/**
 * Components - Atoms - Details2 - Components - Header
 */

// React
import React from 'react'
import { bool, func, node, number, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Details2Actions = ({
  animationtime,
  children,
  content,
  handleOpenClose,
  iconComponent,
  isOpen,
  title,
  endActionComponent,
  startActionComponent,
  toolbar
}) => {
  // const animationtime = disableAnimation ? 0 : animationDuration
  // const [isOpen, setisOpen] = useState(open)

  // const contentRef = useRef(null)

  // useEffect(() => {
  //   if (unmountContentOnClose) {
  //     isOpen
  //       ? setchildrenMounted(() => true)
  //       : setTimeout(() => {
  //           window &&
  //             window.requestAnimationFrame(() => {
  //               setchildrenMounted(() => false)
  //             })
  //         }, animationtime ?? 300)
  //   }
  //   setTimeout(
  //     () => {
  //       window &&
  //         window.requestAnimationFrame(() => {
  //           contentRef.current && setcontentHeight(() => contentRef.current.offsetHeight)
  //         })
  //     },
  //     !isOpen ? animationtime ?? 300 : 0
  //   )

  //   return () => {}
  // }, [contentRef.current, isOpen])

  // const handleEventRecieve = e => {
  //   setisOpen(e)
  // }

  // useComponentCommunication({
  //   id: uniqueId,
  //   messageName: MessageNames.DetailsComponent.SET_OPEN,
  //   onRecieve: e => handleEventRecieve(e),
  //   subscriber: DetailsSubscriber
  // })

  return (
    <ActionsWrapper>
      <StartActionComponentWrapper>
        {startActionComponent}{' '}
        {(toolbar || endActionComponent) && <ActionsDivider />}
      </StartActionComponentWrapper>

      <ToolbarWrapper>
        {toolbar}
        {endActionComponent && <ActionsDivider />}
      </ToolbarWrapper>

      {endActionComponent}
    </ActionsWrapper>
  )
}

const ActionsDivider = styled.div`
  background-color: ${({ theme }) => theme.COLOUR.dark};
  height: 1rem;
  margin: 0 1rem;
  width: 2px;
`

const ToolbarWrapper = styled.div`
  align-items: center;
  display: flex;
`

const StartActionComponentWrapper = styled.div`
  align-items: center;
  display: flex;
`

const ActionsWrapper = styled.div`
  align-items: center;
  display: flex;
`

Details2Actions.propTypes = {
  animationtime: number,
  children: node,
  content: node,
  handleOpenClose: func.isRequired,
  iconComponent: node,
  isOpen: bool,
  title: string.isRequired
}
