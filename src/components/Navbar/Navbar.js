import React, { useState } from 'react'
import { FaBars, FaTimes, FaHome, FaUser, FaBoxes, FaPhone } from "react-icons/fa"
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
                <Nav className="sticky-top nav navbar nav-bar">
                    <NavLogo>
                        <NavIcon to="/">PORT<NavSubIcon>FOLIO</NavSubIcon></NavIcon>
                    </NavLogo>
                    <MobileIcon
                        className="ml-auto"
                        onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu
                        className="ml-auto"
                        onclick={handleClick}
                        click={click}>
                        <NavItem>
                            <NavLinks to="/" onClick={closeMobileMenu} >
                                Home {click ? <FaHome className="text-secondary pb-1" /> : null}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about" onClick={closeMobileMenu} >
                                About {click ? <FaUser className="text-secondary pb-1" /> : null}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/projects" onClick={closeMobileMenu} >
                                Projects {click ? <FaBoxes className="text-secondary pb-1" /> : null}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact" onClick={closeMobileMenu} >
                                Contact {click ? <FaPhone className="text-secondary pb-1" /> : null}
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
