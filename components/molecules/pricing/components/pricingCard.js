import { Icon, Text } from 'components'
import styled from 'styled-components'

export const PricingCard = ({ data }) => {
  const { checkList, dark, price } = data
  return (
    <Wrapper dark={dark}>
      <Title dark={dark}>{data.title}</Title>
      <ChecklistWrapper>
        {checkList.map((item, index) => {
          return (
            <ListItem key={index}>
              <Icon
                color={dark ? 'rgb(255, 202, 16)' : 'rgb(69, 186, 190)'}
                icon='check'
                prefix='fas'
              />
              <StyledText content={item.title} context={dark ? 'white' : 'blackText'} size='xxs' />
            </ListItem>
          )
        })}
      </ChecklistWrapper>
      <FlexSpacer />
      <Fee
        align='center'
        content={price}
        context={dark ? 'white' : 'deepBlue'}
        dark={dark}
        size='xl'
      />
      <AddButtonWrapper>
        <AddToCartText
          align='center'
          content='Add To Cart'
          context={dark ? 'white' : 'deepBlue'}
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
  padding-top: 0.75rem;
`
const FlexSpacer = styled.div`
  flex: 1;
`
const Fee = styled(Text)`
  border-bottom: 1px solid ${({ theme, dark }) => (dark ? theme.COLOUR.white : theme.COLOUR.black)};
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
    ${({ theme, dark }) => (dark ? theme.COLOUR.white : theme.COLOUR.darkGrey)};
  color: ${({ theme, dark }) => (dark ? theme.COLOUR.white : theme.COLOUR.blackText)};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  padding-bottom: 1.25rem;
  text-align: center;
`
const Wrapper = styled.div`
  background-color: ${({ theme, dark }) =>
    dark ? theme.COLOUR.darkBlue : theme.COLOUR.watterBlue};

  border: ${({ theme, dark }) => (dark ? 'none' : `1px solid ${theme.COLOUR.darkGrey}`)};
  border-radius: 1rem;

  box-shadow: ${({ theme, dark }) => (dark ? `0px 3px 8px ${theme.COLOUR.darkBlue}` : 'none')};

  display: flex;
  flex-direction: column;
  margin: 0 0.375rem;
  min-height: 20.25rem;
  min-width: 12.75rem;
  padding: 1.375rem;
  padding-bottom: 0.75rem;
`
