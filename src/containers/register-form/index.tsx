import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import RegisterForm from "../../components/register-form";
import { login } from "../../redux/actions/login/action";

interface RegisterFormProps {
  isPsic?: boolean;
}

interface Values {
  name?: string;
  email?: string;
  password?: string;
  cpf_cnpj?: string;
  phone?: string;
  crp?: string;
}

interface OnChange {
  target: {
    name: string;
    value: string;
  };
}

const RegisterFormContainer = ({ isPsic = false }: RegisterFormProps) => {
  const [values, setValues] = useState<Values>({});
  const { register, handleSubmit, errors, setError } = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    axios
      .post("https://psy-health-api.herokuapp.com/register", { ...values, isPsic })
      .then(() => {
        dispatch(login(values.email, values.password));
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

  const handleOnChange = ({ target: { name, value } }: OnChange) =>
    setValues({ ...values, [name]: value });

  const handleMaskOnChange = (value: string, key: string) => setValues({ ...values, [key]: value });

  return (
    <RegisterForm
      isPsic={isPsic}
      values={values}
      onSubmit={onSubmit}
      formErrors={{ register, handleSubmit, errors }}
      handleOnChange={handleOnChange}
      handleMaskOnChange={handleMaskOnChange}
    />
  );
};

export default RegisterFormContainer;
