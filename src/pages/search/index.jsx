import { Select } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PsychologistList from "../../components/psychologist-list";
import SearchFilter from "../../components/search-filter";
import { uniqueEntries } from "../../components/search-filter/helper";
import { requestPsy } from "../../redux/actions/search";
import SearchContainer from "./styled";

const languages = ["português", "ingles", "espanhol"];
const prices = [
  { value: '{"low": 50, "high" : 350}', title: "Todos" },
  { value: '{"low": 50, "high" : 100}', title: "R$50-100" },
  { value: '{"low": 100, "high" : 150}', title: "R$100-150" },
  { value: '{"low": 150, "high" : 200}', title: "R$150-200" },
  { value: '{"low": 200, "high" : 300}', title: "R$200-300" },
];

const Search = () => {
  const dispatch = useDispatch();

  const filteredPsy = useSelector((state) => state.search.filteredPsy);

  useEffect(() => {
    dispatch(requestPsy());
  }, []);

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

      <PsychologistList psychologists={filteredPsy !== undefined ? filteredPsy : []} />
    </SearchContainer>
  );
};

export default Search;
