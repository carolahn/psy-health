import { Select } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { filterPsyList, getUniqueEntries } from "../../redux/actions/search";
import { genericFilter, priceFilter, uniqueEntries, sortLength } from "./helper";
import StyledSearchFilter from "./styled";




const SearchFilter = () => {
 

  const dispatch = useDispatch();

  const psychologists = useSelector((state) => state.search.psychologists);
  const exp = useSelector(state => state.search.fValues.exp)
  const lang = useSelector(state => state.search.fValues.lang)
  const price = useSelector(state => state.search.fValues.price)


  const [filterValues, setFilterValues] = useState({
    prices: price,
    experiences: exp,
    languages: lang,
  });

  

  useEffect(() => {
      
      console.log(filterValues)
      const priceFiltered = priceFilter(psychologists, filterValues.prices);
      const experienceFiltered = genericFilter(priceFiltered, filterValues.experiences, "experience");
      const languageFiltered = genericFilter(priceFiltered, filterValues.languages, "language");
      
      dispatch(filterPsyList(sortLength(priceFiltered, experienceFiltered, languageFiltered)));
    
   
  }, [ filterValues ]);

  const handleFilterPrice = (event) => {
    console.log(event.target.value)
    setFilterValues({ ...filterValues, prices: event.target.value });
  };

  const handleFilterExperience = (event) => {
    setFilterValues({ ...filterValues, experiences: event.target.value });
  };

  const handleLanguage = (event) => {
    setFilterValues({ ...filterValues, languages: event.target.value });
  };
  
  return (
    <StyledSearchFilter>
      <select placeholder="Preço" onChange={handleFilterPrice} className="filter" defaultValue='Todos'>
        {price.map((price, index) => (
          <option key={index} value={price.value}>
            {price}
          </option>
        ))}
      </select>

      <select
        mode="multiple"
        placeholder="Experiência"
        className="filter"
        onChange={handleFilterExperience}>
        {exp.map((exp, index) => (
          <option key={index} value={exp}>
            {exp}
          </option>
        ))}
      </select>
      <select placeholder="Idioma" onChange={handleLanguage} className="filter">
        {lang.map((lang, index) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </StyledSearchFilter>
  );
};

export default SearchFilter;
