import { shallow } from "enzyme";
import React from "react";

import DepoimentsFormContainer from "../../../containers/depoiments-form";
import Button from "../../button";
import DepoimentsOpenModal from "../index";

describe("Renders", () => {
  it("Button", () => {
    const wrapper = shallow(<DepoimentsOpenModal />);
    expect(wrapper.find(Button)).toBeTruthy();
  });

  it("DepoimentsFormContainer", () => {
    const wrapper = shallow(<DepoimentsOpenModal />);
    expect(wrapper.find(DepoimentsFormContainer)).toBeTruthy();
  });
});
