import { notification } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import InitialImage from "../../assets/imgs/undraw_male_avatar_323b.svg";
import RegisterForm from "../../components/register-form";
import { login } from "../../redux/actions/login/action";

interface RegisterFormProps {
  is_psic?: boolean;
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

const openNotificationWithIcon = (type: string) => {
  switch (type) {
    case "error":
      notification["error"]({
        message: "Alguma coisa deu errado!",
        description: "Tente novamente. Se o problema continuar contate o suporte!",
      });
      break;
    default:
      notification["success"]({
        message: "Cadastro completo!",
        description: "Redirecionando para página logada!",
      });
      break;
  }
};

const RegisterFormContainer = ({ is_psic = false }: RegisterFormProps) => {
  const [values, setValues] = useState<Values>({});
  const { register, handleSubmit, errors, setError } = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    const data = {
      ...values,
      is_psic,
      image: InitialImage,
      price: 0,
    };

    axios
      .post("https://psy-health-api.herokuapp.com/register", { ...data })
      .then(() => {
        dispatch(login(values.email, values.password));
        openNotificationWithIcon("success");
      })
      .catch(({ response: { status } }) => {
        openNotificationWithIcon("error");
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
      isPsic={is_psic}
      values={values}
      onSubmit={onSubmit}
      formErrors={{ register, handleSubmit, errors }}
      handleOnChange={handleOnChange}
      handleMaskOnChange={handleMaskOnChange}
    />
  );
};

export default RegisterFormContainer;
