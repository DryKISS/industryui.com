import styled from 'styled-components'
export const Microphone = ({ isRecording, isLoading }) => {
  return (
    <StyledSvg
      isRecording={isRecording}
      isLoading={isLoading}
      width='15'
      height='22'
      viewBox='0 0 15 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M7.5 15.125C9.75938 15.125 11.5909 13.2782 11.5909 11V4.125C11.5909 1.8468 9.75938 0 7.5 0C5.24062 0 3.40909 1.8468 3.40909 4.125V11C3.40909 13.2782 5.24062 15.125 7.5 15.125ZM14.3182 8.25H13.6364C13.2597 8.25 12.9545 8.55766 12.9545 8.9375V11C12.9545 14.2141 10.2064 16.793 6.95497 16.4734C4.12117 16.1945 2.04545 13.6258 2.04545 10.7551V8.9375C2.04545 8.55766 1.74034 8.25 1.36364 8.25H0.681818C0.305114 8.25 0 8.55766 0 8.9375V10.6631C0 14.5148 2.72599 17.9485 6.47727 18.4701V19.9375H4.09091C3.7142 19.9375 3.40909 20.2452 3.40909 20.625V21.3125C3.40909 21.6923 3.7142 22 4.09091 22H10.9091C11.2858 22 11.5909 21.6923 11.5909 21.3125V20.625C11.5909 20.2452 11.2858 19.9375 10.9091 19.9375H8.52273V18.4864C12.1751 17.9811 15 14.8199 15 11V8.9375C15 8.55766 14.6949 8.25 14.3182 8.25Z' />
    </StyledSvg>
  )
}
const StyledSvg = styled.svg`
  path {
    fill: ${({ isLoading, isRecording, theme: { MESSAGING } }) =>
      isLoading
        ? MESSAGING.recorderLoadingStateColour
        : isRecording
        ? MESSAGING.recorderRecordingStateColour
        : MESSAGING.inputIconsColour};
  }
  &:hover {
    path {
      fill: ${({ isLoading, isRecording, theme: { MESSAGING } }) =>
        !isLoading && !isRecording && MESSAGING.inpotIconsHoverColour};
    }
  }
`
