import React from "react";
import renderer from "react-test-renderer";

import DepoimentsForm from "../index";

describe("Render tests", () => {
  it("show", () => {
    const tree = renderer
      .create(
        <DepoimentsForm
          psicName="Jojisval Cardozo"
          formValues={{ values: {}, setValues: () => {} }}
          onSubmit={() => {}}
          formErrors={{ errors: {}, register: () => {}, clearErrors: () => {}, setError: () => {} }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
