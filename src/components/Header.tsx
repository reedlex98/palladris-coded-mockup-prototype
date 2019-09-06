import React from 'react'
import { Container, Hero, HeroHeader, Navbar, NavbarMenu, NavbarItem, NavbarBrand, NavbarEnd } from 'bloomer'
const Header : React.FC = () => {
    return (
        <Hero className="header" isSize='medium'>
            <HeroHeader>
                <Container> 
                    <Navbar>
                        <NavbarBrand>
                            <NavbarItem  className="navbar-brand">Palladris Brokers</NavbarItem>
                        </NavbarBrand>
                        <NavbarMenu>
                            <NavbarEnd>
                                <NavbarItem  className="navbar-item">Home</NavbarItem>
                                <NavbarItem  className="navbar-item">Services</NavbarItem>
                                <NavbarItem  className="navbar-item">About</NavbarItem>
                                <NavbarItem  className="navbar-item">Team</NavbarItem>
                                <NavbarItem  className="navbar-item">Contact</NavbarItem>
                                <NavbarItem  className="navbar-item">Logout</NavbarItem>
                            </NavbarEnd>
                        </NavbarMenu>
                    </Navbar>
                </Container>
            </HeroHeader>
        </Hero>
    )
}

export default Header