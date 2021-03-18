/**
 * Components - Atoms - Details2 - Stories
 */

// React
import React, { useState } from 'react'

// Storybook
import { ContextControl } from '../../../../.storybook/decorators'

// UI
import { Button } from '../../button/button/button'
import { ButtonToolbar } from '../../button/toolbar/toolbar'
import { Dropdown } from '../../../molecules/dropdown/components/dropdown'
import { Icon } from '../../icon/icon/icon'

import { Column } from '../../../atoms/grid/components/Column'
import { Details2 } from '../../../atoms/details2/components/details2'
import { DetailsCommunicationService } from '../../../services/componentCommunication/index'
import { MessageNames } from '../../../services/componentCommunication/messageNames'
import { Row } from '../../../atoms/grid/components/Row'
import { Text } from '../../../atoms/text/text'

import { THEME_CONTEXT } from '../../../theme/constants/context'
import Readme from '../README.md'

const Toolbar = () => {
  const [table, setTable] = useState(true)

  const handleEditClick = (e) => {
    e.stopPropagation()
    console.info('handleEditClick', e)
  }

  const handleViewToggle = (e) => {
    e.stopPropagation()
    setTable(!table)
    console.info('handleViewToggle', e)
  }

  const handleDropdownClick = (item) => {
    console.info('handleDropdownClick', item)
  }

  const dropdownItems = [
    {
      id: 'delete',
      name: (
        <>
          <Icon context="danger" icon="trash" /> Delete
        </>
      ),
      onClick: handleDropdownClick
    },
    {
      id: 'calendar',
      name: 'Calendar',
      onClick: handleViewToggle
    },
    {
      id: 'logout-divider',
      divider: true
    },
    {
      id: 'logout',
      name: 'Logout'
    }
  ]

  return (
    <ButtonToolbar>
      <Button context="info" content="Edit" onClick={handleEditClick} size="sm" />

      <Button
        context="secondary"
        onClick={handleEditClick}
        size="sm"
        startIcon={'file-csv'}
        startIconProps={{ size: 'lg' }}
      />

      <Button
        context="secondary"
        onClick={handleEditClick}
        size="sm"
        startIcon={'file-pdf'}
        startIconProps={{ size: 'lg' }}
      />

      <Button
        context="secondary"
        onClick={handleViewToggle}
        size="sm"
        startIcon={table ? 'table' : 'calendar-alt'}
        startIconProps={{ size: 'lg' }}
      />

      <Dropdown
        onChange={(item) => {
          handleDropdownClick(item)
        }}
        caret={false}
        items={dropdownItems}
        position="right"
      >
        <Button
          context="white"
          startIconProps={{ colour: 'dark', iui: true }}
          size="sm"
          startIcon="verticalThreeDots"
        />
      </Dropdown>
    </ButtonToolbar>
  )
}

export default {
  args: {
    animationDuration: 100,
    disableAnimation: false,
    context: THEME_CONTEXT.PRIMARY,
    fitParentHeight: false,
    iconComponent: null,
    open: true,
    title: 'Details 2',
    toolbar: <Toolbar />,
    uniqueId: '1',
    unmountContentOnClose: false
  },
  argTypes: {
    context: ContextControl()
  },
  component: Details2,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Details2'
}

export const main = (args) => {
  return (
    <Details2 {...args}>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
    </Details2>
  )
}

export const communication = (args) => {
  const startActionComponent = <Button>button</Button>
  const endActionComponent = <Button>lastButton</Button>

  return (
    <>
      <Details2
        content={
          <>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
            <Button
              onClick={() => {
                DetailsCommunicationService.send({
                  name: MessageNames.DetailsComponent.SET_OPEN,
                  id: 'danger_Details',
                  payload: true
                })
              }}
            >
              Open red Details
            </Button>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
          </>
        }
        context="primary"
        endActionComponent={endActionComponent}
        open={false}
        startActionComponent={startActionComponent}
        style={{ marginBottom: '2rem' }}
        title="first details component"
        toolbar={<Toolbar />}
        uniqueId="primary_Details"
        unmountContentOnClose
      />

      <Details2
        content={
          <>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
            <Button
              onClick={() => {
                DetailsCommunicationService.send({
                  name: MessageNames.DetailsComponent.SET_OPEN,
                  id: 'primary_Details',
                  payload: true
                })
              }}
            >
              Open primary Details
            </Button>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
          </>
        }
        context="danger"
        endActionComponent={endActionComponent}
        iconComponent={<Icon icon="images" />}
        open
        startActionComponent={startActionComponent}
        style={{ marginBottom: '2rem' }}
        title="second details component"
        toolbar={<Toolbar />}
        uniqueId="danger_Details"
      />

      <Row>
        <Column md={6}>
          <Details2
            context="warning"
            open={false}
            startActionComponent={
              <Button
                size="sm"
                onClick={() => {
                  DetailsCommunicationService.send({
                    name: MessageNames.DetailsComponent.SET_OPEN,
                    id: 'success_Details',
                    payload: false
                  })
                }}
              >
                close success Details
              </Button>
            }
            title="third details component"
            uniqueId="warning_Details"
          />
        </Column>

        <Column md={6}>
          <Details2
            content={
              <>
                <p>asfddfsdfsadfasdfasdf</p>
                <p>asfddfsdfsadfasdfasdf</p>
                <p>asfddfsdfsadfasdfasdf</p>
                <p>asfddfsdfsadfasdfasdf</p>
                <p>asfddfsdfsadfasdfasdf</p>
                <p>asfddfsdfsadfasdfasdf</p>
                <p>asfddfsdfsadfasdfasdf</p>
                <p>asfddfsdfsadfasdfasdf</p>
              </>
            }
            context="success"
            disableAnimation
            open={false}
            startActionComponent={
              <Button
                size="sm"
                onClick={() => {
                  DetailsCommunicationService.send({
                    name: MessageNames.DetailsComponent.SET_OPEN,
                    id: 'danger_Details',
                    payload: true
                  })
                }}
              >
                open danger Details
              </Button>
            }
            title="forth details component"
            uniqueId="success_Details"
          />
        </Column>
      </Row>
    </>
  )
}
