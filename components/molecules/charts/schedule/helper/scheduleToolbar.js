/**
 * Components - Molecules - Charts - Schedule - Helper - Schedule Toolbar
 */
// React
import React from 'react'

// Style
import THEME_ALIGN from '../../../../constants/align'
import THEME_SIZE from '../../../../constants/size'

// UI
import Button from '../../../../atoms/button/button/button'
import ButtonToolbar from '../../../../atoms/button/toolbar/toolbar'
import Row from '../../../../atoms/grid/Row'
import Space from '../../../../atoms/space/space'
import DATE_TYPE from '../../../../constants/dateType'

const args = {
  align: THEME_ALIGN.Start,
  size: THEME_SIZE.MD
}

const isActiveMenu = (currentMode, mode) => (currentMode === mode ? 'primary' : 'secondary')

export default ({ mode, setMode }) => {
  return (
    <Row justify={'end'}>
      <Space marginRight="sm" marginBottom="sm">
        <ButtonToolbar {...args}>
          <Button
            content="Year"
            size="sm"
            context={isActiveMenu(DATE_TYPE.YEAR, mode)}
            onClick={() => setMode(DATE_TYPE.YEAR)}
          />
          <Button
            content="Month"
            size="sm"
            context={isActiveMenu(DATE_TYPE.MONTH, mode)}
            onClick={() => setMode(DATE_TYPE.MONTH)}
          />
          <Button
            content="Week"
            size="sm"
            context={isActiveMenu(DATE_TYPE.WEEK, mode)}
            onClick={() => setMode(DATE_TYPE.WEEK)}
          />
          <Button
            content="Day"
            size="sm"
            context={isActiveMenu(DATE_TYPE.DAY, mode)}
            onClick={() => setMode(DATE_TYPE.DAY)}
          />
        </ButtonToolbar>
      </Space>
    </Row>
  )
}
