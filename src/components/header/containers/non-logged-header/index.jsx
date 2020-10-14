import React from "react";

import { LeftNonLoggedHeader, RightNonLoggedHeader } from "../../non-logged-header";
import { StyledHeader } from "../styled";

export const NonLoggedHeader = () => (
  <StyledHeader>
    <LeftNonLoggedHeader />
    <RightNonLoggedHeader />
  </StyledHeader>
);
