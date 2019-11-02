import React, { Component } from 'react'
import MenuOpen from "../../images/menu-open.svg";
import {Button} from "react-materialize"

export class CustomButton extends Button {
    
    render() {
        const style = {
            menu: {
              marginLeft: "10px",
              marginTop: "5%",
              width: "3vh"
            }
        }
           
        return (
              <img src={MenuOpen} alt="menu-open-toggle" style={style.menu} />
        )
    }
        
    
}

export default CustomButton
