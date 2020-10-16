import React from "react";

import StyledButton from './styled'

export interface ButtonProps {
  width: string,
  height: string,
  buttonName: string,
  fontSize?: string,
  color?: string,
  colorHover?:string,
  colorActive?: string,
  onClick : () => void
}

const Button = ({
  width,
  height,
  buttonName = '',
  fontSize,
  color,
  colorHover,
  colorActive,
  onClick
} : ButtonProps ) => {
  return (
    <StyledButton
      width={width}
      height={height}
      data-text={buttonName}
      fontSize={fontSize}
      color={color}
      colorHover={colorHover}
      colorActive={colorActive}
      onClick={onClick}>
      {buttonName.split("").map((char, index) => (
        char === ' ' ? <span key={index}>&nbsp;</span> : <span key={index}>{char}</span>
      ))}
    </StyledButton>
  );
};

export default Button;
