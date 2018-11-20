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

```html
<Select
  handleChange={this.handleChange}
  id='addresses'
  label='Select your address'
  data={postcodeAddresses}
  value={addresses}
/>
```
