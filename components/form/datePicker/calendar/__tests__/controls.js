/**
 * Components - Form - DatePicker - Calendar - Controls
 */

export const args = {
  // Boolean
  adjustDateOnChange: false,
  allowSameDay: false,
  autoFocus: false,
  disabled: false,
  disabledKeyboardNavigation: false,
  disableInitialDateBackground: false,
  fixedHeight: false,
  inline: false,
  isClearable: false,
  peekNextMonth: false,
  preventOpenOnFocus: false,
  readOnly: false,
  scrollableYearDropdown: false,
  scrollableMonthYearDropdown: false,
  selectsEnd: false,
  selectsStart: false,
  showMonthDropdown: false,
  showPreviousMonths: false,
  showMonthYearDropdown: false,
  showWeekNumbers: false,
  showYearDropdown: false,
  strictParsing: false,
  forceShowMonthNavigation: false,
  showDisabledMonthNavigation: false,
  startOpen: false,
  useWeekdaysShort: false,
  withPortal: false,
  shouldCloseOnSelect: true,
  showTimeInput: false,
  showMonthYearPicker: false,
  showQuarterYearPicker: false,
  showTimeSelect: false,
  showTimeSelectOnly: false,
  useShortMonthInDropdown: false,
  inlineFocusSelectedMonth: false,
  showPopperArrow: false,

  // Number
  monthsShown: 1,
  tabIndex: 1,
  yearDropdownItemNumber: 1,
  timeIntervals: 30,

  // Select
  dateFormat: 'dd MMMM yyyy',
  dropdownMode: 'select',

  // Text
  name: 'expiryAt',
  nextMonthButtonLabel: 'Next Month',
  nextYearButtonLabel: 'Next Year',
  placeHolderText: 'Click to select time',
  previousMonthButtonLabel: 'Previous Month',
  previousYearButtonLabel: 'Previous Year',
  timeCaption: 'Time',
  timeInputLabel: 'Time',
  todayButton: ''
}

export const argTypes = {
  disableInitialDateBackground: {
    control: { type: 'boolean' }
  },
  dateFormat: {
    control: {
      type: 'select',
      options: [
        'MM/dd/yyyy',
        'MMMM d, yyyy h:mm aa',
        'dd-M-yyyy hh:mm:ss',
        'dd MMMM yyyy',
        'd MMM yyyy'
      ]
    }
  },
  dropdownMode: {
    control: {
      type: 'select',
      options: ['scroll', 'select']
    }
  }
}
