/**
 * Components - Molecules - Stepper - Mock
 */

// React
import React, { useState } from 'react'

// UI
import Button from '../../../atoms/button/button/button'
import ButtonToolbar from '../../../atoms/button/toolbar/toolbar'

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
    </ButtonToolbar>
  )
}

export const Data = {
  items: [
    {
      id: 1,
      label: 'Job raised',
      labelIcon: 'video',
      date: '10 Nov 2019 11:40'
    },
    {
      id: 2,
      labelIcon: 'quiz',
      label: 'Job offered',
      date: '10 Nov 2019 11:45',
      content: [
        {
          id: 1,
          active: true,
          data: `Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
           Accepted by HomeRepairs Ltd`
        }
      ]
    },
    {
      id: 3,
      label: 'Accepted',
      date: '10 Nov 2019 11:55',
      content: [
        {
          id: 1,
          active: true,
          data: 'Accepted by HomeRepairs Ltd'
        }
      ]
    },
    {
      id: 4,
      label: 'In progress',
      date: '10 Nov 2019 12:10',
      info: '5 min video'
    },
    {
      id: 5,
      labelIcon: 'fullscreen',
      label: 'Complete',
      date: '10 Nov 2019 12:31'
    },
    {
      id: 6,
      label: 'Report sent',
      date: '10 Nov 2019 12:35',
      toolbar: <div>sdfsdfs</div>
    },
    {
      id: 7,
      label: 'Invoice sent',
      date: '10 Nov 2019 13:05'
    },
    {
      id: 8,
      label: 'Customer paid',
      date: null,
      active: true,
      highlighted: true,
      highlightColour: 'rgba(255,0,255,0.1)',
      info: '5 min video',
      content: [
        {
          id: 1,
          active: true,
          data: `Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
           Accepted by HomeRepairs Ltd`
        }
      ],
      toolBar: <Toolbar />,
      bottomBar: (
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button onClick={() => {}} content="test button" size="xs" />
          <Button onClick={() => {}} content="test button" size="xs" />
        </div>
      )
    },
    {
      id: 14,
      label: 'Customer paid',
      date: null,
      active: false,
      info: '5 min video',
      content: [
        {
          id: 1,
          active: true,
          data: `Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
          Accepted by HomeRepairs Ltd
           Accepted by HomeRepairs Ltd`
        }
      ],
      toolBar: <Toolbar />,
      bottomBar: (
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button onClick={() => {}} content="test button" size="xs" />
          <Button onClick={() => {}} content="test button" size="xs" />
        </div>
      )
    },

    {
      id: 10,
      label: 'Inactive Item',
      date: null,
      active: false,
      actions: [
        {
          id: 1,
          content: 'Job is inactive',
          context: 'warning',
          handleClick: () => {},
          type: 'button'
        }
      ]
    },
    {
      id: 11,
      label: 'Closed',
      date: null,
      pending: true,
      actions: [
        {
          id: 1,
          content: 'Close job manually',
          context: 'warning',
          handleClick: () => {},
          type: 'button'
        }
      ]
    }
  ],
  summary: [
    {
      label: 'Start time',
      value: '11:40'
    },
    {
      label: 'Scheduled end time',
      value: '13:00'
    },
    {
      label: 'Actual end time',
      value: '12:31'
    }
  ]
}
