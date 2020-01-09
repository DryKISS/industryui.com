# Select

Select component

## Links

- https://react.semantic-ui.com/elements/select

## Data

The data passed into the select must be of the form:

```js
{
  disabled: true,
  text: 'Month',
  value: ''
}
```

## Usage

```javascript
<Select
  change='{change}'
  id='addresses'
  label='Select your address'
  options='{postcodeAddresses}'
  value='{addresses}'
/>
```
