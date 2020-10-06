import enzyme from "enzyme";
import mockAxios from "jest-mock-axios";
import React from "react";
import { useHistory } from "react-router-dom";
import renderer from "react-test-renderer";

import RegisterForm from "../index";

jest.mock("react-router-dom", () => ({
  useHistory: jest.fn(() => ({
    push: jest.fn(),
  })),
}));
jest.mock("axios", () => mockAxios);
jest.mock("react-hook-form", () => ({
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn((func) => func),
    errors: {},
    setError: jest.fn(),
  }),
}));

describe("Tests snapshot", () => {
  it("shows pat", () => {
    const tree = renderer.create(<RegisterForm isPsic={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows psi", () => {
    const tree = renderer.create(<RegisterForm isPsic />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Tests behaviour", () => {
  jest.mock("react", () => ({
    useState: jest.fn(),
  }));

  it("calls useHistory", () => {
    const pushMock = jest.fn();
    const useHistoryMock = () => ({ push: pushMock });

    useHistory.mockImplementation(useHistoryMock);

    const wrapper = enzyme.mount(<RegisterForm />);

    const inputs = wrapper.find("input");

    inputs.at(0).simulate("change", { target: { value: "Cassiano B", name: "name" } });
    inputs.at(1).simulate("change", { target: { value: "a@a.c", name: "email" } });
    inputs.at(2).simulate("change", { target: { value: "a@a.c", name: "confirmEmail" } });
    inputs.at(3).simulate("change", { target: { value: "(41) 91111-1111", name: "phone" } });
    inputs.at(4).simulate("change", { target: { value: "000.000.000-00", name: "cpf_cnpj" } });
    inputs.at(5).simulate("change", { target: { value: "1234", name: "password" } });
    inputs.at(6).simulate("change", { target: { value: "1234", name: "confirmPassword" } });

    wrapper.find("button").at(0).simulate("submit");

    expect(mockAxios.post).toHaveBeenCalledWith("https://psy-health-api.herokuapp.com/register", {
      name: "Cassiano B",
      email: "a@a.c",
      password: "1234",
      cpf_cnpj: "000.000.000-00",
      isPsic: false,
      phone: "(41) 91111-1111",
    });

    const responseObj = {
      data: {
        auth_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlJhZmFlbEdNMkBnbWFpbC5jb20iLCJpYXQiOjE2MDE0NzM5MTMsImV4cCI6MTYwMTQ3NzUxMywic3ViIjoiMyJ9.K3rfDWw5JuKyFmsPO5h1VJ6W8NM-Xz6am8XZzvAS5JQ",
      },
    };
    mockAxios.mockResponse(responseObj);

    expect(pushMock).toHaveBeenCalledTimes(1);
  });
});
