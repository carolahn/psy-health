import { Select } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PsychologistList from "../../components/psychologist-list";
import SearchFilter from "../../container/search-filter";

import { requestPsy, getUniqueEntries } from "../../redux/actions/search";
import SearchContainer from "./styled";



const Search = () => {
  const dispatch = useDispatch();

  const filteredPsy = useSelector((state) => state.search.filteredPsy);
  const psychologists = useSelector((state) => state.search.psychologists);

  useEffect(() => {
    dispatch(requestPsy());
  }, []);

  useEffect(() => {
    dispatch(getUniqueEntries(psychologists,["experience", "language", "price"]))
  }, [psychologists])
  
  return (
    <SearchContainer>
      <section className='search-bar'>
        <input
          placeholder="Procure por especialidade, nome ou experiência"
          className="search-input"
        />
        <button className="search-button">Buscar</button>
      </section>
      <SearchFilter />

      <PsychologistList psychologists={filteredPsy} />
    </SearchContainer>
  );
};

export default Search;
