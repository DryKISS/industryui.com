/**
 * Components - Details2 - Stories
 */

// UI
import {
  Button,
  ButtonToolbar,
  Column,
  Details2,
  DetailsCommunicationService,
  MessageNames,
  Row
} from 'components'
import Readme from '../README.md'

export default {
  args: {
    children: 'Content'
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

export const main = args => {
  const toolbar = (
    <ButtonToolbar>
      <Button size='xs'>button1</Button>
      <Button size='xs'>button2</Button>
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
        context='primary'
        endActionComponent={endActionComponent}
        open={false}
        startActionComponent={startActionComponent}
        style={{ marginBottom: '2rem' }}
        title='first details component'
        toolbar={toolbar}
        uniqueId='primary_Details'
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
        context='danger'
        endActionComponent={endActionComponent}
        open
        startActionComponent={startActionComponent}
        style={{ marginBottom: '2rem' }}
        title='second details component'
        toolbar={toolbar}
        uniqueId='danger_Details'
      />
      <Row>
        <Column md={6}>
          <Details2
            context='warning'
            open={false}
            startActionComponent={
              <Button
                size='sm'
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
            title='third details component'
            uniqueId='warning_Details'
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
            context='success'
            open={false}
            startActionComponent={
              <Button
                size='sm'
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
            title='forth details component'
            uniqueId='success_Details'
          />
        </Column>
      </Row>
    </>
  )
}
