const randomFloat = ({ minimum, maximum }) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
export default randomFloat
