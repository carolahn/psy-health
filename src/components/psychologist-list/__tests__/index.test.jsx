import { mount } from "enzyme";
import React from "react";
import PsychologistList from "../index";
import StyledPsychologistList from "../styled";
import CardPsychologist from '../../card-psychologist'

describe("<PsychologistList />", () => {
  const wrapper = mount(<PsychologistList psychologists={[{ name: "joao" }, { name: "pedro" }]} />);

  it("renders corectly", () => {
    expect(wrapper.find(StyledPsychologistList).children().find(CardPsychologist)).toHaveLength(2);
  });

  it(' snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('toBeTruthy', () => {
    expect(wrapper).toBeTruthy()
  })

});
