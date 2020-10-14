import React from "react";
import renderer from "react-test-renderer";

import SvgContainer from "../index";

describe("Renders", () => {
  it("shows", () => {
    const tree = renderer.create(<SvgContainer svgExtra="" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
