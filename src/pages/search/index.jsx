import React from "react";
import { Select } from 'antd'
import SearchContainer from './styled'



const Search = () => {
  
  const { Option } = Select;

  const optionsArr = ["ansiedade", 'depressão', 'neuropsicologia','orientação vocacinal']
  const options = optionsArr.map((specificity, index) => <Option key={index} value={specificity}>{specificity}</Option>)


  return (
    <SearchContainer>
      <input placeholder="Procure por especialidade, nome ou experiência"  className='search-input'/>
      <button className='search-button'>Buscar</button>
      <Select defaultValue='Todos' className='filter-specialist'>
        <Option value='coach'>Coach</Option>
        <Option value='psicanalista'>Psicanalista</Option>
        <Option value='psicologo'>Psicólogo</Option>
      </Select>
      <Select defaultValue='Preço'>
        <Option value='50-100'>R$50-100</Option>
        <Option value='100-150'>R$100-150</Option>
        <Option value='150-200'>R$150-200</Option>
        <Option value='200-300'>R$200-300</Option>
      </Select>
      <Select  mode='multiple' placeholder='Especialidade' className='filter-specificity'>
        {options}
      </Select>
    </SearchContainer>
  );
};

export default Search;
