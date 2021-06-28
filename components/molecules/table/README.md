Table

Expectation is that sorting and paginations is handled on the server side.

## Links

[Bootstrap Table](https://getbootstrap.com/docs/4.3/content/tables/)
[Semantic UI](https://react.semantic-ui.com/collections/table/)
[React Simple Table](http://kyleamathews.github.io/react-simple-table/)

## Sorting

Sorting is done by passing in the identifier for the column object.

The sortName refers to the column identifier sort.item, if this is set then we assume the column
should adopt the sorting features.

```javascript
{
  sortName: 'id',
  text: 'ID'
}
```

For a table to utilse sorting completely then we need to pass in the state handler on the Table
component, sort and setSort are the state controls.

```javascript
const [sort, setSort] = useState({
  item: 'company',
  order: 'asc'
})
```


```html
<Table
  columns={columns}
  loading={loading}
  paginationSize={paginationSize}
  pagination
  paginationProps={{
    currentPage,
    onPageChange: handlePageChange,
    onPageSizeChange: handlePageSizeChange,
    pageCount: Math.ceil(meta.aggregate.totalCount / pageSize),
    perPage: pageSize
  }}
  rowClick={rowClick}
  rows={rows}
  sort={sort}
  setSort={handleSort}
/>
```

Inside the table head component we manage the sorting with the following methods, this simply flicks
the sorting of the clicked header

```javascript
const handleSort = ({ hasSort, sort, setSort, sortName }) => {
  setSort({
    item: sortName,
    order: sort.order === 'asc' ? 'desc' : 'asc'
  })
}
```