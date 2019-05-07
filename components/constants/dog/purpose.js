/**
 * Dog Purpose
 */
export const DOG_PURPOSE = (describeToggle) => [
  {
    id: 'describeToggle',
    isChecked: describeToggle === 'working',
    label: 'Working dog',
    required: true,
    value: 'working'
  },
  {
    id: 'describeToggle',
    isChecked: describeToggle === 'show',
    label: 'Show dog',
    required: true,
    value: 'show'
  },
  {
    id: 'describeToggle',
    isChecked: describeToggle === 'dual',
    label: 'Dual purpose',
    required: true,
    value: 'dual'
  }
]
