import { Tooltip } from "antd";
import React from "react";

import { StyledInput, StyledForm } from "../../styles";
import Button from "../button";
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
            validate: {
              pattern: (value: string) => {
                handleMaskOnChange(value, "name");
                return (
                  (value.match(
                    /^[A-ZÀ-Ý][A-Za-zÀ-Ýà-ÿ]* [A-Za-zÀ-Ýà-ÿ]+(([',. -][A-Za-zÀ-Ýà-ÿ ])?[A-Za-zÀ-Ýà-ÿ]*)*$/i
                  ) &&
                    value !== "") ||
                  "Informe seu nome e sobrenome!"
                );
              },
            },
          })}
          style={{
            border: `2px solid ${!errors.name ? "#70a3ef" : "#f88264"}`,
          }}
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
            validate: {
              required: (value: string) => {
                handleMaskOnChange(value, "email");
                return value !== "" || "Informe seu email!";
              },
              pattern: (value: string) => {
                handleMaskOnChange(value, "email");
                return (
                  value.match(
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
                  ) || "Formato do email está errado! Formato certo: example@example.com"
                );
              },
            },
          })}
          style={{
            border: `2px solid ${!errors.email ? "#70a3ef" : "#f88264"}`,
          }}
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
            validate: {
              required: (value: string) => value !== "" || "Confirme seu email!",
              pattern: (value: string) => value === values.email || "Emails não batem",
            },
          })}
          style={{
            border: `2px solid ${!errors.confirmEmail ? "#70a3ef" : "#f88264"}`,
          }}
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
            validate: (value: string) => {
              handleMaskOnChange(value, "phone");
              return (
                value.match(/\(\d{2}\) 9\d{4}-\d{4}/i) ||
                value === "" ||
                "Número de telefone não aceito!"
              );
            },
          })}
          style={{
            border: `2px solid ${!errors.phone ? "#70a3ef" : "#f88264"}`,
          }}
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
            validate: {
              required: (value: string) => {
                handleMaskOnChange(value, "cpf_cnpj");
                return value !== "" || "Informe seu CPF/CNPJ!";
              },
              pattern: (value: string) => {
                handleMaskOnChange(value, "cpf_cnpj");
                return (
                  value.match(
                    /(^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$)|(^\d{2}\.?\d{3}\.?\d{3}\/\d{4}-?\d{2}$)/i
                  ) || "CPF/CNPJ não aceito!"
                );
              },
            },
          })}
          style={{
            border: `2px solid ${!errors.cpf_cnpj ? "#70a3ef" : "#f88264"}`,
          }}
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
              validate: {
                required: (value: string) => {
                  handleMaskOnChange(value, "crp");
                  return value !== "" || "Favor informar CRP!";
                },
                pattern: (value: string) => {
                  handleMaskOnChange(value, "crp");
                  return value.match(/\d{2}\/\d{5}/i) || "Informe um CRP válido!";
                },
              },
            })}
            style={{
              border: `2px solid ${!errors.crp ? "#70a3ef" : "#f88264"}`,
            }}
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
            validate: {
              required: (value: string) => {
                handleMaskOnChange(value, "password");
                return value !== "" || "Crie sua senha!";
              },
              pattern: (value: string) => {
                handleMaskOnChange(value, "password");
                return value.length > 3 || "Deve conter no mínimo quatro caracteres!";
              },
            },
          })}
          style={{
            border: `2px solid ${!errors.password ? "#70a3ef" : "#f88264"}`,
          }}
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
            validate: {
              required: (value: string) => value !== "" || "Confirme sua senha!",
              pattern: (value: string) => value === values.password || "Senhas não batem!",
            },
          })}
          style={{
            border: `2px solid ${!errors.confirmPassword ? "#70a3ef" : "#f88264"}`,
          }}
        />
      </Tooltip>

      <div style={{ margin: "10px" }}>
        <Button onClick={() => {}} width="150px" height="40px" buttonName="Register" />
      </div>
    </StyledForm>
  );
};

export default RegisterForm;
