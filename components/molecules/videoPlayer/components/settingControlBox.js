import styled from 'styled-components'
import Row from '../../../atoms/grid/Row'
import Space from '../../../atoms/space/space'
import ButtonToolbar from '../../../atoms/button/toolbar/toolbar'
import Button from '../../../atoms/button/button/button'
import THEME_SIZE from '../../../constants/size'

const args = {
  size: THEME_SIZE.MD,
  colour: 'white'
}

const QualityToolbar = ({ quality = '1024' }) => {
  const isActive = (current) => (quality === current ? 'white' : 'transparent')
  return (
    <Row justify={'center'}>
      <Space marginRight="sm" marginBottom="sm">
        <ButtonToolbar {...args}>
          <Button content="1024" size="sm" context={isActive('1024')} onClick={() => []} />
          <Button content="760" size="sm" context={isActive('760')} onClick={() => []} />
          <Button content="480" size="sm" context={isActive('480')} onClick={() => []} />
          <Button content="320" size="sm" context={isActive('320')} onClick={() => []} />
          <Button content="128" size="sm" context={isActive('128')} onClick={() => []} />
        </ButtonToolbar>
      </Space>
    </Row>
  )
}

const SpeedToolbar = ({ speed, handleVideoSpeed }) => {
  const isActive = (current) => (speed === current ? 'white' : 'transparent')

  return (
    <Row justify={'center'}>
      <ButtonToolbar {...args}>
        <Button
          content="0.50x"
          size="sm"
          context={isActive(0.5)}
          onClick={() => handleVideoSpeed(0.5)}
        />
        <Button content="1x" size="sm" context={isActive(1)} onClick={() => handleVideoSpeed(1)} />
        <Button
          content="1.25x"
          size="sm"
          context={isActive(1.25)}
          onClick={() => handleVideoSpeed(1.25)}
        />
        <Button content="2x" size="sm" context={isActive(2)} onClick={() => handleVideoSpeed(2)} />
        <Button content="5x" size="sm" context={isActive(5)} onClick={() => handleVideoSpeed(5)} />
      </ButtonToolbar>
    </Row>
  )
}
const SettingControlBox = ({ speed, handleSubtitle, handleVideoSpeed }) => (
  <SettingControlBoxWrapper>
    <h2>Settings</h2>
    <h3>Quality</h3>
    <QualityToolbar />
    <br />
    <h3>Speed</h3>
    <SpeedToolbar speed={speed} handleVideoSpeed={handleVideoSpeed} />
    <br />
    <ChooseSubtitle>
      <h3>Language</h3>
      <div>
        <p>Choose your language:</p>
        <select onChange={handleSubtitle} name="subtitle" id="subtitle">
          <option value="en">English</option>
          <option value="ja">Japan</option>
          <option value="de">Germany</option>
        </select>
      </div>
    </ChooseSubtitle>
  </SettingControlBoxWrapper>
)

const ChooseSubtitle = styled.div`
  > div {
    display: flex;
  }
`
const SettingControlBoxWrapper = styled.div`
  color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  background: rgba(102, 102, 102, 0.5);
  position: absolute;
  bottom: 60px;
  right: 10px;
  width: 325px;
  height: 300px;
  z-index: 100;
  overflow: hidden;
  h2,
  h3 {
    padding: 0px;
    margin: 0px;
    font-size: 14px;
  }
  h2 {
    text-align: center;
    font-size: 20px;
  }
`

export default SettingControlBox
