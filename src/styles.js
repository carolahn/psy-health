import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  height: 35px;
  border: 2px solid ${(props) => (!props.error ? "#70a3ef" : "#f88264")};
  border-radius: 5px;
  padding-left: 0.2rem;
  margin: 5px;
  width: 300px;

  animation-duration: 1.5;

  outline: none;
`;

export const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  color: #fff;
  background-color: #053559;
  border-radius: 5px;
  margin: 10px;
  border-style: none;
  outline: none;

  :hover {
    animation-duration: 1.5;
    background-color: #074c7c;
  }
`;
