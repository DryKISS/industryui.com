/**
 * Buttons
 * Provides a stepped flow for buttons
 */

// React
import React from 'react'
import { bool, object, oneOfType, string } from 'prop-types'

// UI
import Button from '../../atoms/button/button/button'
import Divider from '../../atoms/divider/divider'
import Link from '../../atoms/link/link'

const Buttons = ({ back, backText, next, nextDisabled, nextText, pathBack, pathNext }) => {
  return (
    <>
      <Divider size="sm" />

      {back && (
        <Link to={pathBack}>
          <Button context="secondary" size="lg">
            {backText}
          </Button>
        </Link>
      )}

      {next && (
        <div className="float-right">
          {pathNext && (
            <Link to={pathNext}>
              <Button context="primary" size="lg">
                {nextText}
              </Button>
            </Link>
          )}

          {!pathNext && (
            <Button context="primary" disabled={nextDisabled} size="lg" type="submit">
              {nextText}
            </Button>
          )}
        </div>
      )}

      <div style={{ clear: 'both', marginBottom: '1rem' }} />
    </>
  )
}

Buttons.propTypes = {
  back: bool,
  backText: string,
  next: bool,
  nextDisabled: bool,
  nextText: string,
  pathBack: oneOfType([object, string]),
  pathNext: string
}

Buttons.defaultProps = {
  backText: 'Back',
  nextText: 'Next'
}

export default Buttons
