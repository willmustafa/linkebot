import styled from "styled-components"
import PropTypes from "prop-types"

const SubtitleJumbo = styled.div`
flex: 0 1 100%;
max-width: 100%%;
box-sizing: border-box;
padding: 0px;
display: flex;
align-items: flex-end;

    & p{
        margin-bottom: 130px;
        display: block;
        font-size: 1.5rem;
        line-height: 2.25rem;
        margin-top: 0px;
    }
`

SubtitleJumbo.propTypes = {
	children: PropTypes.node.isRequired
}

export default SubtitleJumbo