import React from "react";
import { CardListDiv } from "../Styles/CardListStyle";
import Card from "./Card";
import { HeaderSubDiv, HeaderSubText } from "../Styles/HeaderStyle";


export default function CardList(){
    return(
        <CardListDiv>
            <HeaderSubDiv>
                <HeaderSubText>
                    Cards
                </HeaderSubText>
            </HeaderSubDiv>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </CardListDiv>
          
        
    );

}