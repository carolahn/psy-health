import React from "react";
import renderer from "react-test-renderer";

import RegisterForm from "../index";

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
    const tree = renderer
      .create(
        <RegisterForm
          isPsic={false}
          values={{}}
          onSubmit={() => {}}
          formErrors={{ register: () => {}, handleSubmit: () => {}, errors: {} }}
          handleOnChange={() => {}}
          handleMaskOnChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows psi", () => {
    const tree = renderer
      .create(
        <RegisterForm
          isPsic
          values={{}}
          onSubmit={() => {}}
          formErrors={{ register: () => {}, handleSubmit: () => {}, errors: {} }}
          handleOnChange={() => {}}
          handleMaskOnChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
