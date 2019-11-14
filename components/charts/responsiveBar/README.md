# Bar

## Links

- [Nivo Bar Docs](https://nivo.rocks/bar/)
- [Nivo's Bar Source](https://github.com/plouc/nivo/blob/master/packages/bar/src/Bar.js)
- [Nivo's ResponsiveBar Source](https://github.com/plouc/nivo/blob/master/packages/bar/src/ResponsiveBar.js)
- [HTML](https://www.w3schools.com/tags/tag_button.asp)

## Usage

```javascript
const testData = [
  {
    product: 'IPhone',
    profit: 160000
  },
  {
    product: 'IPad',
    profit: 50000
  },
  {
    product: 'Mac',
    profit: 100000
  },
  {
    product: 'Other Products',
    profit: 20000
  }
]

const BarComponent = ({ testData }) => (
  <Bar
    data={testData} // mandatory
    bottomLegend={'Products'} // ?string. Default undefined
    context={'primary'} // ?string<...CONTEXT> Default 'primary'
    colorBy={'id'} // ?string<'id' | 'index'>. Default 'id'
    enableGridX={false} // ?boolean. Default: false
    enableGridY={true} // ?boolean. Default: true
    groupMode={'stacked'} // ?string<'stacked' | 'grouped'>. Default 'stacked'
    indexBy={'profit'} // ?string. Default: 'id'
    isInteractive={false} // ?boolean
    keys={keys}
    layout={'vertical'} // ?string<'horizontal' | 'vertical'>. Default 'vertical'
    leftLegend={'Profit'} // ?string. Default: undefined
    minValue={0} // ?number. Default: 'auto'
    maxValue={160000} // ?number. Default: 'auto
    reverse={false} // ?boolean. Default: false
  />
)
```
