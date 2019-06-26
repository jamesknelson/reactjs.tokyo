import styled from 'styled-components/macro'
import { colors, radii, shadows } from 'theme'

const Card = styled.div`
  background-color: ${colors.structure.bg};
  border: 1px solid ${colors.structure.border};
  box-shadow: ${props =>
    props.raised ? shadows.raisedCard() : shadows.card()};
  border-radius: ${props => radii[props.radius] || props.radius || 0};
  position: relative;
`

Card.defaultProps = {
  radius: 'small',
}

export default Card
