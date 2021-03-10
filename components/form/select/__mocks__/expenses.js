/**
 * Constant - Expenses types
 */
export const EXPENSES = [
  {
    disabled: true,
    text: 'Select expense type',
    value: ''
  },
  {
    group: 'General Administrative Expenses',
    items: [
      {
        text: 'Telephone',
        value: 'TELEPHONE'
      },
      {
        text: 'Internet',
        value: 'INTERNET'
      },
      {
        text: 'Employers Liability Insurance',
        value: 'EMPLOYERS_LIABILITY_INSURANCE'
      },
      {
        text: 'Computer Consumables',
        value: 'COMPUTER_CONSUMABLES'
      },
      {
        text: 'Printing, Postage and Stationery',
        value: 'PRINTING_POSTAGE_STATIONERY'
      },
      {
        text: 'Hire of Equipment',
        value: 'HIRE_OF_EQUIPMENT'
      },
      {
        text: 'Professional Subscriptions',
        value: 'PROFESSIONAL_SUBSCRIPTIONS'
      },
      {
        text: 'General Insurance',
        value: 'GENERAL_INSURANCE'
      },
      {
        text: 'Software',
        value: 'SOFTWARE'
      },
      {
        text: 'Web Hosting/Cloud Services',
        value: 'WEB_HOSTING_CLOUD_SERVICES'
      }
    ]
  },
  {
    group: 'Travel and Subsistence',
    items: [
      {
        text: 'Public Transport',
        value: 'PUBLIC_TRANSPORT'
      },
      {
        text: 'Subsistence (not entertaining)',
        value: 'SUBSISTENCE'
      },
      {
        text: 'Parking and Tolls',
        value: 'PARKING_AND_TOLLS'
      },
      {
        text: 'Vehicle Rental',
        value: 'VEHICLE_RENTALS'
      },
      {
        text: 'UK Accommodation',
        value: 'UK_ACCOMMODATION'
      },
      {
        text: 'Overseas Travel',
        value: 'OVERSEAS_TRAVEL'
      }
    ]
  },
  {
    group: 'Advertising, Promotion and Entertainment',
    items: [
      {
        text: 'Advertising',
        value: 'ADVERTISING'
      },
      {
        text: 'Promotion',
        value: 'PROMOTION'
      },
      {
        text: 'Entertaining',
        value: 'ENTERTAINING'
      },
      {
        text: 'Gifts',
        value: 'GIFTS'
      },
      {
        text: 'Event Hosting',
        value: 'EVENT_HOSTING'
      }
    ]
  },
  {
    group: 'Premises Costs',
    items: [
      {
        text: 'Rent',
        value: 'RENT'
      },
      {
        text: 'Rates',
        value: 'RATES'
      },
      {
        text: 'Insurance',
        value: 'INSURANCE'
      },
      {
        text: 'Utilities',
        value: 'UTILITIES'
      },
      {
        text: 'Cleaning',
        value: 'CLEANING'
      },
      {
        text: 'Use of Own Premises',
        value: 'USE_OF_OWN_PREMISES'
      }
    ]
  },
  {
    group: 'Motor Expenses',
    items: [
      {
        text: 'Mileage Allowance',
        value: 'MILEAGE_ALLOWANCE'
      },
      {
        text: 'Motor Vehicle Running Costs',
        value: 'MOTOR_VEHICLE_RUNNING_COSTS'
      },
      {
        text: 'Company Van Running Costs',
        value: 'COMPANY_VAN_RUNNING_COSTS'
      },
      {
        text: 'Company Motorcycle Running Costs',
        value: 'COMPANY_MOTORCYCLE_RUNNING_COSTS'
      },
      {
        text: 'Company Bicycle Running Costs',
        value: 'COMPANY_BICYCLE_RUNNING_COSTS'
      },
      {
        text: 'Fuel',
        value: 'FUEL'
      },
      {
        text: 'Vehicle Licence',
        value: 'VEHICLE_LICENCE'
      }
    ]
  },
  {
    group: 'Fixed Asset',
    items: [
      {
        text: 'Fixtures and Fittings Cost',
        value: 'FIXTURES_AND_FITTINGS_COST'
      },
      {
        text: 'Equipment Cost',
        value: 'EQUIPMENT_COST'
      },
      {
        text: 'Motor Vehicles Cost',
        value: 'MOTOR_VEHICLES_COST'
      },
      {
        text: 'Intangibles Cost',
        value: 'INTANGIBLES_COST'
      }
    ]
  },
  {
    group: 'Repairs and Renewals',
    items: [
      {
        text: 'Maintenance',
        value: 'MAINTENANCE'
      },
      {
        text: 'Low Value Equipment',
        value: 'EQUIPMENT'
      }
    ]
  },
  {
    group: 'Legal and Professional Costs',
    items: [
      {
        text: 'Legal Fees',
        value: 'LEGAL_FEES'
      },
      {
        text: 'Accountancy',
        value: 'ACCOUNTANCY'
      },
      {
        text: 'Accountancy - Self Assessment/References',
        value: 'ACCOUNTANCY_SELF_ASSESSMENT'
      },
      {
        text: 'Company Formation Costs',
        value: 'COMPANY_FORMATION_COSTS'
      },
      {
        text: 'Beneficiary/Trust Payments',
        value: 'BENEFICIARY_TRUST_PAYMENTS'
      },
      {
        text: 'Confirmation Statement',
        value: 'ANNUAL_RETURN'
      }
    ]
  },
  {
    group: 'Finance',
    items: [
      {
        text: 'Bank Charges',
        value: 'BANK_CHARGES'
      },
      {
        text: 'Bank Interest',
        value: 'BANK_INTEREST'
      },
      {
        text: 'Alternative Finance Payments',
        value: 'ALTERNATIVE_FINANCE_PAYMENTS'
      },
      {
        text: 'Other Finance Charges',
        value: 'OTHER_FINANCE_CHARGES'
      }
    ]
  },
  {
    group: 'Penalties',
    items: [
      {
        text: 'Late Tax Payment Penalties',
        value: 'LATE_TAX_PAYMENT_PENALTIES'
      }
    ]
  },
  {
    group: 'Employee Costs',
    items: [
      {
        text: 'Staff Training',
        value: 'STAFF_TRAINING'
      },
      {
        text: 'Staff Welfare',
        value: 'STAFF_WELFARE'
      },
      {
        text: 'Pension Scheme Contributions',
        value: 'PENSION_SCHEME_CONTRIBUTIONS'
      },
      {
        text: 'Medical Insurance Contributions',
        value: 'MEDICAL_INSURANCE_CONTRIBUTIONS'
      },
      {
        text: 'Subcontractor Costs',
        value: 'SUBCONTRACTOR_COSTS'
      },
      {
        text: 'Childcare Voucher Admin Fees',
        value: 'CHILDCARE_VOUCHER_ADMIN_FEES'
      },
      {
        text: 'Staff Benefits and Expenses',
        value: 'STAFF_BENEFITS_EXPENSES'
      }
    ]
  },
  {
    group: 'Cost of Sales',
    items: [
      {
        text: 'Purchases and Materials',
        value: 'PURCHASES_AND_MATERIALS'
      },
      {
        text: 'Other Direct Costs',
        value: 'OTHER_DIRECT_COSTS'
      }
    ]
  },
  {
    group: 'Donations',
    items: [
      {
        text: 'Charitable Donations',
        value: 'CHARITABLE_DONATIONS'
      }
    ]
  }
]
