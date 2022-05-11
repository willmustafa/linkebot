import styled from "styled-components"
import { Link } from "react-scroll"

export const Nav = styled.nav`
    min-width: 270px;
    max-width: 270px;
    background: var(--primary);
    color: #fff;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    position: relative;
    min-height: 100vh;
    z-index: 20;
    margin-left: ${({isOpen}) => (isOpen ? "0" :  "-270px")}
`

export const NavbarCollapse = styled.div`
    display: inline-block;
    position: fixed;
    top: 20px;
    left: ${({isOpen}) => (isOpen ? "235px" :  "-35px")};
    margin-right: -20px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
`

export const NavbarWrapper = styled.div`
    padding: 1.5rem !important;
    position: fixed;
`

export const NavLogo = styled(Link)`
    display: block;
    margin-bottom: 20px;
    color: #fff;
    text-decoration: none;

    & span{
        color: #fff;
        font-weight: bold;
        font-size: 30px;
    }
`

export const NavList = styled.ul`
    padding: 0;
    margin-bottom: 3rem;
    list-style: none;
`

export const NavItem = styled.li`

`

export const NavLinkC = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const NavFooter = styled.div`
    position: fixed;
    bottom: 20px;
    width: 200px;
`

export const NavCopy = styled.p`
    font-size: 16px
`

export const NavButton = styled.button`
background: transparent;
border-color: transparent;
width: 60px;
height: 60px;
border-radius: 50%;
position: relative;
color: #fff;
cursor: pointer;
padding-right: 7px !important;
text-align: right;

& span{
    font-size: 36px
}

&::after {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    background: var(--primary);
    border-radius: 10px;
  }
& svg{
    margin-right: -30px;
    font-size: 18px;
}
`