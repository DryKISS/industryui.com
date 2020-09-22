/**
 * Date
 */

export const Date = ({ date }) => {
  return (
    <time dateTime={date} itemProp='datePublished' pubdate='pubdate'>
      {date}
    </time>
  )
}

Date.propTypes = {
  date (props, propName, component) {
    if (!(propName in props)) {
      return new Error(`${propName} is required in ${component} component`)
    }
    if (!props[propName].match()) {
      return new Error('please enter date by iso standard format')
    }
  }
}
