# Full Calendar

## Events

### Main properties

* `id` (string or integer) - unique identifier
* `allDay` (boolean) - if `start` or `end` include time, `allDay` will be automatically set to `false`
* `end` (date) - when an event finishes
* `start` (date) - when an event begins
* `title` (string) - the text that will appear on an event.
* `url` (string) - a URL that will be visited when an event is clicked

### Recurring events

* `daysOfWeek` (array) - an array of integers representing days of the week an event repeats (e.g. [0, 1])
* `endRecur` (date) - when recurrences of an event end
* `endTime` (date) - when recurrences of an event start
* `startRecur` (time) - the time of day the event ends
* `startTime` (time) - the time of day the event starts

### Styling properties

* `backgroundColor` (string) - any of the CSS color formats
* `borderColor` (string)
* `className` (string or array) - determines which HTML classNames will be attached to the rendered event
* `color` (string) - backgroundColor and borderColor at the same time
* `textColor` (string) - event’s text color

### Custom properties

Any custom properties can be added to the event object (e.g. 'description'). They will be transferred to event's `extendedProps` (e.g. `event.extendedProps.description`).


## Links

- https://fullcalendar.io/docs/react
