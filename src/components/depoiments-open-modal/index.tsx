import React, { useState } from "react";

// import {DepoimentsOpenModalContainer} from './styled';
import DepoimentsFormContainer from "../../containers/depoiments-form";
import Button from "../button";

interface OpenModalProps {
  id: number;
  name: string;
  appointId: number;
}

const DepoimentsOpenModal = ({ id, name, appointId }: OpenModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button
        width="120px"
        height="40px"
        fontSize="18px"
        onClick={() => setModalVisible(true)}
        buttonName="Avaliar"
      />
      <DepoimentsFormContainer
        showModal={{ modalVisible, setModalVisible }}
        psicId={id}
        psicName={name}
        appointmentId={appointId}
      />
    </>
  );
};

export default DepoimentsOpenModal;
