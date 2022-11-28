import React from "react";
import styled from "styled-components";

export class LogoComponent extends React.Component{
    render() {
        return(
            <LogoContainer>
                <LogoImage src="https://img.icons8.com/ios-filled/36/52d67a/shopping-bag.png"/>
            </LogoContainer>
        )
    }
}

const LogoContainer = styled.nav`
  text-align: center;
`
const LogoImage = styled.img`
`