/**
 * Layout - Dashboard
 *
 */

// React
import { bool, node, object } from 'prop-types'

// UI
import { Alert, Column, Container, MetaHead, PageHeading, Row } from '../../'

// Config
import { Brand, Canonical, Sidebar } from 'config'

export const Dashboard = ({ children, error, isLoading, meta, noData, pageHeading, success }) => {
  return (
    !isLoading && (
      <>
        <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />

        <Container fluid>
          <Row noGutter style={{ marginRight: '.2rem' }}>
            <Column md={2}>
              <Sidebar />
            </Column>

            <Column md={10}>
              {pageHeading && <PageHeading {...pageHeading} />}

              {children}

              {success && (
                <Alert
                  content='Details Saved. Please continue with the next section.'
                  context='success'
                />
              )}

              {error && <Alert content={`Error: ${error.message}`} context='warning' />}
            </Column>
          </Row>
        </Container>
      </>
    )
  )
}

Dashboard.propTypes = {
  children: node.isRequired,
  error: object,
  isLoading: bool.isRequired,
  meta: object.isRequired,
  noData: bool,
  pageHeading: object.isRequired,
  success: bool
}

Dashboard.defaultProps = {
  isLoading: true,
  noData: false
}
