/**
 * Components - Molecules - Charts - Schedule - Mocks
 */

export const EXTERNAL_SCHEDULE_DATA = [
  {
    id: 131,
    shortDescriptionName: 'AA Thermo Sensor P1',
    serviceName: 'External Lighting',
    costCustomer: 200,
    costSupplier: 150,
    frequency: 'DTSTART:20210505T000000Z\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=11',
    jobs: [],
    totalJobs: {
      aggregate: { count: 19, __typename: 'Job_aggregate_fields' },
      __typename: 'Job_aggregate'
    },
    __typename: 'JobSchedule'
  },
  {
    id: 136,
    shortDescriptionName: 'Aerial Main',
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    costCustomer: 100,
    costSupplier: 80,
    frequency:
      'DTSTART:20210522T000000Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;UNTIL=20210821T193000Z',
    jobs: [
      { id: 3076, rag: null, timingStart: '2021-06-01T00:00:00+00:00', __typename: 'Job' },
      { id: 3077, rag: null, timingStart: '2021-07-01T00:00:00+00:00', __typename: 'Job' },
      { id: 3078, rag: null, timingStart: '2021-08-01T00:00:00+00:00', __typename: 'Job' },
      { id: 3077, rag: null, timingStart: '2021-10-28T00:00:00+00:00', __typename: 'Job' },
      { id: 3078, rag: null, timingStart: '2021-10-30T00:00:00+00:00', __typename: 'Job' }
    ],
    totalJobs: {
      aggregate: { count: 6, __typename: 'Job_aggregate_fields' },
      __typename: 'Job_aggregate'
    },
    __typename: 'JobSchedule'
  },
  {
    id: 137,
    shortDescriptionName: 'Air conditioning not working',
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    costCustomer: 100,
    costSupplier: 80,
    frequency: 'DTSTART:20210524T000000Z\nRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=TU;COUNT=10',
    jobs: [
      { id: 2964, rag: null, timingStart: '2021-05-25T00:00:00+00:00', __typename: 'Job' },
      { id: 2965, rag: null, timingStart: '2021-06-01T00:00:00+00:00', __typename: 'Job' },
      { id: 2966, rag: null, timingStart: '2021-06-08T00:00:00+00:00', __typename: 'Job' },
      { id: 2967, rag: null, timingStart: '2021-06-15T00:00:00+00:00', __typename: 'Job' },
      { id: 2968, rag: null, timingStart: '2021-06-22T00:00:00+00:00', __typename: 'Job' },
      { id: 2970, rag: null, timingStart: '2021-07-06T00:00:00+00:00', __typename: 'Job' },
      { id: 2971, rag: null, timingStart: '2021-07-13T00:00:00+00:00', __typename: 'Job' },
      { id: 2972, rag: null, timingStart: '2021-07-20T00:00:00+00:00', __typename: 'Job' },
      { id: 2973, rag: null, timingStart: '2021-07-27T00:00:00+00:00', __typename: 'Job' }
    ],
    totalJobs: {
      aggregate: { count: 10, __typename: 'Job_aggregate_fields' },
      __typename: 'Job_aggregate'
    },
    __typename: 'JobSchedule'
  },
  {
    id: 139,
    shortDescriptionName: 'AA Thermo P2',
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    costCustomer: 100,
    costSupplier: 110,
    frequency: 'DTSTART:20210624T000000Z\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1',
    jobs: [],
    totalJobs: {
      aggregate: { count: 1, __typename: 'Job_aggregate_fields' },
      __typename: 'Job_aggregate'
    },
    __typename: 'JobSchedule'
  },
  {
    id: 148,
    shortDescriptionName: 'AA Thermo P2',
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    costCustomer: 100,
    costSupplier: 80,
    frequency: 'DTSTART:20210922T000000Z\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1',
    jobs: [],
    totalJobs: {
      aggregate: { count: 0, __typename: 'Job_aggregate_fields' },
      __typename: 'Job_aggregate'
    },
    __typename: 'JobSchedule'
  },
  {
    id: 150,
    shortDescriptionName: 'AA Thermo P2',
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    costCustomer: null,
    costSupplier: null,
    frequency: 'DTSTART:20210923T000000Z\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1',
    jobs: [],
    totalJobs: {
      aggregate: { count: 0, __typename: 'Job_aggregate_fields' },
      __typename: 'Job_aggregate'
    },
    __typename: 'JobSchedule'
  },
  {
    id: 151,
    shortDescriptionName: 'AA Thermo P2',
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    costCustomer: 120,
    costSupplier: 90,
    frequency: 'DTSTART:20210929T000000Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;COUNT=12',
    jobs: [
      { id: 3087, rag: null, timingStart: '2021-11-01T00:00:00+00:00', __typename: 'Job' },
      { id: 3088, rag: null, timingStart: '2021-12-01T00:00:00+00:00', __typename: 'Job' },
      { id: 3086, rag: null, timingStart: '2021-10-01T00:00:00+00:00', __typename: 'Job' }
    ],
    totalJobs: {
      aggregate: { count: 12, __typename: 'Job_aggregate_fields' },
      __typename: 'Job_aggregate'
    },
    __typename: 'JobSchedule'
  },
  {
    id: 161,
    shortDescriptionName: 'AA Thermo P2',
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    costCustomer: 150,
    costSupplier: 140,
    frequency: 'DTSTART:20211021T000000Z\nRRULE:FREQ=WEEKLY;INTERVAL=2;COUNT=4',
    jobs: [
      { id: 3188, rag: null, timingStart: '2021-10-21T00:00:00+00:00', __typename: 'Job' },
      { id: 3189, rag: null, timingStart: '2021-11-04T00:00:00+00:00', __typename: 'Job' },
      { id: 3190, rag: null, timingStart: '2021-11-18T00:00:00+00:00', __typename: 'Job' },
      { id: 3191, rag: null, timingStart: '2021-12-02T00:00:00+00:00', __typename: 'Job' }
    ],
    totalJobs: {
      aggregate: { count: 4, __typename: 'Job_aggregate_fields' },
      __typename: 'Job_aggregate'
    },
    __typename: 'JobSchedule'
  },
  {
    id: 163,
    shortDescriptionName: 'AA Thermo P2',
    serviceName: 'Air Conditioning - Maintenance (Specialist)',
    costCustomer: 250,
    costSupplier: 220,
    frequency: 'DTSTART:20211026T000000Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;COUNT=3',
    jobs: [
      { id: 3203, rag: null, timingStart: '2021-11-01T00:00:00+00:00', __typename: 'Job' },
      { id: 3204, rag: null, timingStart: '2021-12-01T00:00:00+00:00', __typename: 'Job' }
    ],
    totalJobs: {
      aggregate: { count: 3, __typename: 'Job_aggregate_fields' },
      __typename: 'Job_aggregate'
    },
    __typename: 'JobSchedule'
  },
  {
    id: 164,
    shortDescriptionName: 'AA Thermo Sensor P1',
    serviceName: 'External Lighting',
    costCustomer: null,
    costSupplier: null,
    frequency: 'DTSTART:20211026T000000Z\nRRULE:FREQ=DAILY;INTERVAL=1;COUNT=1',
    jobs: [],
    totalJobs: {
      aggregate: { count: 0, __typename: 'Job_aggregate_fields' },
      __typename: 'Job_aggregate'
    },
    __typename: 'JobSchedule'
  }
]
