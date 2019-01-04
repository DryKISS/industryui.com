# Pagination

Create a pagable tool for users to navigate to additional data

## Props

- activePage: number
- onPageChange: function)
- text: string (a text that can appear next to the current page)
- totalPages: number

## Links

- https://scotch.io/tutorials/build-custom-pagination-with-react
- https://getbootstrap.com/docs/4.1/components/pagination/

## Usage

<Pagination
  totalRecords={}
  pageLimit={}
  pageNeighbours={}
  onPageChanged={}
/>

```html
<Pagination
  activePage={1}
  onPageChange={() => onPageChange()}
  totalPages={10}
/>
```
