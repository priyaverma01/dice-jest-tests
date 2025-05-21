//App.test.jsx
import React from "react";
import {render,fireEvent,screen} from '@testing-library/react'
import App from "../App";
import GamePlay from "../Components/GamePlay";

describe("App component",()=>{
    it("renders home component initially",()=>{
        render(<App/>)
        fireEvent.click(screen.getByRole('button',{name:/Play Now/i}))
    })
    it("renders the gameplay component when play now button is clicked",()=>{
        render(<App/>)
        fireEvent.click(screen.getByRole('button',{name:/Play Now/i}))
        render(<GamePlay/>)
    })


})

