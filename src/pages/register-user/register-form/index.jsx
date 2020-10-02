import { Tooltip } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { cpfCnpjMask, phoneMask, crpMask } from "./masks";
import { StyledInput, StyledButton, StyledForm } from "./styled";

const RegisterForm = ({ isPsic = false, history }) => {
  const [values, setValues] = useState({});
  const { register, handleSubmit, errors, setError } = useForm();

  // console.log(errors);
  const onSubmit = () => {
    axios
      .post("https://psy-health-api.herokuapp.com/register", { ...values, isPsic })
      .then(({ data: { accessToken } }) => {
        console.log(accessToken);
        history.push("/");
      })
      .catch(({ response: { status } }) => {
        if (status === 400) {
          console.log("deu ruim");
          setError("email", {
            type: "manual",
            message: "Email já foi usado!",
          });
          setError("confirmEmail", {
            type: "manual",
            message: "Email já foi usado!",
          });
        }
      });
  };

  const handleOnChange = ({ target }) => setValues({ ...values, [target.name]: target.value });

  const handleMaskOnChange = (value, key) => setValues({ ...values, [key]: value });

  return (
    <StyledForm name="register" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Tooltip title={errors.name && errors.name.message} placement={isPsic ? "left" : "right"}>
        <StyledInput
          placeholder="Nome e sobrenome"
          value={values.name}
          name="name"
          onChange={handleOnChange}
          ref={register({
            required: "Informe seu nome!",
            pattern: {
              value: /^[A-Z][a-zA-Z]* [a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
              message: "Informe seu nome e sobrenome!",
            },
          })}
          error={errors.name}
        />
      </Tooltip>

      <Tooltip title={errors.email && errors.email.message} placement={isPsic ? "left" : "right"}>
        <StyledInput
          placeholder="E-mail"
          type="email"
          value={values.email}
          name="email"
          onChange={handleOnChange}
          ref={register({
            required: "Informe seu email!",
            pattern: {
              value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
              message: "Formato do email está errado! Formato certo: examble@example.com",
            },
          })}
          error={errors.email}
        />
      </Tooltip>

      <Tooltip
        title={errors.confirmEmail && errors.confirmEmail.message}
        placement={isPsic ? "left" : "right"}>
        <StyledInput
          placeholder="Confirmar E-mail"
          type="email"
          name="confirmEmail"
          ref={register({
            required: "Confirme seu email!",
            validate: (value) => value === values.email || "Emails não batem",
          })}
          error={errors.confirmEmail}
        />
      </Tooltip>

      <StyledInput
        maxLength={15}
        placeholder="Telefone (opcional)"
        type="tel"
        value={values.phone}
        name="phone"
        onChange={(e) => handleMaskOnChange(phoneMask(e.target.value), e.target.name)}
        ref={register({
          pattern: { value: /\(\d{2}\) \d{5}-\d{4}/i, message: "Número de telefone não aceito!" },
        })}
        error={errors.phone}
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
        error={errors.cpf_cnpj}
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
          error={errors.crp}
        />
      )}

      <StyledInput
        placeholder="Senha"
        type="password"
        value={values.password}
        name="password"
        onChange={handleOnChange}
        ref={register({ required: true, minLength: 4 })}
        error={errors.password}
      />

      <StyledInput
        placeholder="Confirmar Senha"
        type="password"
        name="confirmPassword"
        ref={register({
          required: true,
          validate: (value) => value === values.password,
        })}
        error={errors.confirmPassword}
      />

      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
