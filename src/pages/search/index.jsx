import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import PsychologistList from "../../components/psychologist-list";
import SearchFilter from "../../containers/search-filter";
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
    dispatch(getUniqueEntries(psychologists, ["experience", "language", "price", "name"]));
  }, [psychologists]);

  return (
    <SearchContainer>
     
      <SearchFilter />
      <PsychologistList psychologists={filteredPsy} />
    </SearchContainer>
  );
};

export default Search;
