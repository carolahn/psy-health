import { shallow } from "enzyme";
import React from "react";

import Register from "../../../pages/register";
import RegisterContainer from "../index";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn(() => ({ pathname: "/cadastro" })),
  useHistory: jest.fn(() => ({ push: () => {} })),
}));

describe("Renders", () => {
  it("tests if has Register component", () => {
    const wrapper = shallow(<RegisterContainer />);
    expect(wrapper.find(Register)).toBeTruthy();
  });
});
