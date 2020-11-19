// UI
import styled from 'styled-components'

export const Preview = ({ file, placeHolderImageUrl, imageStyles, showName }) => {
  return file?.type.includes('image') ? (
    <PreviewImage src={URL.createObjectURL(file)} style={imageStyles} />
  ) : (
    <PlaceHolder>
      <FilePlaceHolder placeHolderImageUrl={placeHolderImageUrl} />
      {showName && file?.name}
    </PlaceHolder>
  )
}
const PreviewImage = styled.img`
  width: 100%;
`
const FilePlaceHolder = styled.div`
  background-image: url(${({ placeHolderImageUrl }) =>
    placeHolderImageUrl ??
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAYAAADL94L/AAAByElEQVR4Ae3axdJTQRAFYFyegA3u8ALseCDcicsGhxt3x+G32BXc3X3NBnfXYTqp3sZlhuqpOlXZRL46He9ReJyJxGSTEreaPfEHZiX+1uSJvelVNu+Jvjd7Yk9zI8aSUe0eDpjCIYfNSuw5v/zF5In/6mU27478tXriLJvXjdSwPq1lCDTCmxjiCNav8GZYBVMwWKagX8kWjk9vCcMhYWhEFEw1+oV0wZjdPKY6Vn9EwmBDTYPwBoXCYPLGDQTJjkHQNQRJj0FQtmgs+C8wOHIIkh2DoDu5vD5Xfkz9hsTBWDyxhjDYUDqvLRYSY1JilSQGyyxXOt4QKJPX70NDQmI27gyxHcn9bH/5RFMNAUgoDI4afOAMHBiCdiDNj5woGAhgsCEYudSI1lBCRwoPL957slAoDDYEoPXb/ZVs3FE/y9072fDxsx4BMPVfGOpl1VY/y5++4EWM1Fm9LcCKpy8RpnchDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxhYNlXiP+XHXLRDM5thQVpyzIfS2YtLceVEkRmzalsgMArPhp258bA6b/LEb8LqPM930VNdvY/fhMmCxw+Of+4BTcPInBo2AAAAAElFTkSuQmCC'});
  background-repeat: no-repeat;
  background-size: contain;
  height: 3rem;
  margin-bottom: 0.5rem;
  width: 3rem;
`
const PlaceHolder = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
