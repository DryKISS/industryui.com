/**
 * Components - Form - Mocks - Expenses
 */
const EXPENSES = [
  {
    disabled: true,
    label: 'Select expense type',
    value: ''
  },
  {
    group: 'General Administrative Expenses',
    items: [
      {
        label: 'Telephone',
        value: 'TELEPHONE'
      },
      {
        label: 'Internet',
        value: 'INTERNET'
      },
      {
        label: 'Employers Liability Insurance',
        value: 'EMPLOYERS_LIABILITY_INSURANCE'
      },
      {
        label: 'Computer Consumables',
        value: 'COMPUTER_CONSUMABLES'
      },
      {
        label: 'Printing, Postage and Stationery',
        value: 'PRINTING_POSTAGE_STATIONERY'
      },
      {
        label: 'Hire of Equipment',
        value: 'HIRE_OF_EQUIPMENT'
      },
      {
        label: 'Professional Subscriptions',
        value: 'PROFESSIONAL_SUBSCRIPTIONS'
      },
      {
        label: 'General Insurance',
        value: 'GENERAL_INSURANCE'
      },
      {
        label: 'Software',
        value: 'SOFTWARE'
      },
      {
        label: 'Web Hosting/Cloud Services',
        value: 'WEB_HOSTING_CLOUD_SERVICES'
      }
    ]
  },
  {
    group: 'Travel and Subsistence',
    items: [
      {
        label: 'Public Transport',
        value: 'PUBLIC_TRANSPORT'
      },
      {
        label: 'Subsistence (not entertaining)',
        value: 'SUBSISTENCE'
      },
      {
        label: 'Parking and Tolls',
        value: 'PARKING_AND_TOLLS'
      },
      {
        label: 'Vehicle Rental',
        value: 'VEHICLE_RENTALS'
      },
      {
        label: 'UK Accommodation',
        value: 'UK_ACCOMMODATION'
      },
      {
        label: 'Overseas Travel',
        value: 'OVERSEAS_TRAVEL'
      }
    ]
  },
  {
    group: 'Advertising, Promotion and Entertainment',
    items: [
      {
        label: 'Advertising',
        value: 'ADVERTISING'
      },
      {
        label: 'Promotion',
        value: 'PROMOTION'
      },
      {
        label: 'Entertaining',
        value: 'ENTERTAINING'
      },
      {
        label: 'Gifts',
        value: 'GIFTS'
      },
      {
        label: 'Event Hosting',
        value: 'EVENT_HOSTING'
      }
    ]
  },
  {
    group: 'Premises Costs',
    items: [
      {
        label: 'Rent',
        value: 'RENT'
      },
      {
        label: 'Rates',
        value: 'RATES'
      },
      {
        label: 'Insurance',
        value: 'INSURANCE'
      },
      {
        label: 'Utilities',
        value: 'UTILITIES'
      },
      {
        label: 'Cleaning',
        value: 'CLEANING'
      },
      {
        label: 'Use of Own Premises',
        value: 'USE_OF_OWN_PREMISES'
      }
    ]
  },
  {
    group: 'Motor Expenses',
    items: [
      {
        label: 'Mileage Allowance',
        value: 'MILEAGE_ALLOWANCE'
      },
      {
        label: 'Motor Vehicle Running Costs',
        value: 'MOTOR_VEHICLE_RUNNING_COSTS'
      },
      {
        label: 'Company Van Running Costs',
        value: 'COMPANY_VAN_RUNNING_COSTS'
      },
      {
        label: 'Company Motorcycle Running Costs',
        value: 'COMPANY_MOTORCYCLE_RUNNING_COSTS'
      },
      {
        label: 'Company Bicycle Running Costs',
        value: 'COMPANY_BICYCLE_RUNNING_COSTS'
      },
      {
        label: 'Fuel',
        value: 'FUEL'
      },
      {
        label: 'Vehicle Licence',
        value: 'VEHICLE_LICENCE'
      }
    ]
  },
  {
    group: 'Fixed Asset',
    items: [
      {
        label: 'Fixtures and Fittings Cost',
        value: 'FIXTURES_AND_FITTINGS_COST'
      },
      {
        label: 'Equipment Cost',
        value: 'EQUIPMENT_COST'
      },
      {
        label: 'Motor Vehicles Cost',
        value: 'MOTOR_VEHICLES_COST'
      },
      {
        label: 'Intangibles Cost',
        value: 'INTANGIBLES_COST'
      }
    ]
  },
  {
    group: 'Repairs and Renewals',
    items: [
      {
        label: 'Maintenance',
        value: 'MAINTENANCE'
      },
      {
        label: 'Low Value Equipment',
        value: 'EQUIPMENT'
      }
    ]
  },
  {
    group: 'Legal and Professional Costs',
    items: [
      {
        label: 'Legal Fees',
        value: 'LEGAL_FEES'
      },
      {
        label: 'Accountancy',
        value: 'ACCOUNTANCY'
      },
      {
        label: 'Accountancy - Self Assessment/References',
        value: 'ACCOUNTANCY_SELF_ASSESSMENT'
      },
      {
        label: 'Company Formation Costs',
        value: 'COMPANY_FORMATION_COSTS'
      },
      {
        label: 'Beneficiary/Trust Payments',
        value: 'BENEFICIARY_TRUST_PAYMENTS'
      },
      {
        label: 'Confirmation Statement',
        value: 'ANNUAL_RETURN'
      }
    ]
  },
  {
    group: 'Finance',
    items: [
      {
        label: 'Bank Charges',
        value: 'BANK_CHARGES'
      },
      {
        label: 'Bank Interest',
        value: 'BANK_INTEREST'
      },
      {
        label: 'Alternative Finance Payments',
        value: 'ALTERNATIVE_FINANCE_PAYMENTS'
      },
      {
        label: 'Other Finance Charges',
        value: 'OTHER_FINANCE_CHARGES'
      }
    ]
  },
  {
    group: 'Penalties',
    items: [
      {
        label: 'Late Tax Payment Penalties',
        value: 'LATE_TAX_PAYMENT_PENALTIES'
      }
    ]
  },
  {
    group: 'Employee Costs',
    items: [
      {
        label: 'Staff Training',
        value: 'STAFF_TRAINING'
      },
      {
        label: 'Staff Welfare',
        value: 'STAFF_WELFARE'
      },
      {
        label: 'Pension Scheme Contributions',
        value: 'PENSION_SCHEME_CONTRIBUTIONS'
      },
      {
        label: 'Medical Insurance Contributions',
        value: 'MEDICAL_INSURANCE_CONTRIBUTIONS'
      },
      {
        label: 'Subcontractor Costs',
        value: 'SUBCONTRACTOR_COSTS'
      },
      {
        label: 'Childcare Voucher Admin Fees',
        value: 'CHILDCARE_VOUCHER_ADMIN_FEES'
      },
      {
        label: 'Staff Benefits and Expenses',
        value: 'STAFF_BENEFITS_EXPENSES'
      }
    ]
  },
  {
    group: 'Cost of Sales',
    items: [
      {
        label: 'Purchases and Materials',
        value: 'PURCHASES_AND_MATERIALS'
      },
      {
        label: 'Other Direct Costs',
        value: 'OTHER_DIRECT_COSTS'
      }
    ]
  },
  {
    group: 'Donations',
    items: [
      {
        label: 'Charitable Donations',
        value: 'CHARITABLE_DONATIONS'
      }
    ]
  }
]
export default EXPENSES
