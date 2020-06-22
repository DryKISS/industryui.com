# DatePicker - Calendar

Provides a Calendar widget to pick the day, month and year plus optionally the time.

We use the React datepicker library for this component, it is wrapped in a controlled component for
use with React Hook Form

## Date FNS

In each parent application we will need to register the locale where appropriate

```javascript
import enGB from 'date-fns/locale/en-GB'
```

Then pass it inside the locale property

```javascript
locale: enGB
```

## Links

[React Datepicker](https://reactdatepicker.com/)
[React Hook Form Controlled](https://codesandbox.io/s/react-hook-form-and-react-date-picker-wrapped-at-controller-2zz2z)
[date-fns](https://date-fns.org/)
