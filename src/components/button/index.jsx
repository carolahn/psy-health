import React from "react";

import StyledButton from "./styled";

const Button = ({
  width,
  height,
  title,
  fontSize,
  borderTopLeft,
  borderTopRight,
  borderBottomLeft,
  borderBottomRight,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      data-text={title}
      fontSize={fontSize}
      borderTopLeft={borderTopLeft}
      borderTopRight={borderTopRight}
      borderBottomLeft={borderBottomLeft}
      borderBottomRight={borderBottomRight}>
      {title.split("").map((char) => (
        <span>{char}</span>
      ))}
    </StyledButton>
  );
};

export default Button;
