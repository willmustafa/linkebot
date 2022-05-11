import React, {useReducer} from "react"
import {Nav, NavbarCollapse, NavbarWrapper, NavCopy, NavFooter, NavItem, NavLinkC, NavList, NavLogo, NavButton} from "./NavbarElements"
import ConfigStrings from "../../strings/text-strings.json"

const Navbar = () => {
	const [isOpen, toggle] = useReducer(p => !p, true)

	return (
		<Nav isOpen={isOpen} >
			<NavbarCollapse isOpen={isOpen}>
				<NavButton id="sidebarCollapse" type="button" className="btn menu-link" onClick={toggle}>
					<span>+</span>
				</NavButton>
			</NavbarCollapse>
			<NavbarWrapper>
				<NavLogo to="home">
					<span>{ConfigStrings.website.title}</span>
				</NavLogo>
				<NavList>
					<NavItem>
						<NavLinkC activeClass="active" className="menu-link" to="main-hero" spy={true} smooth={true}>
                  Home
						</NavLinkC>
					</NavItem>
					<NavItem>
						<NavLinkC activeClass="active" className="menu-link" to="sobre" spy={true} smooth={true}>
                  Sobre
						</NavLinkC>
					</NavItem>
					<NavItem>
						<NavLinkC activeClass="active" className="menu-link" to="vagas" spy={true} smooth={true}>
                  Vagas
						</NavLinkC>
					</NavItem>
					<NavItem>
						<NavLinkC activeClass="active" className="menu-link" to="mercado" spy={true} smooth={true}>
                  O Mercado
						</NavLinkC>
					</NavItem>
					<NavItem>
						<NavLinkC activeClass="active" className="menu-link" to="tendencia-mundial" spy={true} smooth={true}>
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