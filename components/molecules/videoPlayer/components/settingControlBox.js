/**
 * Components - Molecules - Video Player - Component -  Setting Control Box
 */

// Styled
import styled from 'styled-components'

// UI
import ButtonToolbar from '../../../atoms/button/toolbar/toolbar'
import Button from '../../../atoms/button/button/button'
import Row from '../../../atoms/grid/Row'
import Space from '../../../atoms/space/space'
import THEME_SIZE from '../../../constants/size'

const args = {
  colour: 'white',
  borderRadius: '5px',
  border: '1px solid #ffffff',
  size: THEME_SIZE.MD
}

const QualityToolbar = ({ quality = '1024' }) => {
  const isActive = (current) => (quality === current ? 'white' : 'transparent')
  return (
    <Row justify={'center'}>
      <Space marginTop="sm">
        <ButtonToolbar {...args}>
          <Button
            context={'black'}
            content="1024dp"
            size="sm"
            context={isActive('1024')}
            onClick={() => []}
          />
          <Button content="760dp" size="sm" context={isActive('760')} onClick={() => []} />
          <Button content="480dp" size="sm" context={isActive('480')} onClick={() => []} />
          <Button content="320dp" size="sm" context={isActive('320')} onClick={() => []} />
          <Button content="128dp" size="sm" context={isActive('128')} onClick={() => []} />
        </ButtonToolbar>
      </Space>
    </Row>
  )
}

const SpeedToolbar = ({ handleVideoSpeed, speed }) => {
  const isActive = (current) => (speed === current ? 'white' : 'transparent')

  return (
    <Row justify={'left'}>
      <Space marginTop="sm" marginLeft="md">
        <ButtonToolbar {...args}>
          <Button
            content="0.50x"
            size="sm"
            context={isActive(0.5)}
            onClick={() => handleVideoSpeed(0.5)}
          />
          <Button
            content="1x"
            size="sm"
            context={isActive(1)}
            onClick={() => handleVideoSpeed(1)}
          />
          <Button
            content="1.25x"
            size="sm"
            context={isActive(1.25)}
            onClick={() => handleVideoSpeed(1.25)}
          />
          <Button
            content="2x"
            size="sm"
            context={isActive(2)}
            onClick={() => handleVideoSpeed(2)}
          />
          <Button
            content="5x"
            size="sm"
            context={isActive(5)}
            onClick={() => handleVideoSpeed(5)}
          />
        </ButtonToolbar>
      </Space>
    </Row>
  )
}
const SettingControlBox = ({ handleSubtitle, handleVideoSpeed, speed }) => (
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
    justify-content: space-between;
    select {
      width: 119px;
      height: 24px;
      margin-top: 16px;
    }
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
