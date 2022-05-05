import styled from "styled-components"
import PropTypes from 'prop-types'

const TitleJumbo = styled.h1`
margin: 0 0 130px;
font-size: 5rem;
font-family: Bebas Neue;
letter-spacing: 9px;
`

TitleJumbo.propTypes = {
    children: PropTypes.node.isRequired
}

export default TitleJumbo