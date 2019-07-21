/**
 * Blog - Find Food
 * Allows a user to link to Deliveroo
 *
 * There are two variants of the Find Food tool:
 * - Postcode entry as seen on: https://deliveroo.co.uk/
 *   - Calls API to get the location to redirect too
 * - Google Maps as seen on: https://deliveroo.ie/
 *
 * @todo Get the version from the config file
 * @todo Need to localise this copy
 * @todo Need to make good for mobile - stick to the top hidden-xs hidden-sm visible-md visible-lg
 * @todo Need to change button colour based on beetroot or aubergine - swap
 * @todo Need to set up an API Key for Deliveroo
 *
 * <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
 */

// React
import { useState } from 'react'
import { oneOf } from 'prop-types'

// UI
import {
  Button,
  Form,
  Icon,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  Link,
  useChange,
  validatorPostCode
} from '../../'

import { BlogSection } from './components'

// Style
import styled from 'styled-components'

export const BlogFindFood = ({ colour }) => {
  const INITIAL_STATE = {
    postCode: '',
    versionPostCode: false
  }

  const [change, form] = useChange(INITIAL_STATE)
  const [msg, setMsg] = useState(false)

  const { postCode, versionPostCode } = form
  const url = 'https://chat.drykiss.com/api/httpsDeliverooRestaurants'
  const domain = 'deliveroo.co.uk'

  const submit = (e) => {
    setMsg(false)

    if (!validatorPostCode(postCode)) {
      setMsg(`We couldn't recognise that postcode - check and try again.`)
      return
    }

    // versionPostCode || versionGoogle
    if (versionPostCode) {
      if (!validatorPostCode(postCode)) {
        setMsg(`We couldn't recognise that postcode - check and try again.`)
        return
      }

      // Fetch restaurant service
      window.fetch(`${url}/${domain}/${postCode}`)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }

          return response.json()
        })
        .then((data) => {
          console.log('Success', data)
          window.open(`https://${domain}${data.url}`, '_self')
        })
        .catch((error) => {
          console.log('Error', error)
          setMsg('We don’t deliver there yet')
        })
    } else {
      console.log('GOOGLE')
    }
  }

  return (
    <BlogSection>
      <StyledContainer colour={colour}>

        <StyledForm submit={submit}>

          <Label text={'Your favourite restaurants, delivered.'}>

            <InputGroup>

              <Input
                change={change}
                id='postCode'
                placeholder='Enter your postcode'
                value={postCode}
              />

              <InputGroupAddon>
                <Button
                  content='Find food'
                  style={{ background: '#440063', borderColor: '#32004a' }}
                  type='submit'
                />
              </InputGroupAddon>

              <div className='Form-feedback' style={{ color: '#fff' }} />

              {msg &&
                <div style={{ color: '#fff' }}>
                  {msg}
                </div>
              }

            </InputGroup>

          </Label>

        </StyledForm>

        <Link to={`http://${domain}`} passHref>
          <StyledA target='_blank'>
            Deliveroo{' '}
            <Icon icon='external-link' />
          </StyledA>
        </Link>

      </StyledContainer>
    </BlogSection>
  )
}

const StyledContainer = styled.div`
  background-color: ${props => props.colour === 'beetroot' ? '#e2004f' : '#4e0064'};
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

const StyledA = styled.a`
  color: #fff;
  display: block;
  font-size: .75rem;
  text-align: right;

  &:hover, &:focus {
    color: #bdbaba;
  }
`

BlogFindFood.propTypes = {
  colour: oneOf(['beetroot', 'aubergine'])
}

BlogFindFood.defaultProps = {
  colour: 'beetroot'
}

//   <%# FIND FOOD - uses AutocompleteController %>
//   <section data-mapkey="<%= data.google.api %>" class="find-food" ng-controller="AutocompleteController as autocomplete">

//       <%# Google autocomplete %>
//       <%= partial 'partials/social/google/autocomplete.erb', locals: {
//         country: t(:'findFood.country'),
//         button: true} %>

//       <%# Modal body %>
//       <% body = capture_html do %>

//         <p><%= t(:'findFood.modal.pin') %></p>

//         <%# Google automcomplete %>
//         <%= partial 'partials/social/google/autocomplete.erb', locals: {
//           extraClass: 'sr-only',
//           country: t(:'findFood.country'),
//           button: false
//         } %>

//         <div class="embed-responsive embed-responsive-16by9">
//           <div class="google-map embed-responsive-item"></div>
//         </div>

//       <% end %>

//       <%# Modal footer %>
//       <% footer = capture_html do %>

//         <div class="pull-left">
//           <%= partial 'partials/atom/button.erb', locals: {
//             buttonSize: 'lg',
//             text: :'findFood.modal.cancel',
//             data: {dismiss: 'modal'}
//           } %>
//         </div>

//         <%= partial 'partials/atom/button.erb', locals: {
//           buttonSize: 'lg',
//           context: 'primary',
//           text: :'findFood.modal.confirm',
//           ng: { click: "autocomplete.modalConfirm('#{t(:'findFood.url')}')" }
//         } %>

//       <% end %>

//       <%# Map Modal %>
//       <%= partial 'partials/molecule/modal.erb', locals: {
//         body: body,
//         footer: footer,
//         id: 'placesModal',
//         title: :'findFood.modal.title'
//       } %>

//     </div>

//   </section>

//   // Affix
//   //--------------------------------------------------------------------------//
//   &.affix {
//     position: fixed;
//     top: 60px;
//     width: 360px;
//   }

//   &.affix-bottom {
//     position: absolute;
//     width: 360px;
//   }

//   // Modal header
//   //--------------------------------------------------------------------------//
//   .modal-header {
//     background-color: $brand-primary;
//     padding: 30px;
//     text-align: center;

//     h4 {
//       color: #fff;
//       font-size: 24px;
//     }

//     .close {
//       line-height: 34px;
//       margin: 0;
//       opacity: 0.5;
//     }
//   }

//   // Modal
//   //--------------------------------------------------------------------------//
//   .modal-body {
//     color: #000;
//     padding: 15px 0;

//     p {
//       color: #575b5b;
//       text-align: center;
//     }
//   }

//   // Error
//   //--------------------------------------------------------------------------//
//   &__error {
//     background-color: #b5ea44;
//     color: #3e3e3e;
//     font-size: 13px;
//     line-height: 16px;

//     p {
//       margin: 0;
//       padding: 10px 15px;
//     }
//   }

//   // Media queries - Mobile
//   //--------------------------------------------------------------------------//
//   @media only screen and (min-width: 320px) and (max-width: 992px) {
//     // Label
//     //------------------------------------------------------------------------//
//     &__position {
//       left: 0;
//       padding: 15px 25px;
//       position: fixed;
//       top: 60px;
//       z-index: 1000;
//     }

//     // Label
//     //------------------------------------------------------------------------//
//     label {
//       font-size: 20px;
//       line-height: 20px;
//       margin-bottom: 20px;
//       width: 90%;
//     }
//   }
// }
