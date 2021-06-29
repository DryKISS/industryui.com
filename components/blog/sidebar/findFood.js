/**
 * Blog - Find Food
 * Allows a user to link to Deliveroo
 *
 * There are two variants of the Find Food tool:
 * - Postcode entry as seen on: https://deliveroo.co.uk/
 *   - Calls API to get the location to redirect too
 * - Google Maps as seen on: https://deliveroo.ie/
 *
 * <script type="text/javascript"
 * src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
 */

// React
import React, { useState } from 'react'
import { oneOf } from 'prop-types'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// Style
import styled from 'styled-components'

// UI
import BlogSection from './components/section'
import Button from '../../atoms/button/button/button'
import FormError from '../../form/error/error'
import Form from '../../form/form/form'
import FormField from '../../form/field/input'
import FormLabel from '../../form/label/label'
import Icon from '../../atoms/icon/icon/icon'
import InputGroup from '../../form/inputGroup/group'
import InputGroupAddon from '../../form/inputGroup/addon'
import Link from '../../atoms/link/link'
import { validatorPostCode } from '../../utils/validator/postCode/postCode'

const schema = object().shape({
  postCode: string()
    .required()
    .test('is-valid', "We couldn't recognise that postcode - check and try again.", (value) =>
      validatorPostCode(value)
    )
})

const BlogFindFood = ({ colour }) => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  })
  const [msg, setMsg] = useState(false)

  const url = 'https://chat.drykiss.com/api/httpsDeliverooRestaurants'
  const domain = 'deliveroo.co.uk'

  const submit = (data) => {
    // Fetch restaurant service
    window
      .fetch(`${url}/${domain}/${data.postCode}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        return response.json()
      })
      .then((res) => {
        window.open(`https://${domain}${res.url}`, '_self')
      })
      .catch((error) => {
        setMsg(`We don’t deliver there yet: ${error.message}`)
      })
  }

  return (
    <BlogSection>
      <StyledContainer colour={colour}>
        <StyledForm handleSubmit={handleSubmit(submit)}>
          <FormLabel text="Your favourite restaurants, delivered.">
            <InputGroup>
              <FormField
                errors={errors}
                register={register}
                name="postCode"
                placeholder="Enter your postcode"
              />

              <InputGroupAddon>
                <Button
                  content="Find food"
                  style={{ background: '#440063', borderColor: '#32004a' }}
                  type="submit"
                />
              </InputGroupAddon>

              {errors.postCode && <FormError message={errors.postCode.message} />}
              {msg && <div style={{ color: '#fff' }}>{msg}</div>}
            </InputGroup>
          </FormLabel>
        </StyledForm>

        <Link to={`https://${domain}`} passHref target="_blank">
          <StyledA>
            Deliveroo <Icon icon="external-link" />
          </StyledA>
        </Link>
      </StyledContainer>
    </BlogSection>
  )
}

const StyledContainer = styled.div`
  background-color: ${(props) => (props.colour === 'beetroot' ? '#e2004f' : '#4e0064')};
  color: #fff;
  line-height: 22px;
  margin: 0 -10px;
  padding: 30px 15px 20px;
`

const StyledForm = styled(Form)`
  .Form-label {
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }
`

const StyledA = styled.span`
  color: #fff;
  display: block;
  font-size: 0.75rem;
  text-align: right;

  &:hover,
  &:focus {
    color: #bdbaba;
  }
`

BlogFindFood.propTypes = {
  colour: oneOf(['beetroot', 'aubergine'])
}

BlogFindFood.defaultProps = {
  colour: 'beetroot'
}

export default BlogFindFood
