import React from "react";

import StyledButton from "./styled";

const Button = ({ width, height, title, fontSize }) => {
  return (
    <StyledButton width={width} height={height}  data-text={title} fontSize={fontSize}>
      {title.split('').map(char => <span>{char}</span>)}
    </StyledButton>
  );
};

export default Button;
