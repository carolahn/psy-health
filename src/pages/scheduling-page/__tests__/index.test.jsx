import { shallow } from "enzyme";
import React from "react";

import Calendar from "../../../containers/calendar";
import PsiForm from "../../psi-page/psi-perfil/psi-form";
import SchedulingPage from "../index";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
}));

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(() => []),
}));

jest.mock("react-router-dom", () => ({
  useHistory: jest.fn(),
  useParams: jest.fn(() => 1),
}));

describe("Render tests", () => {
  it("renders psi-form correctly", () => {
    const wrapper = shallow(<SchedulingPage />);
    expect(wrapper.find(<PsiForm />)).toBeTruthy();
  });
  it("renders calendar correctly", () => {
    const wrapper = shallow(<SchedulingPage />);
    expect(wrapper.find(<Calendar />)).toBeTruthy();
  });
});
