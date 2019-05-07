/**
 * Dog Purpose
 */
export const DOG_OWNERSHIP = (ownershipToggle) => [

  {
    id: 'ownershipToggle',
    isChecked: ownershipToggle === 'own',
    label: `He's my own dog`,
    required: true,
    value: 'own'
  },

  {
    id: 'ownershipToggle',
    isChecked: ownershipToggle === 'paid',
    label: `He's a paid for stud dog`,
    required: true,
    value: 'paid'
  },

  {
    id: 'ownershipToggle',
    isChecked: ownershipToggle === 'unknown',
    label: `Other / Unknown`,
    required: true,
    value: 'unknown'
  }

]
