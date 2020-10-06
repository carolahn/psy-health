import { Tooltip } from "antd";
import axios from "axios";
import { Rate } from "lib-kenzie";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { StyledForm, StyledButton } from "../../styles";

const DepoimentsForm = ({ showModal: [modalVisible, setModalVisible], psicId }) => {
  const [values, setValues] = useState({});
  const { register, handleSubmit, errors, setError, clearErrors } = useForm();
  const token = useSelector((state) => state.login.token);
  const id = useSelector((state) => state.login.user.id);

  const onSubmit = () => {
    if (!values.grading) {
      setError("grading", {
        type: "manual",
        message: "Informe seu grading!",
      });
      return;
    }
    // fetch to api

    axios
      .patch(`https://psy-health-api.herokuapp.com/users/${psicId}`, {
        header: { Authorization: token },
        data: {
          depoiments: {
            coment: values.depoiment,
            grading: values.grading,
            userId: id,
          },
        },
      })
      .then(() => {
        setModalVisible(false);
        setValues({});
      });
  };

  return (
    <StyledModal show={modalVisible}>
      <div className="container">
        <StyledH1>
          Depoimentos <button onClick={() => setModalVisible(false)}>X</button>
        </StyledH1>
        <StyledForm name="depoiment" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Tooltip title={errors.depoiment && errors.depoiment.message}>
            <StyledTextArea
              autofocus
              name="depoiment"
              placeholder="Fale um pouco sobre sua experiência durante a consulta."
              rows={5}
              spellcheck
              onChange={({ target: { value } }) => setValues({ ...values, depoiment: value })}
              ref={register({ required: "Coloque seu depoimento!" })}
            />
          </Tooltip>
          <Tooltip title={errors.grading && errors.grading.message}>
            <div>
              <Rate
                grading={0}
                color="#FFC23D"
                name="grading"
                onClick={(value) => {
                  setValues({ ...values, grading: value });
                  if (errors.grading) clearErrors("grading");
                }}
              />
            </div>
          </Tooltip>
          <StyledButton type="submit">Mandar Grading</StyledButton>
        </StyledForm>
      </div>
    </StyledModal>
  );
};

export default DepoimentsForm;

const StyledModal = styled.div`
  display: ${(props) => (props.show ? "grid" : "none")};
  place-items: center;

  position: absolute;

  width: 100vw;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  .container {
    border: 2px solid #70a3ef;
    border-radius: 5px;
    min-width: 325px;
    padding: 50px;
    background-color: white;

    @media (max-width: 415px) {
      padding: 35px 10px;
      width: 95%;
    }
  }
`;

const StyledTextArea = styled.textarea`
  border: 2px solid #70a3ef;
  border-radius: 5px;
  padding-left: 0.2rem;
  margin: 5px;
  width: 300px;
  resize: none;

  animation-duration: 1.5;

  outline: none;
`;

const StyledH1 = styled.h1`
  position: relative;
  button {
    position: absolute;
    right: 0;

    border: none;
    background-color: white;

    :hover {
      border-radius: 10px;

      background-color: #cecece;
    }
  }
`;
