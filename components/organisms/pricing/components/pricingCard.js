/**
 * Components - Pricing
 */

// Style
import styled from 'styled-components'

// UI
import { Icon, priceLayoutSizes, Text } from '../../../'

export const PricingCard = ({ data, layout, onCardSelect }) => {
  const { checkList, recommended, price } = data
  return (
    <Wrapper layout={layout} recommended={recommended}>
      <Title recommended={recommended}>{data.title}</Title>
      <ChecklistWrapper>
        {checkList.map((item, index) => {
          return (
            <ListItem key={index}>
              <Icon
                color={recommended ? 'rgb(255, 202, 16)' : 'rgb(69, 186, 190)'}
                icon='check'
                prefix='fas'
              />
              <StyledText
                content={item.title}
                context={recommended ? 'white' : 'dark'}
                size={priceLayoutSizes(layout).featuresTextSize}
              />
            </ListItem>
          )
        })}
      </ChecklistWrapper>
      <FlexSpacer />
      <Fee
        align='center'
        content={price}
        context={recommended ? 'white' : 'deepBlue'}
        recommended={recommended}
        size='xl'
      />
      <AddButtonWrapper onClick={() => onCardSelect(data)}>
        <AddToCartText
          align='center'
          content='Add To Cart'
          context={recommended ? 'white' : 'deepBlue'}
          size='sm'
        />
      </AddButtonWrapper>
    </Wrapper>
  )
}
const AddToCartText = styled(Text)`
  font-weight: 700;
`
const AddButtonWrapper = styled.div`
  cursor: pointer;
  padding-top: 0.75rem;
`
const FlexSpacer = styled.div`
  flex: 1;
`
const Fee = styled(Text)`
  border-bottom: 1px solid
    ${({ theme, recommended }) => (recommended ? theme.COLOUR.white : theme.COLOUR.black)};
  font-weight: 700;
  line-height: 1rem;
  padding-bottom: 1.25rem;
`
const StyledText = styled(Text)`
  line-height: 1.25rem;
  padding-left: 0.375rem;
`
const ListItem = styled.div`
  align-items: center;
  display: flex;
`
const ChecklistWrapper = styled.div`
  padding-top: 0.75rem;
`
const Title = styled.p`
  border-bottom: 1px solid
    ${({ theme, recommended }) => (recommended ? theme.COLOUR.white : theme.COLOUR.dark)};
  color: ${({ theme, recommended }) => (recommended ? theme.COLOUR.white : theme.COLOUR.dark)};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  padding-bottom: 1.25rem;
  text-align: center;
`
const Wrapper = styled.div`
  background-color: ${({ theme, recommended }) =>
    recommended ? theme.COLOUR.darkBlue : theme.COLOUR.watterBlue};

  border: ${({ theme, recommended }) => (recommended ? 'none' : `1px solid ${theme.COLOUR.dark}`)};
  border-radius: 1rem;

  box-shadow: ${({ theme, recommended }) =>
    recommended ? `0px 3px 8px ${theme.COLOUR.darkBlue}` : 'none'};

  display: flex;
  flex-direction: column;
  margin: 0 0.375rem;
  min-height: ${({ layout }) => priceLayoutSizes(layout).priceCardHeight};
  min-width: ${({ layout }) => priceLayoutSizes(layout).priceCardWidth};
  padding: 1.375rem;
  padding-bottom: 0.75rem;
`
