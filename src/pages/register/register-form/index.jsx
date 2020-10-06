import { Tooltip } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from "../../../redux/actions/login/action";
import { cpfCnpjMask, phoneMask, crpMask } from "./masks";
import { StyledInput, StyledButton, StyledForm } from "./styled";

const RegisterForm = ({ isPsic = false }) => {
  const history = useHistory();
  const [values, setValues] = useState({});
  const { register, handleSubmit, errors, setError } = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    axios
      .post("https://psy-health-api.herokuapp.com/register", { ...values, isPsic })
      .then(() => {
        dispatch(login(values.email, values.password, history));
      })
      .catch(({ response: { status } }) => {
        if (status === 400) {
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
              message: "Formato do email está errado! Formato certo: example@example.com",
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

      <Tooltip title={errors.phone && errors.phone.message} placement={isPsic ? "left" : "right"}>
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
      </Tooltip>

      <Tooltip
        title={errors.cpf_cnpj && errors.cpf_cnpj.message}
        placement={isPsic ? "left" : "right"}>
        <StyledInput
          maxLength={18}
          placeholder="CPF/CNPJ"
          value={values.cpf_cnpj}
          name="cpf_cnpj"
          onChange={(e) => handleMaskOnChange(cpfCnpjMask(e.target.value), e.target.name)}
          ref={register({
            required: "Informe seu CPF/CNPJ!",
            pattern: {
              vlue: /(^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$)|(^\d{2}\.?\d{3}\.?\d{3}\/\d{4}-?\d{2}$)/i,
              message: "CPF/CNPJ não aceito!",
            },
          })}
          error={errors.cpf_cnpj}
        />
      </Tooltip>

      {isPsic && (
        <Tooltip title={errors.crp && errors.crp.message} placement={isPsic ? "left" : "right"}>
          <StyledInput
            maxLength={8}
            placeholder="CRP"
            value={values.crp}
            name="crp"
            onChange={(e) => handleMaskOnChange(crpMask(e.target.value), e.target.name)}
            ref={register({
              required: "Favor informar CRP!",
              pattern: { value: /\d{2}\/\d{5}/i, message: "Informe um CRP válido!" },
            })}
            error={errors.crp}
          />
        </Tooltip>
      )}

      <Tooltip
        title={errors.password && errors.password.message}
        placement={isPsic ? "left" : "right"}>
        <StyledInput
          placeholder="Senha"
          type="password"
          value={values.password}
          name="password"
          onChange={handleOnChange}
          ref={register({
            required: "Crie sua senha!",
            minLength: { value: 4, message: "Deve conter no mínimo quatro caracteres!" },
          })}
          error={errors.password}
        />
      </Tooltip>

      <Tooltip
        title={errors.confirmPassword && errors.confirmPassword.message}
        placement={isPsic ? "left" : "right"}>
        <StyledInput
          placeholder="Confirmar Senha"
          type="password"
          name="confirmPassword"
          ref={register({
            required: "Confirme sua senha!",
            validate: (value) => value === values.password || "Senhas não batem!",
          })}
          error={errors.confirmPassword}
        />
      </Tooltip>

      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
