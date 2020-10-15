import React from 'react'
import { mount } from 'enzyme'

import Button from '../index'

describe('Render', () => {
  const wrapper = mount(<Button width='100px' height='50px' buttonName='Botão de teste' fontSize='20px'/>)

  it ('length of children', () => {
    expect(wrapper.find('button').children().find('span')).toHaveLength(14)
  })

  it(' button snapshot', () => {
    expect(wrapper).toMatchSnapshot()  
  })

  it('toBeTruthy', () => {
    expect(wrapper).toBeTruthy()
  })

  
})