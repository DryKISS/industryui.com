export const RADIO_GENDER = (genderToggle = 'no') => [
  {
    id: 'genderToggle',
    isChecked: genderToggle === 'no',
    label: 'No preference',
    required: true,
    value: 'no'
  },
  {
    id: 'genderToggle',
    isChecked: genderToggle === 'male',
    label: 'Male',
    required: true,
    value: 'male'
  },
  {
    id: 'genderToggle',
    isChecked: genderToggle === 'female',
    label: 'Female',
    required: true,
    value: 'female'
  }
]
