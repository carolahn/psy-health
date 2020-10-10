import { Tooltip } from "antd";
import React from "react";

import { StyledInput, StyledButton, StyledForm } from "../../styles";
import { cpfCnpjMask, phoneMask, crpMask } from "./masks";
import { RegisterFormProps } from "./types";

const RegisterForm = ({
  isPsic,
  values,
  onSubmit,
  formErrors: { register, handleSubmit, errors },
  handleOnChange,
  handleMaskOnChange,
}: RegisterFormProps) => {
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
            validate: (value: string) => value === values.email || "Emails não batem",
          })}
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
              value: /(^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$)|(^\d{2}\.?\d{3}\.?\d{3}\/\d{4}-?\d{2}$)/i,
              message: "CPF/CNPJ não aceito!",
            },
          })}
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
            validate: (value: string) => value === values.password || "Senhas não batem!",
          })}
        />
      </Tooltip>

      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
