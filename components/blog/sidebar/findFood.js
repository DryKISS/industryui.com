/**
 * Blog - Find Food
 * Allows a user to link to Deliveroo
 *
 * There are two variants of the Find Food tool:
 * - Postcode entry as seen on: https://deliveroo.co.uk/
 *   - Calls API to get the location to redirect too
 * - Google Maps as seen on: https://deliveroo.ie/
 *
 * <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
 */

// React
import { useState } from 'react'
import { oneOf } from 'prop-types'

// Form
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'

// UI
import {
  Button,
  FormError,
  Form,
  FormField,
  FormLabel,
  Icon,
  InputGroup,
  InputGroupAddon,
  Link,
  validatorPostCode
} from '../../'

import { BlogSection } from './components'

// Style
import styled from 'styled-components'

const schema = yup.object().shape({
  postCode: yup
    .string()
    .required()
    .test('is-valid', "We couldn't recognise that postcode - check and try again.", value =>
      validatorPostCode(value)
    )
})

export const BlogFindFood = ({ colour }) => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  })
  const [msg, setMsg] = useState(false)

  const url = 'https://chat.drykiss.com/api/httpsDeliverooRestaurants'
  const domain = 'deliveroo.co.uk'

  const submit = data => {
    // Fetch restaurant service
    window
      .fetch(`${url}/${domain}/${data.postCode}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        return response.json()
      })
      .then(res => {
        window.open(`https://${domain}${res.url}`, '_self')
      })
      .catch(error => {
        setMsg(`We don’t deliver there yet: ${error.message}`)
      })
  }

  return (
    <BlogSection>
      <StyledContainer colour={colour}>
        <StyledForm handleSubmit={handleSubmit(submit)}>
          <FormLabel text='Your favourite restaurants, delivered.'>
            <InputGroup>
              <FormField
                errors={errors}
                register={register}
                name='postCode'
                placeholder='Enter your postcode'
              />

              <InputGroupAddon>
                <Button
                  content='Find food'
                  style={{ background: '#440063', borderColor: '#32004a' }}
                  type='submit'
                />
              </InputGroupAddon>

              {errors.postCode && <FormError message={errors.postCode.message} />}
              {msg && <div style={{ color: '#fff' }}>{msg}</div>}
            </InputGroup>
          </FormLabel>
        </StyledForm>

        <Link to={`https://${domain}`} passHref target='_blank'>
          <StyledA>
            Deliveroo <Icon icon='external-link' />
          </StyledA>
        </Link>
      </StyledContainer>
    </BlogSection>
  )
}

const StyledContainer = styled.div`
  background-color: ${props => (props.colour === 'beetroot' ? '#e2004f' : '#4e0064')};
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

// <%# FIND FOOD - uses AutocompleteController %>
// <section data-mapkey="<%= data.google.api %>" class="find-food" ng-controller="AutocompleteController as autocomplete">

//     <%# Google autocomplete %>
//     <%= partial 'partials/social/google/autocomplete.erb', locals: {
//       country: t(:'findFood.country'),
//       button: true} %>

//     <%# Modal body %>
//     <% body = capture_html do %>

//       <p><%= t(:'findFood.modal.pin') %></p>

//       <%# Google automcomplete %>
//       <%= partial 'partials/social/google/autocomplete.erb', locals: {
//         extraClass: 'sr-only',
//         country: t(:'findFood.country'),
//         button: false
//       } %>

//       <div class="embed-responsive embed-responsive-16by9">
//         <div class="google-map embed-responsive-item"></div>
//       </div>

//     <% end %>

//     <%# Modal footer %>
//     <% footer = capture_html do %>

//       <div class="pull-left">
//         <%= partial 'partials/atom/button.erb', locals: {
//           buttonSize: 'lg',
//           text: :'findFood.modal.cancel',
//           data: {dismiss: 'modal'}
//         } %>
//       </div>

//       <%= partial 'partials/atom/button.erb', locals: {
//         buttonSize: 'lg',
//         context: 'primary',
//         text: :'findFood.modal.confirm',
//         ng: { click: "autocomplete.modalConfirm('#{t(:'findFood.url')}')" }
//       } %>

//     <% end %>

//     <%# Map Modal %>
//     <%= partial 'partials/molecule/modal.erb', locals: {
//       body: body,
//       footer: footer,
//       id: 'placesModal',
//       title: :'findFood.modal.title'
//     } %>

//   </div>

// </section>

// &.affix {
//   position: fixed;
//   top: 60px;
//   width: 360px;
// }

// &.affix-bottom {
//   position: absolute;
//   width: 360px;
// }

// .modal-header {
//   background-color: $brand-primary;
//   padding: 30px;
//   text-align: center;

//   h4 {
//     color: #fff;
//     font-size: 24px;
//   }

//   .close {
//     line-height: 34px;
//     margin: 0;
//     opacity: 0.5;
//   }
// }

// .modal-body {
//   color: #000;
//   padding: 15px 0;

//   p {
//     color: #575b5b;
//     text-align: center;
//   }
// }

// &__error {
//   background-color: #b5ea44;
//   color: #3e3e3e;
//   font-size: 13px;
//   line-height: 16px;

//   p {
//     margin: 0;
//     padding: 10px 15px;
//   }
// }

// @media only screen and (min-width: 320px) and (max-width: 992px) {
//   &__position {
//     left: 0;
//     padding: 15px 25px;
//     position: fixed;
//     top: 60px;
//     z-index: 1000;
//   }

//   label {
//     font-size: 20px;
//     line-height: 20px;
//     margin-bottom: 20px;
//     width: 90%;
//   }
// }
// }
