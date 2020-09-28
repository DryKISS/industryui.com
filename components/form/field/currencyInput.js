/**
 * Components - Forms - Currency Input
 */

// React
import { bool, func, number, object, oneOfType, node, string } from 'prop-types'

// UI
import { FormField, FormLabel, InputGroup, InputGroupAddon } from '../../'

export const CurrencyInput = ({
  currencySymbol,
  errors,
  label,
  min,
  name,
  register,
  show,
  style,
  size,
  theme,
  vat
}) => {
  return (
    <FormLabel show={show} label={label}>
      <InputGroup theme={theme} error={errors[name]}>
        <InputGroupAddon addonType='prepend' error={errors[name]} text theme={theme} size={size}>
          {currencySymbol}
        </InputGroupAddon>

        <FormField
          errors={errors}
          min={min}
          name={name}
          register={register}
          style={style}
          size={size}
          withAddon
          step='any'
          type='number'
        />

        {vat && (
          <InputGroupAddon addonType='append' error={errors[name]} text theme={theme} size={size}>
            Inc VAT
          </InputGroupAddon>
        )}
      </InputGroup>
    </FormLabel>
  )
}

CurrencyInput.propTypes = {
  currencySymbol: oneOfType([object, string]),
  errors: object.isRequired,
  label: string.isRequired,
  min: number,
  name: string.isRequired,
  register: func.isRequired,
  show: bool,
  style: node,
  vat: bool
}

CurrencyInput.defaultProps = {
  currencySymbol: '£',
  min: 0,
  show: true,
  vat: false
}
