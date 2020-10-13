import React from "react";
import renderer from "react-test-renderer";

import BannerSearch from "../index";

it("render correctly BannerSearch", () => {
  const tree = renderer.create(<BannerSearch />).toJSON();

  expect(tree).toMatchSnapshot();
});
