import GamePlay from "../Components/GamePlay";
import { render,screen,fireEvent } from "@testing-library/react";
import React from 'react'

describe("GamePlay Component",()=>{
   test("dice image is showing after rendering GamePlay component",()=>{
    render(<GamePlay/>)
    const image = screen.getByAltText("Dice 1");
    expect(image).toBeInTheDocument();
    
    const text=screen.getByText(/click on dice to roll/i);
    expect(text).toBeInTheDocument();
  

    


   })

})
