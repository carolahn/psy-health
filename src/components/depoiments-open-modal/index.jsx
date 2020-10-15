import React, { useState } from "react";

// import {DepoimentsOpenModalContainer} from './styled';
import DepoimentsFormContainer from "../../containers/depoiments-form";
import Button from "../button";

const DepoimentsOpenModal = ({ id, name }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setModalVisible(true)} buttonName="Avaliar" />
      <DepoimentsFormContainer
        showModal={{ modalVisible, setModalVisible }}
        psicId={id}
        psicName={name}
      />
    </>
  );
};

export default DepoimentsOpenModal;
