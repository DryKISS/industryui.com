/**
 * Components - Atoms - Details2 - Stories
 */

// React
import React from 'react'

// Storybook
import { ContextControl } from '../../../../.storybook/decorators'

// UI
import {
  Button,
  ButtonToolbar,
  Column,
  Details2,
  DetailsCommunicationService,
  Icon,
  MessageNames,
  Row,
  Text
} from '../../../'

import { THEME_CONTEXT } from '../../../theme/constants/context'

import Readme from '../README.md'

const Content = () => {
  return (
    <>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
    </>
  )
}

export default {
  args: {
    animationDuration: 100,
    disableAnimation: false,
    context: THEME_CONTEXT.PRIMARY,
    fitParentHeight: false,
    iconComponent: <Icon fixedWidth={false} icon="images" />,
    open: true,
    title: 'Details 2',
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
      <Content />
    </Details2>
  )
}

export const caret = (args) => {
  return (
    <Details2 {...args} iconComponent={null}>
      <Content />
    </Details2>
  )
}

export const communication = (args) => {
  const toolbar = (
    <ButtonToolbar>
      <Button size="xs">button1</Button>
      <Button size="xs">button2</Button>
    </ButtonToolbar>
  )

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
              }}>
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
        toolbar={toolbar}
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
              }}>
              Open primary Details
            </Button>
            <p>wdsfsadfgsafgd</p>
            <p>wdsfsadfgsafgd</p>
          </>
        }
        context="danger"
        endActionComponent={endActionComponent}
        iconComponent={<Icon icon="images" prefix="fas" />}
        open
        startActionComponent={startActionComponent}
        style={{ marginBottom: '2rem' }}
        title="second details component"
        toolbar={toolbar}
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
                }}>
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
                }}>
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
