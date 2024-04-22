import React from 'react'
import renderer from 'react-test-renderer'
import Message1 from './Message1'

test("Message snapshot with 2 parameters", () => {
    const component = renderer.create(<Message1 text1="Hello, Aditya!" message="Welcome" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})