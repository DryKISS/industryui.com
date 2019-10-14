export const MONTHS = [
  {
    disabled: true,
    text: 'Select month',
    value: ''
  },
  {
    text: 'January',
    value: 1
  },
  {
    text: 'February',
    value: 2
  },
  {
    text: 'March',
    value: 3
  },
  {
    text: 'April',
    value: 4
  },
  {
    text: 'May',
    value: 5
  },
  {
    text: 'June',
    value: 6
  },
  {
    text: 'July',
    value: 7
  },
  {
    text: 'August',
    value: 8
  },
  {
    text: 'September',
    value: 9
  },
  {
    text: 'October',
    value: 10
  },
  {
    text: 'November',
    value: 11
  },
  {
    text: 'December',
    value: 12
  }
]

// Days
const days = [
  { disabled: true, text: 'Select day', value: '' }
]

for (let d = 1; d <= 31; d++) {
  days.push({ text: d, value: d })
}

export const DAYS = days
