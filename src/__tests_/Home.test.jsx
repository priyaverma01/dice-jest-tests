    import React from "react";
    import {render,fireEvent,screen} from '@testing-library/react'
import Home from '../Components/Home';
// import dice from "../assets/dice.png";

describe('Home Component',()=>{
    it('renders the image heading and button',()=>{
        const toggleMock=jest.fn();
        render(<Home toggle={toggleMock}/>)

        //check for image 
        const image=screen.getByRole("img");
        expect(image).toBeInTheDocument();

        const heading=screen.getByText(/dice game/i);
        expect(heading).toBeInTheDocument();

        const button=screen.getByRole('button',{name:/Play Now/i})
        expect(button).toBeInTheDocument();
    })
    it('calles toggle function when button is clicked',()=>{
        const toggleMock=jest.fn();
        render(<Home toggle={toggleMock}/>)

        //check for fnction when clicked on button 
        const button=screen.getByRole('button',{name:/Play Now/i})
        fireEvent.click(button);

        //expect togglefunction to call at least once
        expect(toggleMock).toHaveBeenCalledTimes(1);
    })
})


