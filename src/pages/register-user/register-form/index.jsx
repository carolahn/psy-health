import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { cpfCnpjMask, phoneMask, crpMask } from "./masks";
import { StyledInput, StyledButton, StyledForm } from "./styled";

const RegisterForm = ({ isPsic = false }) => {
  const [values, setValues] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => {
    console.log("Success:", values);
    axios
      .post("https://psy-health-api.herokuapp.com/register", { ...values, isPsic })
      .then(({ data: { accessToken } }) => console.log(accessToken))
      .catch((e) => console.log(e));
  };

  const handleOnChange = ({ target }) => setValues({ ...values, [target.name]: target.value });

  const handleMaskOnChange = (value, key) => setValues({ ...values, [key]: value });

  return (
    <StyledForm name="register" onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        placeholder="Nome e sobrenome"
        value={values.name}
        name="name"
        onChange={handleOnChange}
        ref={register({
          required: true,
          pattern: /^[A-Z][a-zA-Z]* [a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
        })}
      />

      <StyledInput
        placeholder="E-mail"
        type="email"
        value={values.email}
        name="email"
        onChange={handleOnChange}
        ref={register({ required: true })}
      />

      <StyledInput
        placeholder="Confirmar E-mail"
        type="email"
        name="confirmEmail"
        ref={register({
          required: true,
          validate: (value) => value === values.email,
        })}
      />

      <StyledInput
        maxLength={15}
        placeholder="Telefone (opcional)"
        type="tel"
        value={values.phone}
        name="phone"
        onChange={(e) => handleMaskOnChange(phoneMask(e.target.value), e.target.name)}
        ref={register({ pattern: /\(\d{2}\) \d{5}-\d{4}/i })}
      />

      <StyledInput
        maxLength={18}
        placeholder="CPF/CNPJ"
        value={values.cpf_cnpj}
        name="cpf_cnpj"
        onChange={(e) => handleMaskOnChange(cpfCnpjMask(e.target.value), e.target.name)}
        ref={register({
          required: true,
          pattern: /(^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$)|(^\d{2}\.?\d{3}\.?\d{3}\/\d{4}-?\d{2}$)/i,
        })}
      />

      {isPsic && (
        <StyledInput
          maxLength={8}
          placeholder="CRP"
          value={values.crp}
          name="crp"
          onChange={(e) => handleMaskOnChange(crpMask(e.target.value), e.target.name)}
          ref={register({
            required: true,
            pattern: /\d{2}\/\d{5}/i,
          })}
        />
      )}

      <StyledInput
        placeholder="Senha"
        type="password"
        value={values.password}
        name="password"
        onChange={handleOnChange}
        ref={register({ required: true })}
      />

      <StyledInput
        placeholder="Confirmar Senha"
        type="password"
        name="confirmPassword"
        ref={register({
          required: true,
          validate: (value) => value === values.password,
        })}
      />

      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
