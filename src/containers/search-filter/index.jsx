import { Select } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchInput from "../../components/search-input";
import { filterPsyList } from "../../redux/actions/search";
import { genericFilter, priceFilter, sortLength } from "./helper";
import StyledSearchFilter from "./styled";

const SearchFilter = () => {
  const { Option } = Select;

  const dispatch = useDispatch();

  const psychologists = useSelector((state) => state.search.psychologists);
  const exp = useSelector((state) => state.search.fValues.exp);
  const lang = useSelector((state) => state.search.fValues.lang);
  const price = useSelector((state) => state.search.fValues.price);

  const [filterValues, setFilterValues] = useState({
    prices: "todos",
    experiences: "todos",
    languages: "todos",
  });

  useEffect(() => {
    const priceFiltered = priceFilter(psychologists, filterValues.prices);

    const experienceFiltered = genericFilter(priceFiltered, filterValues.experiences, "experience");

    const languageFiltered = genericFilter(experienceFiltered, filterValues.languages, "language");

    dispatch(
      filterPsyList(
        sortLength(filterValues.prices, priceFiltered, experienceFiltered, languageFiltered)
      )
    );
  }, [filterValues, price, lang, exp]);

  const handleInput = (event) => {
    const value = event.target.value;
    if (value === "todos") {
      dispatch(filterPsyList(psychologists));
    } else {
      const filteredInput = psychologists.filter(
        (psy) => psy.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value) || 
        (psy.experience && psy.experience.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value))
      );
      dispatch(filterPsyList(filteredInput));
    }
  };

  const handleFilterPrice = (value) => {
    setFilterValues({ ...filterValues, prices: value });
  };

  const handleFilterExperience = (value) => {
    setFilterValues({ ...filterValues, experiences: value });
  };

  const handleLanguage = (value) => {
    setFilterValues({ ...filterValues, languages: value });
  };

  return (
    <StyledSearchFilter>
      <section className="search-bar">
        <SearchInput handleChange={handleInput} title="Procure por nome ou experiência" />
      </section>

      <section className="filter">
        <Select placeholder="Preço" onChange={handleFilterPrice} className="select-filter">
          {price.map((price, index) => (
            <Option key={index} value={price} style={{ textTransform: "capitalize" }}>
              {price}
            </Option>
          ))}
        </Select>

        <Select
          placeholder="Experiência"
          onChange={handleFilterExperience}
          className="select-filter">
          {exp.map((exp, index) => (
            <Option key={index} value={exp} style={{ textTransform: "capitalize" }}>
              {exp}
            </Option>
          ))}
        </Select>
        <Select placeholder="Idioma" onChange={handleLanguage} className="select-filter">
          {lang.map((lang, index) => (
            <Option key={index} value={lang} style={{ textTransform: "capitalize" }}>
              {lang}
            </Option>
          ))}
        </Select>
      </section>
    </StyledSearchFilter>
  );
};

export default SearchFilter;
