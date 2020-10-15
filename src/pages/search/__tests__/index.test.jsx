import { mount } from 'enzyme'
import React from 'react'

import Search from '../index'
import SearchFilter from '../../../containers/search-filter'
import { useDispatch } from 'react-redux';
import PsychologistList from '../../../components/psychologist-list';


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

  const dispatchMock = jest.fn()
  const useDispatchMock = () =>  dispatchMock

  useDispatch.mockImplementation(useDispatchMock)

  const wrapper = mount(<Search />)

  it ('Snapshot', () => {
    
    expect(wrapper).toMatchSnapshot()
  })


  it ('toBeTruthy SearchFilter', () => {
    expect(wrapper.find(<SearchFilter />)).toBeTruthy()
  })

  it('toBeTruthy psychologist list ', () => {
    expect(wrapper.find(<PsychologistList psychologists={[{ name: "joao" }, { name: "pedro" }]}/>)).toBeTruthy()
  })

  it('call', () => {
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toBeCalledWith({ filtered: [], type: "FILTERED_PSY" })
  })
 
})