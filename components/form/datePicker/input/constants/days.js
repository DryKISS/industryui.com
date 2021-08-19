/**
 * Date Picker - Input
 */

// Days
const days = [{ disabled: true, text: 'Select day', value: '' }]

for (let d = 1; d <= 31; d++) {
  days.push({ text: d, value: d })
}

const DAYS = days

export default DAYS
