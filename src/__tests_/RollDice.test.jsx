import React from "react";
import {render,fireEvent,screen} from '@testing-library/react'


import RollDice from '../Components/RollDice';
const mockOnRoll = jest.fn();
const mockResetScore = jest.fn();

test('renders "Click on dice to roll" text', () => {
  render(<RollDice onRoll={mockOnRoll} resetScore={mockResetScore} />);
  
  const instructionText = screen.getByText(/Click on dice to roll/i);
  expect(instructionText).toBeInTheDocument();
});

