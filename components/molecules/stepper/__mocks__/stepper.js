/**
 * Items
 */
export const Data = {
  items: [
    {
      id: 1,
      label: 'Job raised',
      date: '10 Nov 2019 11:40'
    },
    {
      id: 2,
      label: 'Job offered',
      date: '10 Nov 2019 11:45'
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
      date: '10 Nov 2019 12:10'
    },
    {
      id: 5,
      label: 'Complete',
      date: '10 Nov 2019 12:31'
    },
    {
      id: 6,
      label: 'Report sent',
      date: '10 Nov 2019 12:35'
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
      actions: [
        {
          id: 1,
          active: true,
          content: 'Mark customer paid',
          context: 'secondary',
          handleClick: () => {},
          type: 'button'
        }
      ]
    },
    {
      id: 9,
      label: 'Supplier paid',
      date: null,
      actions: [
        {
          id: 1,
          active: true,
          content: 'Mark supplier paid',
          context: 'secondary',
          handleClick: () => {},
          type: 'button'
        }
      ]
    },
    {
      id: 10,
      label: 'Closed',
      date: null,
      actions: [
        {
          id: 1,
          content: 'Close job manually',
          context: 'warning',
          handleClick: () => {},
          type: 'button'
        }
      ]
    },
    {
      id: 11,
      label: 'Inactive Item',
      date: null,
      active: false,
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
