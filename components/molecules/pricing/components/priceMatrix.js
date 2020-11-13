import styled, { css } from 'styled-components'
import { Icon, LAYOUTS, Text } from 'components'
export const PriceMatrix = ({ layout, pricingInfo, selectedPlan }) => {
  const pure = {}
  const features = []
  pricingInfo.forEach(item => {
    item.checkList.forEach(feature => {
      if (!pure[feature.title.replace(/ /g, '')]) {
        pure[feature.title.replace(/ /g, '')] = feature
        features.push(feature.title)
      }
    })
  })

  const featureExist = ({ checkList }, feature) => {
    let exists = false
    for (let i = 0; i < checkList.length; i++) {
      const title = checkList[i].title
      if (title === feature) {
        exists = true
        break
      }
    }
    return exists
  }

  return (
    <PriceMatrixWrapper>
      <MatrixCol freeSize>
        {features.map((item, index) => {
          return (
            <FeatureNameColumn key={index} odd={index % 2 !== 0}>
              <Text content={item} context='black' size='xxs' />
            </FeatureNameColumn>
          )
        })}
      </MatrixCol>
      {pricingInfo.map((item, index) => {
        return (
          <MatrixCol
            key={index}
            show={layout === LAYOUTS.DESKTOP || selectedPlan === index}
            flex={layout !== LAYOUTS.DESKTOP}
          >
            {features.map((feature, idx) => {
              return (
                <FeatureCheckColumn odd={idx % 2 !== 0} key={idx}>
                  {featureExist(item, feature) ? (
                    <StyledIcon prefix='fas' icon='check' recommended={item.recommended ? 1 : 0} />
                  ) : (
                    ''
                  )}
                </FeatureCheckColumn>
              )
            })}
          </MatrixCol>
        )
      })}
    </PriceMatrixWrapper>
  )
}

const StyledIcon = styled(Icon).attrs(props => ({
  color: props.recommended ? props.theme.COLOUR.deepBlue : props.theme.COLOUR.darkGrey
}))``

const FeatureCheckColumn = styled.div`
  align-items: center;
  background-color: ${({ theme, odd }) => (odd ? theme.COLOUR.light : theme.COLOUR.white)};
  display: flex;
  justify-content: center;
  margin: 1px 0;
  min-height: 2.5rem;
`

const FeatureNameColumn = styled.div`
  align-items: center;
  background-color: ${({ theme, odd }) => (odd ? theme.COLOUR.light : theme.COLOUR.white)};
  border: 1px solid ${({ theme }) => theme.COLOUR.darkGrey};
  display: flex;
  margin: 1px 0;
  min-height: 2.5rem;
  padding-left: 1.875rem;
`
const MatrixCol = styled.div`
  margin: 0 0.375rem;
  ${({ freeSize }) =>
    freeSize &&
    css`
      flex: 1;
    `}

  ${({ freeSize, show, flex }) =>
    !freeSize &&
    css`
      display: ${show ? 'block' : 'none'};
      min-width: 13.5rem;
      margin: 0;
      ${flex && 'flex:1;'}
    `}
`
const PriceMatrixWrapper = styled.div`
  display: flex;
  width: 100%;
`
