import React from "react";
import Button from "./Button";

const ButtonList = () =>{

    const buttonName = ["All", "Shark Tank"];
    return(
        <div className="flex">
            {/*
                buttonName.map((btn,index) => {
                    <Button key={index}> {name=btn.name} </Button>
                 })
                 **/
            }

            
            <Button name="All"/>
            <Button name="News"/>
            <Button name="Technology"/>
            <Button name="Cricket"/>
            <Button name="Music"/>
            <Button name="Shark Tank"></Button>
            <Button name="Thrillers"/>
            <Button name="Comedy"/>
            <Button name="Cooking"/>
            <Button name="Recently Uploaded"/>

        </div>
    )
}

export default ButtonList;