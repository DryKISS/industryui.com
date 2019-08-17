/**
 * Sidebar
 */

// React
import { array, object } from 'prop-types'

// UI
import {
  Card,
  CardBody,
  Divider,
  Icon,
  Link,
  List
} from '../../../'

export const Sidebar = ({ data, profile }) => {
  const link = (icon, name, to) =>
    <>
      {icon
        ? icon === 'dog-leashed'
          ? <Icon icon='dog-leashed' />
          : <Icon
            icon='check-circle'
            context={profile && profile[icon] === true ? 'primary' : 'light'}
          />
        : ''
      }

      {' '}

      <Link to={to}>
        <a className='Footer-link'>
          {name}
        </a>
      </Link>
    </>

  return (
    <Card bordered context='white'>
      <CardBody>

        <List unstyled>

          {data.map(({ Component, divider, icon, name, to }, index) => (
            <span key={index}>

              {divider
                ? <Divider size='md' />
                : Component ? <Component />
                  : to ? link(icon, name, to)
                    : name
              }

            </span>
          ))}

        </List>

      </CardBody>
    </Card>
  )
}

Sidebar.propTypes = {
  data: array.isRequired,
  profile: object
}
