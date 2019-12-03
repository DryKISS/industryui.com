import DatePicker from 'react-datepicker'
import { placements } from 'react-popper'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import 'react-datepicker/dist/react-datepicker.css'

const StyledInput = styled.input`
  font-size: 0.81rem;
  border-radius: 0.25rem;
  box-shadow: inset 0 0.125rem 0.125rem #e9e9e9;
  border: 1px solid #aeaeae;
  line-height: 1rem;
  padding: 0.375rem 0.625rem 0.3125rem;
  min-width: 11.875rem; /* 190px */

  &:focus {
    outline: none;
    border-color: #aeaeae;
    box-shadow: inset 0 0.125rem 0.125rem #e9e9e9, 0 0 0.625rem 0 rgba(73, 107, 125, 0.3);
  }
`

export const CalendarDatePicker = props => {
  return <DatePicker {...props} customInput={<StyledInput />} />
}

CalendarDatePicker.propTypes = {
  adjustDateOnChange: PropTypes.bool,
  allowSameDay: PropTypes.bool,
  ariaLabelledBy: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  calendarClassName: PropTypes.string,
  calendarContainer: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  customInput: PropTypes.element,
  customInputRef: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  dateFormatCalendar: PropTypes.string,
  dayClassName: PropTypes.func,
  disabled: PropTypes.bool,
  disabledKeyboardNavigation: PropTypes.bool,
  dropdownMode: PropTypes.oneOf(['scroll', 'select']).isRequired,
  endDate: PropTypes.instanceOf(Date),
  excludeDates: PropTypes.array,
  filterDate: PropTypes.func,
  fixedHeight: PropTypes.bool,
  formatWeekNumber: PropTypes.func,
  highlightDates: PropTypes.array,
  id: PropTypes.string,
  includeDates: PropTypes.array,
  includeTimes: PropTypes.array,
  injectTimes: PropTypes.array,
  inline: PropTypes.bool,
  isClearable: PropTypes.bool,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ locale: PropTypes.object })]),
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  monthsShown: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func,
  onWeekSelect: PropTypes.func,
  onClickOutside: PropTypes.func,
  onChangeRaw: PropTypes.func,
  onFocus: PropTypes.func,
  onInputClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onMonthChange: PropTypes.func,
  onYearChange: PropTypes.func,
  onInputError: PropTypes.func,
  open: PropTypes.bool,
  onCalendarOpen: PropTypes.func,
  onCalendarClose: PropTypes.func,
  openToDate: PropTypes.instanceOf(Date),
  peekNextMonth: PropTypes.bool,
  placeholderText: PropTypes.string,
  popperContainer: PropTypes.func,
  popperClassName: PropTypes.string, // <PopperComponent/> props
  popperModifiers: PropTypes.object, // <PopperComponent/> props
  popperPlacement: PropTypes.oneOf(placements), // <PopperComponent/> props
  popperProps: PropTypes.object,
  preventOpenOnFocus: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  scrollableYearDropdown: PropTypes.bool,
  scrollableMonthYearDropdown: PropTypes.bool,
  selected: PropTypes.instanceOf(Date),
  selectsEnd: PropTypes.bool,
  selectsStart: PropTypes.bool,
  showMonthDropdown: PropTypes.bool,
  showPreviousMonths: PropTypes.bool,
  showMonthYearDropdown: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
  strictParsing: PropTypes.bool,
  forceShowMonthNavigation: PropTypes.bool,
  showDisabledMonthNavigation: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  startOpen: PropTypes.bool,
  tabIndex: PropTypes.number,
  timeCaption: PropTypes.string,
  title: PropTypes.string,
  todayButton: PropTypes.node,
  useWeekdaysShort: PropTypes.bool,
  formatWeekDay: PropTypes.func,
  value: PropTypes.string,
  weekLabel: PropTypes.string,
  withPortal: PropTypes.bool,
  yearDropdownItemNumber: PropTypes.number,
  shouldCloseOnSelect: PropTypes.bool,
  showTimeInput: PropTypes.bool,
  showMonthYearPicker: PropTypes.bool,
  showQuarterYearPicker: PropTypes.bool,
  showTimeSelect: PropTypes.bool,
  showTimeSelectOnly: PropTypes.bool,
  timeFormat: PropTypes.string,
  timeIntervals: PropTypes.number,
  minTime: PropTypes.instanceOf(Date),
  maxTime: PropTypes.instanceOf(Date),
  excludeTimes: PropTypes.array,
  useShortMonthInDropdown: PropTypes.bool,
  clearButtonTitle: PropTypes.string,
  previousMonthButtonLabel: PropTypes.string,
  nextMonthButtonLabel: PropTypes.string,
  previousYearButtonLabel: PropTypes.string,
  nextYearButtonLabel: PropTypes.string,
  timeInputLabel: PropTypes.string,
  renderCustomHeader: PropTypes.func,
  renderDayContents: PropTypes.func,
  wrapperClassName: PropTypes.string,
  inlineFocusSelectedMonth: PropTypes.bool,
  onDayMouseEnter: PropTypes.func,
  onMonthMouseLeave: PropTypes.func,
  showPopperArrow: PropTypes.bool
}

CalendarDatePicker.defaultProps = DatePicker.defaultProps
