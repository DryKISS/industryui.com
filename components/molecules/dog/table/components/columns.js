/**
 * Columns
 */
export const Columns = (actions, name) => [

  {
    formatter: name,
    text: 'Name'
  },

  {
    text: 'Breed'
  },

  {
    text: 'Price'
  },

  {
    text: 'Applications'
  },

  {
    text: 'Approved'
  },

  {
    formatter: actions,
    text: 'Actions'
  },

  {
    hidden: true
  },

  {
    hidden: true
  }

]
