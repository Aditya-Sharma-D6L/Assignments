import React from 'react'
import renderer from 'react-test-renderer'
import Message from './Message'

test('Message snapshot with different text', () => {
    const component = renderer.create(<Message text="Hello, Jest!" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
