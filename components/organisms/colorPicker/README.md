## Links

[React Color Github](https://casesandberg.github.io/react-color/)

# Props

## Circle:

width - String, Pixel value for picker width. Default 252px
colors - Array of Strings, Color squares to display. Default ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]
circleSize - Number, Value for circle size. Default 28
circleSpacing - Number, Value for spacing between circles. Default 14
onSwatchHover - An event handler for onMouseOver on the <Swatch>s within this component. Gives the args (color, event)

## Github:

width - String, Pixel value for picker width. Default 200px
colors - Array of Strings, Color squares to display. Default ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']
triangle - String, Either hide, top-left or top-right. Default top-left
onSwatchHover - An event handler for onMouseOver on the <Swatch>s within this component. Gives the args (color, event)

## Sketch

disableAlpha - Bool, Remove alpha slider and options from picker. Default false
presetColors - Array of Strings or Objects, Hex strings for default colors at bottom of picker. Default ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
presetColors may also be described as an array of objects with color and title properties: [{ color: '#f00', title: 'red' }] or a combination of both

width - Number, Width of picker. Default 200
renderers - Object, Use { canvas: Canvas } with node canvas to do SSR
onSwatchHover - An event handler for onMouseOver on the <Swatch>s within this component. Gives the args (color, event)

## Twitter

width - String, Pixel value for picker width. Default 276px
colors - Array of Strings, Color squares to display. Default ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF']
triangle - String, Either hide, top-left or top-right. Default top-left
onSwatchHover - An event handler for onMouseOver on the <Swatch>s within this component. Gives the args (color, event)
