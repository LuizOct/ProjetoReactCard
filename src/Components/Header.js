import React from "react";
import { HeaderDiv, HeaderText, HeaderTextFlex } from "../Styles/HeaderStyle";

export default function Header(){
    return(
        <HeaderDiv>
            <HeaderTextFlex>
                <HeaderText>
                    Deck Builder
                </HeaderText>
            </HeaderTextFlex>
        </HeaderDiv>
    );

}