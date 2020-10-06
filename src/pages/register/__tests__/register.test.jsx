import { shallow } from "enzyme";
import React from "react";

import Register from "../index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: jest.fn(() => ({
    push: jest.fn(),
  })),
  useLocation: () => ({
    pathname: "localhost:3000/register",
  }),
}));

describe("Snapshot", () => {
  it("renders register", () => {
    const tree = shallow(<Register />);
    expect(tree).toMatchSnapshot();
  });

  it("renders register for psi", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useLocation: () => ({
        pathname: "localhost:3000/register/psi",
      }),
    }));
    const tree = shallow(<Register />);
    expect(tree).toMatchSnapshot();
  });
});
