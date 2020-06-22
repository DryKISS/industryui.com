/**
 * Form - DatePicker - Calendar - Knobs
 */

// Storybook
import { boolean, number, select, text } from '@storybook/addon-knobs'

export const KNOBS = () => {
  const groupIdBoolean = 'Booleans'
  const groupIdNumber = 'Numbers'
  const groupIdSelect = 'Selects'
  const groupIdText = 'Texts'

  const knobs = {
    // Boolean
    adjustDateOnChange: boolean('adjustDateOnChange', false, groupIdBoolean),
    allowSameDay: boolean('allowSameDay', false, groupIdBoolean),
    autoFocus: boolean('allowSameDay', false, groupIdBoolean),
    disabled: boolean('disabled', false, groupIdBoolean),
    disabledKeyboardNavigation: boolean('disabledKeyboardNavigation', false, groupIdBoolean),
    fixedHeight: boolean('fixedHeight', false, groupIdBoolean),
    inline: boolean('inline', false, groupIdBoolean),
    isClearable: boolean('isClearable', true, groupIdBoolean),
    peekNextMonth: boolean('peekNextMonth', false, groupIdBoolean),
    preventOpenOnFocus: boolean('preventOpenOnFocus', false, groupIdBoolean),
    readOnly: boolean('readOnly', false, groupIdBoolean),
    scrollableYearDropdown: boolean('scrollableYearDropdown', false, groupIdBoolean),
    scrollableMonthYearDropdown: boolean('scrollableMonthYearDropdown', false, groupIdBoolean),
    selectsEnd: boolean('selectsEnd', false, groupIdBoolean),
    selectsStart: boolean('selectsStart', false, groupIdBoolean),
    showMonthDropdown: boolean('showMonthDropdown', false, groupIdBoolean),
    showPreviousMonths: boolean('showPreviousMonths', false, groupIdBoolean),
    showMonthYearDropdown: boolean('showMonthYearDropdown', false, groupIdBoolean),
    showWeekNumbers: boolean('showWeekNumbers', false, groupIdBoolean),
    showYearDropdown: boolean('showYearDropdown', false, groupIdBoolean),
    strictParsing: boolean('strictParsing', false, groupIdBoolean),
    forceShowMonthNavigation: boolean('forceShowMonthNavigation', false, groupIdBoolean),
    showDisabledMonthNavigation: boolean('showDisabledMonthNavigation', false, groupIdBoolean),
    startOpen: boolean('startOpen', false, groupIdBoolean),
    useWeekdaysShort: boolean('useWeekdaysShort', false, groupIdBoolean),
    withPortal: boolean('withPortal', false, groupIdBoolean),
    shouldCloseOnSelect: boolean('shouldCloseOnSelect', true, groupIdBoolean),
    showTimeInput: boolean('showTimeInput', false, groupIdBoolean),
    showMonthYearPicker: boolean('showMonthYearPicker', false, groupIdBoolean),
    showQuarterYearPicker: boolean('showQuarterYearPicker', false, groupIdBoolean),
    showTimeSelect: boolean('showTimeSelect', false, groupIdBoolean),
    showTimeSelectOnly: boolean('showTimeSelectOnly', false, groupIdBoolean),
    useShortMonthInDropdown: boolean('useShortMonthInDropdown', false, groupIdBoolean),
    inlineFocusSelectedMonth: boolean('inlineFocusSelectedMonth', false, groupIdBoolean),
    showPopperArrow: boolean('showPopperArrow', true, groupIdBoolean),

    // Number
    monthsShown: number('monthsShown', 1, {}, groupIdNumber),
    tabIndex: number('tabIndex', 1, {}, groupIdNumber),
    yearDropdownItemNumber: number('yearDropdownItemNumber', 1, {}, groupIdNumber),
    timeIntervals: number('timeIntervals (showTimeSelect must be true)', 30, {}, groupIdNumber),

    // Select
    dateFormat: select(
      'dateFormat',
      ['MM/dd/yyyy', 'MMMM d, yyyy h:mm aa', 'dd-M-yyyy hh:mm:ss', 'dd MMMM yyyy', 'd MMM yyyy'],
      'dd MMMM yyyy',
      groupIdSelect
    ),
    dropdownMode: select('dropdownMode', ['scroll', 'select'], 'select', groupIdSelect),

    // Text
    name: text('name', 'expiryAt', groupIdText),
    nextMonthButtonLabel: text('nextMonthButtonLabel', 'Next Month', groupIdText),
    nextYearButtonLabel: text('nextYearButtonLabel', 'Next Year', groupIdText),
    placeHolderText: text('placeHolderText', 'Click to select time', groupIdText),
    previousMonthButtonLabel: text('previousMonthButtonLabel', 'Previous Month', groupIdText),
    previousYearButtonLabel: text('previousYearButtonLabel', 'Previous Year', groupIdText),
    timeCaption: text('timeCaption', 'Time', groupIdText),
    timeInputLabel: text('timeInputLabel', 'Time', groupIdText),
    todayButton: text('todayButton', '', groupIdText)
  }

  return knobs
}
