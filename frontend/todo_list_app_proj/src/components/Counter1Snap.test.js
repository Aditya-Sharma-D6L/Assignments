import React from 'react'
import renderer from 'react-test-renderer'
import Counter1 from './Counter1'


test("Counter1 snapshot with different count", () => {
    const component = renderer.create(<Counter1 />)

    // initial rendering
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
    // simulate a user clicking the button
    tree.children[1].props.onClick();
    
    // re-rendering after the click event
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})