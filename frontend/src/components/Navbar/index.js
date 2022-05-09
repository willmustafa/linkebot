import React, {useReducer} from 'react'
import {Nav, NavbarCollapse, NavbarWrapper, NavCopy, NavFooter, NavItem, NavLinkC, NavList, NavLogo, NavButton} from './NavbarElements'

const Navbar = () => {
  const [isOpen, toggle] = useReducer(p => !p, true);

  return (
        <Nav isOpen={isOpen} >
          <NavbarCollapse isOpen={isOpen}>
            <NavButton id="sidebarCollapse" type="button" className='btn' onClick={toggle}>
              +
            </NavButton>
          </NavbarCollapse>
          <NavbarWrapper>
            <NavLogo to='/'>
              <span>State of Jobs</span>
            </NavLogo>
            <NavList>
              <NavItem>
                <NavLinkC to='/'>
                  Home
                </NavLinkC>
              </NavItem>
              <NavItem>
                <NavLinkC to='/sobre'>
                  Sobre
                </NavLinkC>
              </NavItem>
              <NavItem>
                <NavLinkC to='/vagas'>
                  Vagas
                </NavLinkC>
              </NavItem>
              <NavItem>
                <NavLinkC to='/mercado'>
                  O Mercado
                </NavLinkC>
              </NavItem>
              <NavItem>
                <NavLinkC to='/tendencia-mundial'>
                  Tendência Mundial
                </NavLinkC>
              </NavItem>
            </NavList>
            <NavFooter>
              <NavCopy>
                Feito por <a href="https://github.com/willmustafa">Willian Mustafa - Acesse meu Github!</a> 
              </NavCopy>
            </NavFooter>
          </NavbarWrapper>
        </Nav>
  )
}

export default Navbar