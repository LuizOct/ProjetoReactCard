import React from "react";
import { BG, BodyDiv } from "../Styles/MainPageStyle";
import Header from "./Header";
import Deck from "./Deck";
import CardList from "./CardList";



export default function MainPage (){
    return(
            
            <BG>
                <Header/>
                <BodyDiv>
                    <Deck/>
                    <CardList/>
                </BodyDiv>
                
            </BG>        
          
    );
    }