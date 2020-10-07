import { Select } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { filterPsyList } from "../../redux/actions/search";
import { genericFilter, priceFilter, uniqueEntries, sortLength } from "./helper";
import StyledSearchFilter from "./styled";

const SearchFilter = () => {
  const { Option } = Select;

  const dispatch = useDispatch();

  const psychologists = useSelector((state) => state.search.psychologists);
  const [experiences, setExperiences] = useState([]);
  const languages = ["português", "ingles", "espanhol"];
  const prices = [
    { value: '{"low": 50, "high" : 350}', title: "Todos" },
    { value: '{"low": 50, "high" : 100}', title: "R$50-100" },
    { value: '{"low": 100, "high" : 150}', title: "R$100-150" },
    { value: '{"low": 150, "high" : 200}', title: "R$150-200" },
    { value: '{"low": 200, "high" : 300}', title: "R$200-300" },
  ];
  const [filterValues, setFilterValues] = useState({
    price: '{"low": 50, "high" : 350}',
    exp: experiences,
    language: languages,
  });

  useEffect(() => {
    if (psychologists !== undefined) {
      const psychologistExp = uniqueEntries(psychologists, "experience");
      setExperiences(psychologistExp);

      const priceFiltered = priceFilter(psychologists, filterValues.price);
      const experienceFiltered = genericFilter(priceFiltered, filterValues.exp, "experience");
      const languageFiltered = genericFilter(priceFiltered, filterValues.language, "language");

      dispatch(filterPsyList(sortLength(priceFiltered, experienceFiltered, languageFiltered)));
    }
  }, [psychologists, filterValues]);

  const handleFilterPrice = (value) => {
    setFilterValues({ ...filterValues, price: value });
  };

  const handleFilterExperience = (value) => {
    setFilterValues({ ...filterValues, exp: value });
  };

  const handleLanguage = (value) => {
    setFilterValues({ ...filterValues, language: value });
  };
  
  return (
    <StyledSearchFilter>
      <Select placeholder="Preço" onChange={handleFilterPrice} className="filter">
        {prices.map((price, index) => (
          <Option key={index} value={price.value}>
            {price.title}
          </Option>
        ))}
      </Select>

      <Select
        mode="multiple"
        placeholder="Experiência"
        className="filter"
        onChange={handleFilterExperience}>
        {experiences.map((exp, index) => (
          <Option key={index} value={exp}>
            {exp}
          </Option>
        ))}
      </Select>
      <Select placeholder="Idioma" onChange={handleLanguage} className="filter">
        {languages.map((lang, index) => (
          <Option key={index} value={lang}>
            {lang}
          </Option>
        ))}
      </Select>
    </StyledSearchFilter>
  );
};

export default SearchFilter;
