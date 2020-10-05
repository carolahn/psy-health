import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Select } from 'antd'
import { priceFilter, genericFilter, uniqueEntries } from './helper'
import SearchContainer from './styled'
import PsychologistList from "../../components/psychologist-list";
import { requestPsy }  from '../../redux/actions/search'
import { useEffect } from "react";




const Search = () => {

  const { Option } = Select;

  const dispatch = useDispatch()
  const psychologists = useSelector(state => state.search.state)

  const [filterSpecialist, setFilterSpecialist] = useState('')
  const [filterPrice, setFilterPrice] = useState('')
  const [filterExperience, setFilterExperience] = useState('')
  const [filterLanguague, setFilterLanguage] = useState('')
  const [experiences, setExperiences] = useState([])
  
  useEffect(() => {
    dispatch(requestPsy())
    console.log(psychologists)
  }, [])

  useEffect(() => {
    if (psychologists !== undefined) {
      const psychologistExp = uniqueEntries(psychologists, 'experience')
      console.log(psychologistExp)
      setExperiences(psychologistExp)
    }
  }, [psychologists])
  

  const handleFilterSpecialist = (value) => {
    setFilterSpecialist(genericFilter(psychologists,value,'specializations'))
  }

  const handleFilterPrice = (value) => {
    setFilterPrice(priceFilter(psychologists, value))
  }

  const handleFilterExperience = (value) => {
    setFilterExperience(genericFilter(psychologists,value, 'experience'))
  }
  
  const handleLanguage = (value) => {
    setFilterLanguage(genericFilter(psychologists,value, 'language'))
  }
  
  return (
    <SearchContainer>
      <section>
        <input placeholder="Procure por especialidade, nome ou experiência"  className='search-input'/>
        <button className='search-button'>Buscar</button>
      </section>
      <section>
        <Select  placeholder='Todos' className='filter-specialist' onChange={handleFilterSpecialist}>
          <Option value='coach'>Coach</Option>
          <Option value='psicanalista'>Psicanalista</Option>
          <Option value='psicologo'>Psicólogo</Option>
        </Select>
        <Select  placeholder='Preço' onChange={handleFilterPrice}>
          <Option value='{"low": 50, "high" : 100}'>
            R$50-100
          </Option>
          <Option value='{"low": 100, "high" : 150}'>
            R$100-150
          </Option>
          <Option value='{"low": 150, "high" : 200}'>
            R$150-200
          </Option>
          <Option value='{"low": 200, "high" : 300}'>
            R$200-300
          </Option>
        </Select>

        <Select  mode='multiple' placeholder='Experiência' className='filter-experience' onChange={handleFilterExperience}>
          {experiences.map((exp, index) => <Option key={index} >{exp}</Option>)}
        </Select>
        <Select placeholder='Idioma' onChange={handleLanguage}>
          <Option value='português'>Português</Option>
          <Option value='ingles'>Inglês</Option>
          <Option value='espanhol'>Espanhol</Option>
        </Select>
      </section>

      {/* <PsychologistList /> */}
    </SearchContainer>
  );
};

export default Search;
