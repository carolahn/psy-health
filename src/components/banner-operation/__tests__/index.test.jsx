import React from "react";
import renderer from "react-test-renderer";

import BannerOperation from "../index";

it("render correctly BannerOperation", () => {
  const tree = renderer.create(<BannerOperation />).toJSON();

  expect(tree).toMatchSnapshot();
});
