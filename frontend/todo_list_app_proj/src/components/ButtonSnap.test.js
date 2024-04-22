import React from 'react'
import Button from './ButtonSnap'
import renderer from 'react-test-renderer'

test('Button Snapshot', () => {

    const component = renderer.create(<Button label="Click me" />)

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})
