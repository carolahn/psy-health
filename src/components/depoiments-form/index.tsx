import { Tooltip } from "antd";
import { Rate } from "lib-kenzie";
import React from "react";
import styled from "styled-components";

import { StyledForm } from "../../styles";
import Button from "../button";

interface Values {
  depoiment?: string;
  grading?: number;
}

interface DepoimentsFormProps {
  psicName?: string;
  formValues: {
    values: Values;
    setValues: React.Dispatch<React.SetStateAction<Values>>;
  };
  onSubmit: any;
  formErrors: {
    errors: any;
    register: any;
    clearErrors: any;
    setError: any;
  };
}

const DepoimentsForm = ({
  psicName,
  formValues: { values, setValues },
  onSubmit,
  formErrors: { errors, register, clearErrors, setError },
}: DepoimentsFormProps) => {
  return (
    <StyledForm name="depoiment" onSubmit={onSubmit} noValidate>
      <Tooltip title={errors.depoiment && errors.depoiment.message}>
        <StyledTextArea
          autoFocus
          name="depoiment"
          placeholder={`Fale um pouco sobre sua experiência durante a consulta com ${psicName}.`}
          rows={5}
          value={values.depoiment}
          spellCheck
          onChange={({ target: { value } }) => setValues({ ...values, depoiment: value })}
          ref={register({
            validate: (value: string) => {
              setValues({ ...values, depoiment: value });
              return value !== "" || "Coloque seu depoimento!";
            },
          })}
          style={{
            border: `2px solid ${!errors.depoiment ? "#70a3ef" : "#f88264"}`,
          }}
        />
      </Tooltip>
      <Tooltip title={errors.grading && errors.grading.message}>
        <div style={{ margin: "5px" }}>
          <Rate
            style={{ fontSize: "30px" }}
            grading={0}
            color="#FFC23D"
            onClick={(value) => {
              setValues({ ...values, grading: value });
              if (errors.grading) clearErrors("grading");
            }}
          />
        </div>
      </Tooltip>
      <Tooltip title={errors.server && errors.server.message} placement="bottom">
        <Button
          fontSize="19px"
          width="200px"
          height="50px"
          onClick={() =>
            !values.grading &&
            setError("grading", {
              type: "manual",
              message: "Informe seu grading!",
            })
          }
          buttonName="Mandar depoimento"
        />
      </Tooltip>
    </StyledForm>
  );
};

export default DepoimentsForm;

const StyledTextArea = styled.textarea`
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  width: 300px;
  resize: none;

  animation-duration: 1.5;

  outline: none;
`;
