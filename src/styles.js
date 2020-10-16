import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  height: 40px;
  border-radius: 5px;
  padding: 0 1rem;
  margin: 8px;
  width: 300px;

  animation-duration: 1.5;

  outline: none;

  ::-webkit-input-placeholder {
    color: #999;
    font-size: 16px;
  }
`;
