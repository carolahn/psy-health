import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import RegisterForm from "../../components/register-form";
import { login } from "../../redux/actions/login/action";

const RegisterFormContainer = ({ isPsic = false }) => {
  const [values, setValues] = useState({});
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

  const handleOnChange = ({ target }) => setValues({ ...values, [target.name]: target.value });

  const handleMaskOnChange = (value, key) => setValues({ ...values, [key]: value });

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
