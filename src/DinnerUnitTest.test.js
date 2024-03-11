import React from "react";
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Diners from "./Diners";

describe('Diners component', () => {
    test('Submit button should be disabled initially', () => {
        render(<Diners />);

        const submitButton = screen.getByText('Book Now');
        expect(submitButton).toBeDisabled();
    })

    test('Submit button should be enabled when date and time are selected', () => {
        render(<Diners />);

        const dateInput = screen.getByLabelText('DATE');
        const timeInput = screen.getByLabelText('TIME');

        fireEvent.change(dateInput, { target: '2024-03-08'})
        fireEvent.change(timeInput, { target: {value: '10:00 AM'}})

        const submitButton = screen.getByText('Book Now');
        expect(submitButton).toBeEnabled();
    })

})