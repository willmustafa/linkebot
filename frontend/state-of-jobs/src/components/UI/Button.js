import styled from "styled-components"
import PropTypes from 'prop-types'
import PixelImg from '../../images/pixel.png'
import PixelImgPurple from '../../images/pixel2.png'

const Button = styled.button`
    position: relative;
    width: 180px;
    height: 60px;
    margin: 20px 0;
    line-height: 60px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    color: var(--color-white);
    trasnition: var(--speed-normal);
    border: 1px solid var(--color-red);
    background: var(--background);
    &:hover {
      border: 1px solid transparent;
      background: var(--color-red) url(${PixelImg}); // 360px x 1080px
      transition-delay: 0.8s;
      background-size: 180px;
      animation: animate var(--speed-fast) steps(8) forwards;
    }
    &.purple{
      border: 1px solid var(--color-purple);
      &:hover {
        background: var(--color-purple) url(${PixelImgPurple}); // 360px x 1080px
      }
    }
  }
  @keyframes animate {
    0% {
      background-position-y: 0;
    }
    100% {
      background-position-y: -480px;
    }  
`

Button.propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default Button