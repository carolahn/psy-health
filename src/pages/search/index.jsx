import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/button";

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
      <Button width='150px' height='50px' fontSize='19px' title='Register teste 121231' onClick={() => {}}/>
      <SearchFilter />
      <PsychologistList psychologists={filteredPsy} />
    </SearchContainer>
  );
};

export default Search;
