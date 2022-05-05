import styled from "styled-components";
import PropTypes from 'prop-types'

const Title = styled.h3`
position: relative;
font-size: 2.75rem;
font-weight: bold;
margin-bottom: 1rem;
`

Title.propTypes = {
    children: PropTypes.node.isRequired
}

export default Title