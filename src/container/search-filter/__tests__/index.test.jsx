import { mount } from "enzyme";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchFilter from "../index";

jest.mock("react", () => ({ // mock do useState
  ...jest.requireActual("react"),
  
}));

jest.mock("react-redux", () => ({ // mock do useDispatch e do useSelector
  useDispatch: jest.fn(),
  useSelector:  jest.fn(() => [ 
  ]),
}));

describe("Test", () => {

  it("test", () => {  
    const dispatchMock = jest.fn();
    const useDispatchMock = () => dispatchMock;
  
    useDispatch.mockImplementation(useDispatchMock);
 
    const wrapper = mount(<SearchFilter />);
    
    wrapper
      .find("div")
      .children()
      .find("section")
      .children()
      .find("div")
      .at(1)
      .simulate("change", { target: { value : 2}})

      
      

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({"filtered": [], "type": "FILTERED_PSY"});
  });
});
