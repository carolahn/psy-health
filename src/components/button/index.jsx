import React from "react";

import StyledButton from "./styled";

const Button = ({
  width,
  height,
  title,
  fontSize,
  onClick
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      data-text={title}
      fontSize={fontSize}
      onClick={onClick}>
      {title.split("").map((char) => (
        <span>{char}</span>
      ))}
    </StyledButton>
  );
};

export default Button;
