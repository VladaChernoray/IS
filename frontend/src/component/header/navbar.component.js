import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'

export class NavbarComponent extends React.Component{
    render() {
        return (
            <NavbarContainer>
                    <ul>
                        <NavItem>
                            <Link to= '/category' className='nav-links link-hover'> TECH</Link>
                        </NavItem>
                        <NavItem>
                            <Link to= '/category' className='nav-links link-hover'>CLOTHES</Link>
                        </NavItem>
                    </ul>
            </NavbarContainer>
        )
    }
}

const NavItem =  styled.li`
display: inline;
`
const NavbarContainer = styled.nav`
  .nav-links {
    position: relative;
    font-family: 'Raleway', sans-serif;
    list-style: none;
    text-decoration: none;
    font-size: 16px;
    color: black;
    padding: 0 15px;
  }
  .link-hover:after {
    content: "";
    position: absolute;
    background-color: #52D67A;
    height: 2px;
    width: 0;
    left: 0;
    bottom: -35px;
    transition: 0.4s;
  }
  .link-hover:hover:after {
    width: 100%;
  }
  .link-hover:hover {
    color: #52D67A;
  }
`
