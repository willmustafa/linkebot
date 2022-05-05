import styled from "styled-components"

export const Content = styled.div`
    width: 100%;
    min-height: 100vh;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
`

export const Section = styled.section`
    width: 100%;
    display: block;
    padding: 5% 10% 5% 10%;

    &.hero{
        background: white;
        padding: 0 !important;
        height: 100vh;
        position: relative;
    }
`