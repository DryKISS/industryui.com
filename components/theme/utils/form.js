import { shadeLinearRgb } from '../../'

export const ERROR_STYLE = ({ theme }) => {
  return `
    background: ${shadeLinearRgb(0.9, theme.COLOUR.error)};
    border-color: ${theme.COLOUR.error};
    border-image: initial;
    border-style: solid;
    border-left-width: 0.5rem;
  `
}
export const inputBorderRadius = '0.25rem'
