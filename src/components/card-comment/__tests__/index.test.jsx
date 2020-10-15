import React from 'react';
import CardComment from '../../card-comment';
import renderer from 'react-test-renderer';

it('card-comment-renderer', () => {
    const tree = renderer.create(
        <CardComment
            image={"patient's url img "}
            coment={"comentário"}
            grading={3}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});