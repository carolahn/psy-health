import React from 'react';
import CardPsychologist from '../../card-psychologist';
import renderer from 'react-test-renderer';

it('CardPsychologist-renderer', () => {
    const tree = renderer.create(
        <CardPsychologist
            image={"url-img"}
            name={'Name psyc'}
            description={'Abstract description about Psychologist'} crp="CRP"
            rating={2}
            specializations={'description specializations the Psychologist'}
            language={'language'}
            price={50}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});