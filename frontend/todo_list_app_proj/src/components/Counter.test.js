import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Counter from './Counter'

describe('Counter component', () => {

    it('render with initial count', () => {
        const { getByText } = render(<Counter initialCount={5} />);

        expect(getByText('Count: 5')).toBeInTheDocument()
    })

    it('increment count on clicking increment button', () => {

        const { getByText } = render(<Counter initialCount={0} />);

        fireEvent.click(getByText('Increment')) // checking name of the button        
        expect(getByText('Count: 1')).toBeInTheDocument()

    })

    it('decrement count on clicking decrement button', () => {

        const { getByText } = render(<Counter initialCount={0} />);

        fireEvent.click(getByText('Decrement')) // checking name of the button        
        expect(getByText('Count: -1')).toBeInTheDocument()

    })

    it('increment count on clicking increment button', () => {

        const { getByText } = render(<Counter initialCount={10} />);

        fireEvent.click(getByText('Increment')) // checking name of the button
        fireEvent.click(getByText('Decrement')) // checking name of the button  
        
        expect(getByText('Count: 10')).toBeInTheDocument()

    })
})