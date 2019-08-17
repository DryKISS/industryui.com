/**
 * Container
 */
export const Container = ({ story }) => {
  return (
    <div style={{ margin: '1rem' }}>
      {story()}
    </div>
  )
}
