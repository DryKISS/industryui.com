# Link

Link component to create the differentiation between internal and external links.

## Usage

```html
<Link to={to} />
```

// // Mailto Type
// type === 'mailto'
//   ? <a
//     href={`mailto:${to}`}
//     {...other}
//   />

//   // Test for an external link
//   : /^https?:\/\//.test(to)
//     ? <a
//       href={to}
//       target='_blank'
//       {...other}
//     />
//     : <NextLink activeClassName='active' to={to} {...other} />
