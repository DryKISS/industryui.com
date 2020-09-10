import { shadeLinearRgb } from '../../'

export const ERROR_STYLE = ({ theme }) => {
  return `
    background: ${shadeLinearRgb(0.9, theme.COLOUR.error)};
    border-color: ${theme.COLOUR.error};
    border-image: initial;
    border-style: solid;
    border-width: 1px 1px 1px 5px;
  `
}
export const inputBorderRadius = '0.25rem'
