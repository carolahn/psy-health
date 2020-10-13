import { shallow } from 'enzyme'
import React from 'react'

import Search from '../index'
import SearchFilter from '../../../containers/search-filter'


jest.mock("react", () => ({
  // mock do useState
  ...jest.requireActual("react"),
}));

jest.mock("react-redux", () => ({
  // mock do useDispatch e do useSelector
  useDispatch: jest.fn(),
  useSelector: jest.fn(() => []),
}));


describe('Renders', () => {
  it ('Render SearchFilter', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(<SearchFilter />)).toBeTruthy()
  })
})