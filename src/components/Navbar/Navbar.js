import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
    Nav, NavLogo,
    NavIcon, NavSubIcon,
    MobileIcon, NavMenu, NavItem,
    NavLinks
} from "./Navbar.elements"

const NavBar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav className="sticky-top">
                    <NavLogo>
                        <NavIcon to="/">PORT<NavSubIcon>FOLIO</NavSubIcon></NavIcon>
                    </NavLogo>
                    <MobileIcon
                        style={click ? null : { border: "1px solid #ffce14", padding: "0 8px 8px" }}
                        onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu
                        onclick={handleClick}
                        click={click}>
                        <NavItem>
                            <NavLinks to="/" onClick={closeMobileMenu} >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about" onClick={closeMobileMenu} >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/projects" onClick={closeMobileMenu} >Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact" onClick={closeMobileMenu} >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
