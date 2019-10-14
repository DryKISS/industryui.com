# Navbar

Navbar utilises the HTML5 nav tag with classes to define style and positioning

## Requirements

- Brand / Logo
- Links
- Button
- Rollup to Hmaburger mobile menu

## Links

- [Tailwise](https://zpl.io/V4vpORJ)
- [Bootstrap](https://getbootstrap.com/docs/4.1/components/navbar/)
- [Semantic](https://react.semantic-ui.com/collections/menu)

## Props

- brand:
- links:

## Usage

```html
<Nav items={items} pathname={pathname} inverted={inverted} />
```

## Example of items

```javascript
const items = [
  { name: "Home", path: "/", exact: true },
  { name: "About", path: "/about/", exact: true },
  { name: "Blog", path: "/blog/", exact: false },
];

If `exact` is `false`, any `pathname` that starts with `path` will provide an active item.
```

If `exact` is `false`, any `pathname` that starts with `path` will provide an
active item.

They will be rendered in the order they are provided and within a `<Menu.Item>`
element.

### Pathname

This property will define the path the app is at the moment, and if is the same
`path` as one of the `items`, that one will be rendered as `active`.
