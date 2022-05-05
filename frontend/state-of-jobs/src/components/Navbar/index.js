import React, {useReducer} from 'react'
import {Nav, NavbarCollapse, NavbarWrapper, NavCopy, NavFooter, NavItem, NavLinkC, NavList, NavLogo, NavButton} from './NavbarElements'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isOpen, toggle] = useReducer(p => !p, false);

  return (
        <Nav isOpen={isOpen} >
          <NavbarCollapse isOpen={isOpen}>
            <NavButton id="sidebarCollapse" type="button" className='btn' onClick={toggle}>
              <FontAwesomeIcon icon={faBars} />
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
                Feito por Willian Mustafa -- Acesse meu Github!
              </NavCopy>
            </NavFooter>
          </NavbarWrapper>
        </Nav>
  )
}

export default Navbar