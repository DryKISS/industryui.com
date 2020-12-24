/**
 * Components - Forms - Currency Input
 */

// React
import { bool, func, number, object, oneOfType, node, string } from 'prop-types'

// UI
import { FormField, FormLabel, InputGroup, InputGroupAddon } from '../../'

export const CurrencyInput = ({
  children,
  currencySymbol,
  errors,
  label,
  min,
  name,
  register,
  show,
  style,
  size,
  vat
}) => {
  const defaultOptions = {
    error: errors[name]
  }

  return (
    <FormLabel show={show} label={label}>
      <InputGroup {...defaultOptions}>
        <InputGroupAddon {...defaultOptions} addonType='prepend' text size={size}>
          {currencySymbol}
        </InputGroupAddon>

        <FormField
          errors={errors}
          min={min}
          name={name}
          register={register}
          style={style}
          size={size}
          step='any'
          type='number'
        />

        {vat && (
          <>
            <InputGroupAddon {...defaultOptions} addonType='append' text size={size}>
              {vat}
            </InputGroupAddon>
            {children}
          </>
        )}
      </InputGroup>
    </FormLabel>
  )
}

CurrencyInput.propTypes = {
  children: node,
  currencySymbol: oneOfType([object, string]),
  errors: object.isRequired,
  label: string.isRequired,
  min: number,
  name: string.isRequired,
  register: func.isRequired,
  show: bool,
  style: node,
  size: string,
  vat: oneOfType([string, bool])
}

CurrencyInput.defaultProps = {
  currencySymbol: '£',
  min: 0,
  show: true,
  size: 'md',
  vat: 'Incl VAT'
}
