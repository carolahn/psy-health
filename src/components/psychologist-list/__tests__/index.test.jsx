import { mount } from "enzyme";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PsychologistList from "../index";
import StyledPsychologistList from "../styled";
import CardPsychologist from '../../card-psychologist'

jest.mock("react", () => ({
  // mock do useState
  ...jest.requireActual("react"),
}));

jest.mock("react-redux", () => ({
  // mock do useDispatch e do useSelector
  useDispatch: jest.fn(),
  useSelector: jest.fn(() => {}),
}));


describe("<PsychologistList />", () => {

 

  const wrapper = mount(<PsychologistList psychologists={[{ name: "joao", description:'teste apenas um test' }, { name: "pedro" , description:'teste apenas um test'}]} />);

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
