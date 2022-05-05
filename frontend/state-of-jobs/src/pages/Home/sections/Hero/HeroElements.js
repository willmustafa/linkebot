import styled from "styled-components";
import heroImage from '../../../../images/background-hero.png'

export const ImgHero = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${heroImage});
    background-size: contain;
    background-position-x: right;
    background-position-y: bottom;
    background-repeat: no-repeat;
`

export const HeroWrapper = styled.div`
position: absolute;
top: 10%;
left: 10%;
width: 40vw
`

export const Title = styled.h1`
color: black;
font-size: 5rem;
font-weight: bold;
text-transform: uppercase;
`

export const Subtitle = styled.h2`
color: black;
font-size: 1.5rem;
line-height: 1.8rem;
`