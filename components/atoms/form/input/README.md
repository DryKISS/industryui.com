# Input

Input component

## Links

- [Input Tag](https://www.w3schools.com/tags/tag_input.asp)
- [React Forms](https://reactjs.org/docs/forms.html)
- [Boostrap Forms](https://getbootstrap.com/docs/4.1/components/forms)
- [Botstrap Input Group](https://getbootstrap.com/docs/4.1/components/input-group/)
- [Semantic React Input](https://react.semantic-ui.com/elements/input)
- [React Strap](https://github.com/reactstrap/reactstrap/blob/master/src/Input.js)

## Usage

```html
<Input text="This is a button" />
```


<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">@</span>
  </div>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<InputGroup>
  <InputGroupAddon addonType="prepend">@</InputGroupAddon>
  <Input placeholder="username" />
</InputGroup>


/* Input Group stuff */
/* position: relative;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
width: 1%;
margin-bottom: 0;

&:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
} */

// .Input-large {
//   border-radius: .3rem;
//   font-size: 1.25rem;
//   height: calc(2.875rem + 2px);
//   padding: .5rem 1rem;
// }

// .Input-small {
//   font-size: .875rem;
//   border-radius: .2rem;
//   height: calc(1.8125rem + 2px);
//   padding: .25rem .5rem;
// }

// .sr-only {
//   border: 0;
//   clip: rect(0, 0, 0, 0);
//   height: 1px;
//   padding: 0;
//   position: absolute;
//   overflow: hidden;
//   white-space: nowrap;
//   width: 1px;
// }