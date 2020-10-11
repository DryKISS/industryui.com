Create a pageable tool for users to navigate to any additional data

## Props

- activePage: number
- onPageChange: function)
- text: string (a text that can appear next to the current page)
- totalPages: number

## Links

[Bootstrap](https://getbootstrap.com/docs/4.3/components/pagination/)
[Tutorial](https://scotch.io/tutorials/build-custom-pagination-with-react)

## Usage

```javascript
<Pagination activePage={1} onPageChange={() => onPageChange()} totalPages={10} />
```
