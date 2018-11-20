/**
 * Tabs
 */

// React
import React, { Component, Fragment } from 'react'
import { array } from 'prop-types'

// UI
import { Tab } from './tab'

// Style
import styled, { withTheme } from 'styled-components'

export const Tabs = withTheme(
  class Tabs extends Component {
    constructor (props) {
      super(props)

      this.state = {
        activeTab: this.props.children[0].props.label
      }
    }

    static propTypes = {
      children: array.isRequired
    }

    onClickTabItem = (tab) => {
      this.setState({ activeTab: tab })
    }

    render () {
      const {
        onClickTabItem,
        props: {
          children
        },
        state: {
          activeTab
        }
      } = this

      return (
        <Fragment>

          <StyledTabs>

            {children.map((child) => {
              const { label } = child.props

              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                />
              )
            })}

          </StyledTabs>

          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined
            return child.props.children
          })}

        </Fragment>
      )
    }
  }
)

// Style
const StyledTabs = styled.ol`
  border-bottom: 1px solid #ccc;
  padding-left: 0;
`
