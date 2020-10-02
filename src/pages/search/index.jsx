import React from "react";
import SearchContainer from './styled'

const Search = () => {
  return (
    <SearchContainer>
      <input placeholder="Procure por especialidade, nome ou experiência"  className='search-input'/>
      <button className='search-button'>Buscar</button>
    </SearchContainer>
  );
};

export default Search;
