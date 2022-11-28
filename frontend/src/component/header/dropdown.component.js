import React from "react";
import styled from "styled-components";
import CurrenciesButtonComponent from "./currenciesButton.component";
import DraverButtonComponent from "./draverButton.component";


export class DropdownComponent extends React.Component{
    render() {
        return(
            <DropdownContainer>
                <NavBar>
                    <DropMenu>
                        <DropItem>
                          <CurrenciesButtonComponent/>
                        </DropItem>
                        <DropItem>
                          <DraverButtonComponent/>
                        </DropItem>
                    </DropMenu>
                </NavBar>
            </DropdownContainer>
        )

    }
}

const DropdownContainer = styled.nav`
  .drop-links {
    position: relative;
    text-decoration: none;
    text-align: center;
    vertical-align: center;
    color: black;
    list-style: none;
    padding: 0 30px;
    font-size: 18px;
  }
  .button {
    background: none;
    border: none;
  }
`

const NavBar = styled.nav`
`
const DropMenu = styled.ul`
`
const DropItem = styled.li`
display: inline;
`
