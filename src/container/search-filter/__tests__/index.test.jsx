import { mount } from "enzyme";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchFilter from "../index";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn((init) => [init, jest.fn()]),
}));

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(),
}));

describe("Test", () => {
  it("test", () => {
    const stateMock = jest.fn();
    const mockedState = (_) => [
     [ {
        email: "joanacmota@gmail.com",
        password: "$2a$10$f6G8y01Ag4h/WdOlDPMLCOS02Ngnh/ncZFNB6UkP.9purvPRuuhFu",
        name: "Joana Camargo Mota",
      },
      {
        email: "joanacmota@gmail.com",
        password: "$2a$10$f6G8y01Ag4h/WdOlDPMLCOS02Ngnh/ncZFNB6UkP.9purvPRuuhFu",
        name: "Joana Camargo Mota",
      }],
      stateMock,
    ];
    const dispatchMock = jest.fn();
    const useDispatchMock = () => dispatchMock;

    beforeEach(() => {
      // useState.mockImplementation(mockedState);
      useDispatch.mockImplementation(useDispatchMock);
    });

    jest.spyOn(React, "useState").mockImplementation(mockedState);
    const wrapper = mount(<SearchFilter />);

    // wrapper
    //   .find("div")
    //   .children()
    //   .find("div")
    //   .at(0)
    //   .simulate("change", {
    //     price: '{"low": 50, "high" : 350}',
    //     exp: ["test1", "Test2"],
    //     language: ["lang1", "lang2"],
    //   });

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: "FILTERED_PSY",
      filtered: [
        {
          email: "joanacmota@gmail.com",
          password: "$2a$10$f6G8y01Ag4h/WdOlDPMLCOS02Ngnh/ncZFNB6UkP.9purvPRuuhFu",
          name: "Joana Camargo Mota",
        },
      ],
    });
  });
});
