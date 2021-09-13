/**
 * Components - Atoms - Details - Stories
 */

// React
import React, { useState } from 'react'

// Storybook
import ContextControl from '../../../../.storybook/decorators/controls/context'

// UI
import Button from '../../button/button/button'
import ButtonToolbar from '../../button/toolbar/toolbar'
import Dropdown from '../../../molecules/dropdown/dropdown'
import Icon from '../../icon/icon/icon'
import Column from '../../../atoms/grid/Column'
import Details from '../details'
import { DetailsCommunicationService } from '../../../services/componentCommunication/componentCommunication'
import MessageNames from '../../../services/componentCommunication/messageNames'
import Row from '../../../atoms/grid/Row'
import Table from '../../../molecules/table/components/table'
import TableActions from '../../../molecules/table/components/formatter/actions/actions'
import TableLink from '../../../molecules/table/components/formatter/link'
import Text from '../../../atoms/text/text'
import THEME_CONTEXT from '../../../constants/context'
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
    title: 'Details',
    toolbar: <Toolbar />,
    uniqueId: '1',
    unmountContentOnClose: false
  },
  argTypes: {
    context: ContextControl()
  },
  component: Details,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Details'
}

export const main = (args) => {
  const columnsActions = [
    {
      text: 'ID'
    },
    {
      sortName: 'company',
      text: 'Company'
    },
    {
      formatter: TableLink('/', 'url', 'company'),
      text: 'URL'
    },
    {
      hidden: true
    },
    {
      formatter: TableActions,
      formatterData: (row) => [
        {
          content: 'Edit',
          context: 'primary',
          icon: ['fas', 'edit'],
          to: '/manage',
          tooltip: 'Edit',
          numberOverlay: 'itemCount',
          onClick: () => console.info('edit', row)
        },
        {
          content: 'Delete',
          context: 'danger',
          icon: ['fas', 'trash'],
          to: '/delete',
          tooltip: 'Delete'
        }
      ],
      text: 'Actions'
    }
  ]

  const rows = [
    {
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com',
      itemCount: 5,
      actions: ''
    },
    {
      id: '10002',
      company: 'Triangle Solutions Ltd',
      url: 'https://triangle-solutions.com',
      itemCount: 3,
      actions: ''
    }
  ]

  return (
    <Details {...args}>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Table columns={columnsActions} rows={rows} />
    </Details>
  )
}

export const communication = (args) => {
  return (
    <>
      <Details
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
        open={false}
        style={{ marginBottom: '2rem' }}
        title="first details component"
        toolbar={<Toolbar />}
        uniqueId="primary_Details"
        unmountContentOnClose
      />

      <Details
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
        iconComponent={<Icon icon="images" />}
        open
        style={{ marginBottom: '2rem' }}
        title="second details component"
        toolbar={<Toolbar />}
        uniqueId="danger_Details"
      />

      <Row>
        <Column md={6}>
          <Details
            context="warning"
            open={false}
            title="third details component"
            uniqueId="warning_Details"
          />
        </Column>

        <Column md={6}>
          <Details
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
            title="forth details component"
            uniqueId="success_Details"
          />
        </Column>
      </Row>
    </>
  )
}
