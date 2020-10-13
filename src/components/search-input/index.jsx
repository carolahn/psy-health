import React from "react";

import Button from "../button";
import StyledSearchInput from "./styled";

const SearchInput = ({ handleChange, title }) => {
  return (
    <StyledSearchInput>
      <input type="text" placeholder={title} className="search-input" onChange={handleChange} />
    </StyledSearchInput>
  );
};

export default SearchInput;
