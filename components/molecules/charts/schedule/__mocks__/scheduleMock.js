/**
 * Components - Molecules - Charts - Schedule - Mocks
 */

export const EXTERNAL_SCHEDULE_DATA = [
  {
    __typename: 'JobSchedule',
    costCustomer: 200,
    costSupplier: 150,
    frequency: 'DTSTART:20210505T000000Z\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=11',
    id: 131,
    jobs: [],
    serviceName: 'External Lighting',
    shortDescriptionName: 'AA Thermo Sensor P1',
    totalJobs: {
      __typename: 'Job_aggregate',
      aggregate: {
        __typename: 'Job_aggregate_fields',
        count: 19
      }
    }
  },
  {
    __typename: 'JobSchedule',
    costCustomer: 100,
    costSupplier: 80,
    frequency:
      'DTSTART:20210522T000000Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;UNTIL=20210821T193000Z',
    id: 136,
    jobs: [
      {
        __typename: 'Job',
        id: 3076,
        rag: null,
        timingStart: '2021-06-01T00:00:00+00:00'
      },
      {
        __typename: 'Job',
        id: 3077,
        rag: null,
        timingStart: '2021-07-01T00:00:00+00:00'
      },
      {
        __typename: 'Job',
        id: 3078,
        rag: null,
        timingStart: '2021-08-01T00:00:00+00:00'
      }
    ],
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    shortDescriptionName: 'Aerial Main',
    totalJobs: {
      __typename: 'Job_aggregate',
      aggregate: {
        __typename: 'Job_aggregate_fields',
        count: 6
      }
    }
  },
  {
    __typename: 'JobSchedule',
    costCustomer: 100,
    costSupplier: 80,
    frequency: 'DTSTART:20210524T000000Z\nRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=TU;COUNT=10',
    id: 137,
    jobs: [
      {
        __typename: 'Job',
        id: 2964,
        rag: null,
        timingStart: '2021-05-25T00:00:00+00:00'
      },
      {
        __typename: 'Job',
        id: 2965,
        rag: null,
        timingStart: '2021-06-01T00:00:00+00:00'
      },
      {
        __typename: 'Job',
        id: 2966,
        rag: null,
        timingStart: '2021-06-08T00:00:00+00:00'
      },
      {
        __typename: 'Job',
        id: 2967,
        rag: null,
        timingStart: '2021-06-15T00:00:00+00:00'
      },
      {
        __typename: 'Job',
        id: 2968,
        rag: null,
        timingStart: '2021-06-22T00:00:00+00:00'
      },
      {
        __typename: 'Job',
        id: 2969,
        rag: null,
        timingStart: '2021-06-29T00:00:00+00:00'
      },
      {
        __typename: 'Job',
        id: 2970,
        rag: null,
        timingStart: '2021-07-06T00:00:00+00:00'
      },
      {
        __typename: 'Job',
        id: 2971,
        rag: null,
        timingStart: '2021-07-13T00:00:00+00:00'
      },
      {
        __typename: 'Job',
        id: 2972,
        rag: null,
        timingStart: '2021-07-20T00:00:00+00:00'
      },
      {
        __typename: 'Job',
        id: 2973,
        rag: null,
        timingStart: '2021-07-27T00:00:00+00:00'
      }
    ],
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    shortDescriptionName: 'Air conditioning not working',
    totalJobs: {
      __typename: 'Job_aggregate',
      aggregate: {
        __typename: 'Job_aggregate_fields',
        count: 10
      }
    }
  },
  {
    __typename: 'JobSchedule',
    costCustomer: 100,
    costSupplier: 110,
    frequency: 'DTSTART:20210624T000000Z\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1',
    id: 139,
    jobs: [],
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    shortDescriptionName: 'AA Thermo P2',
    totalJobs: {
      __typename: 'Job_aggregate',
      aggregate: {
        __typename: 'Job_aggregate_fields',
        count: 1
      }
    }
  },
  {
    __typename: 'JobSchedule',
    costCustomer: 100,
    costSupplier: 80,
    frequency: 'DTSTART:20210922T000000Z\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1',
    id: 148,
    jobs: [],
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    shortDescriptionName: 'AA Thermo P2',
    totalJobs: {
      __typename: 'Job_aggregate',
      aggregate: {
        __typename: 'Job_aggregate_fields',
        count: 0
      }
    }
  },
  {
    __typename: 'JobSchedule',
    costCustomer: null,
    costSupplier: null,
    frequency: 'DTSTART:20210923T000000Z\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1',
    id: 150,
    jobs: [],
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    shortDescriptionName: 'AA Thermo P2',
    totalJobs: {
      __typename: 'Job_aggregate',
      aggregate: {
        __typename: 'Job_aggregate_fields',
        count: 0
      }
    }
  },
  {
    __typename: 'JobSchedule',
    costCustomer: 120,
    costSupplier: 90,
    frequency: 'DTSTART:20210929T000000Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;COUNT=12',
    id: 151,
    jobs: [
      {
        __typename: 'Job',
        id: 3086,
        rag: null,
        timingStart: '2021-10-01T00:00:00+00:00'
      }
    ],
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    shortDescriptionName: 'AA Thermo P2',
    totalJobs: {
      __typename: 'Job_aggregate',
      aggregate: {
        __typename: 'Job_aggregate_fields',
        count: 12
      }
    }
  },
  {
    __typename: 'JobSchedule',
    costCustomer: 150,
    costSupplier: 140,
    frequency: 'DTSTART:20211021T000000Z\nRRULE:FREQ=WEEKLY;INTERVAL=2;COUNT=4',
    id: 161,
    jobs: [
      {
        __typename: 'Job',
        id: 3188,
        rag: null,
        timingStart: '2021-10-21T00:00:00+00:00'
      }
    ],
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    shortDescriptionName: 'AA Thermo P2',
    totalJobs: {
      __typename: 'Job_aggregate',
      aggregate: {
        __typename: 'Job_aggregate_fields',
        count: 4
      }
    }
  },
  {
    __typename: 'JobSchedule',
    costCustomer: 250,
    costSupplier: 220,
    frequency: 'DTSTART:20211026T000000Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;COUNT=3',
    id: 163,
    jobs: [],
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    shortDescriptionName: 'AA Thermo P2',
    totalJobs: {
      __typename: 'Job_aggregate',
      aggregate: {
        __typename: 'Job_aggregate_fields',
        count: 3
      }
    }
  }
]
