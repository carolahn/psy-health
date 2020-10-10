import { mount } from "../../../containers/search-filter/__tests__/node_modules/enzyme";
import React from "react";
import PsychologistList from "../index";
import StyledPsychologistList from "../styled";
import CardPsychologist from '../../card-psychologist'

describe("<PsychologistList />", () => {
  const wrapper = mount(<PsychologistList psychologists={[{ name: "joao" }, { name: "pedro" }]} />);

  it("renders corectly", () => {
    expect(wrapper.find(StyledPsychologistList).children().find(CardPsychologist)).toHaveLength(2);
  });
});
