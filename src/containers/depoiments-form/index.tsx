import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import DepoimentsForm from "../../components/depoiments-form";
import { StyledModal, StyledH1 } from "./styled";

interface DepoimentsFormProps {
  showModal: {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  };
  psicId: number;
  psicName: string;
  appointmentId: number;
}

interface Values {
  depoiment?: string;
  grading?: number;
}

interface OnClickModal {
  target: EventTarget | any;
  currentTarget: EventTarget & HTMLDivElement;
}

const DepoimentsFormContainer = ({
  showModal: { modalVisible, setModalVisible },
  psicId,
  psicName,
  appointmentId,
}: DepoimentsFormProps) => {
  const { register, handleSubmit, errors, setError, clearErrors } = useForm();
  const [values, setValues] = useState<Values>({});
  const token = useSelector((state: any) => state.login.token);
  const id = useSelector((state: any) => state.login.user.id);

  useEffect(() => {
    document.body.style.overflow = modalVisible ? "hidden" : "unset";
  });

  const onSubmit = () => {
    axios({
      method: "post",
      url: `https://psy-health-api.herokuapp.com/depoiments`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        appointmentId,
        coment: values.depoiment,
        grading: values.grading,
        userId: id,
        psiId: psicId,
      },
    })
      .then(() => {
        setModalVisible(false);
        setValues({});
      })
      .catch(({ response: { status } }) => {
        if (status >= 500) {
          setError("server", {
            type: "manual",
            message: "Problema com o servidor! Favor tentar novamente mais tarde!",
          });
          return;
        }
        setError("server", {
          type: "manual",
          message: "Algo deu errado! Favor tentar novamente mais tarde!",
        });
      });
  };

  return (
    <StyledModal
      onClick={({ target, currentTarget }: OnClickModal) => {
        if (target.className === currentTarget.className) {
          setValues({});
          clearErrors();
          setModalVisible(false);
        }
      }}
      show={modalVisible}>
      <div className="container">
        <StyledH1>Depoimentos</StyledH1>
        <DepoimentsForm
          psicName={psicName}
          formValues={{ values, setValues }}
          onSubmit={handleSubmit(onSubmit)}
          formErrors={{ register, errors, setError, clearErrors }}
        />
      </div>
    </StyledModal>
  );
};

export default DepoimentsFormContainer;
