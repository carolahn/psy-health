import React from "react";

import { LeftLoggedHeader, RightLoggedHeader } from "../../logged-header";
import { StyledHeader } from "../styled";

export const LoggedHeader = () => (
  <StyledHeader>
    <LeftLoggedHeader />
    <RightLoggedHeader />
  </StyledHeader>
);
