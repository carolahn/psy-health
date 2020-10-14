import React from "react";

import RegisterFormContainer from "../../../containers/register-form";
import { shallow } from "../../../containers/search-filter/__tests__/node_modules/enzyme";
import Register from "../index";

describe("Renders", () => {
  it("renders register with RegisterFormContainer", () => {
    const wrapper = shallow(<Register where="/" history={{}} />);
    expect(wrapper.find(RegisterFormContainer)).toBeTruthy();
  });

  it("renders register with img", () => {
    const wrapper = shallow(<Register where="/" history={{}} />);
    expect(wrapper.find("img")).toBeTruthy();
  });

  it("renders register with h1 correct", () => {
    const wrapper = shallow(<Register where="/" history={{}} />);
    const h1 = wrapper.find("h1");
    expect(h1).toBeTruthy();
    expect(h1.text()).toBe("Register");
  });

  it("renders register with span patient", () => {
    const wrapper = shallow(<Register where="/register" history={{}} />);
    const patient = wrapper.find(".usr");
    expect(patient).toBeTruthy();
    expect(patient.text()).toBe("Sou Paciente");
  });

  it("renders register with span psic", () => {
    const wrapper = shallow(<Register where="/register/psi" history={{}} />);
    const psic = wrapper.find(".psi");
    expect(psic).toBeTruthy();
    expect(psic.text()).toBe("Sou Psicólogo");
  });
});
