import React from 'react';
import Footer from '../../footer';
import renderer from 'react-test-renderer';

it('footer-renderer', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
});