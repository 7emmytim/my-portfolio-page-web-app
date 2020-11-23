import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const Nav = styled.nav`
background: #0f2453;
width: 100%;
display: flex;
font-size: 1.2rem;
margin: 0 auto;
padding: 5px 80px;

@media screen and (max-width: 991px) {
    padding: 10px 35px; 
}
`
export const NavLogo = styled.div`
font-family: 'Federo', sans-serif;
font-weight: 600;
margin-top: 10px;
margin-bottom: 10px;
`

export const NavIcon = styled(NavLink)`
text-decoration: none;
color: #ffce14;
font-size: 2rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 5px;
padding: 0;

&:hover {
    text-decoration: none;
    color: #ffce14;
}

@media screen and (max-width: 400px) {
    font-size: 1.5rem; 
}
`

export const NavSubIcon = styled.span`
color: #fff;
`

export const NavCaption = styled.p`
text-transform: uppercase;
letter-spacing: 3.7px;
font-size: 0.578rem;
color: #c79f07;
font-family: 'Federo', sans-serif;
font-weight: 600;
margin: 0;

@media screen and (max-width: 400px) {
    font-size: 0.4rem; 
}
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 3vh;
    right: 6vh;
    font-size: 1.3rem;
    cursor: pointer;
}

@media screen and (max-width: 400px) {
    top: 2vh;
    right: 6vh;
}
`

export const NavMenu = styled.ul`
display: flex;
list-style: none;
margin-left: auto;
margin-top: 18px;
font-weight: 200;
text-transform: uppercase;

@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 50px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0f2453;
    padding: 3vh 0;
}

@media screen and (max-width: 400px) {
    top: 40px;
}
`
export const NavItem = styled.li`
margin: 0 15px;

&:hover {
    border-bottom: 3px solid #ffce14;
}

@media screen and (max-width: 960px) {
    margin: 40px auto;
    width: 100%;

    &:hover {
        border-bottom: none;
    }
    
}
`
export const NavLinks = styled(NavLink)`
color: #fff;
display: flex;
font-size: 1rem;
text-decoration: none;

&:hover {
        color: #ffce14;
        transition: all 0.3s ease;
        text-decoration: none;
} 

@media screen and (max-width: 960px) {
    color: #fff;
    font-size: 1.1rem;
    text-align: center;
    width: 100%;
    display: table;
}
`