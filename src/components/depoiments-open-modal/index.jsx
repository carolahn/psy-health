import React, { useState } from "react";

// import {DepoimentsOpenModalContainer} from './styled';
import DepoimentsFormContainer from "../../containers/depoiments-form";
import Button from "../button";

const DepoimentsOpenModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setModalVisible(true)} title="Avaliar" />
      <DepoimentsFormContainer
        showModal={{ modalVisible, setModalVisible }}
        psicId={2}
        psicName="João Cleber"
      />
    </>
  );
};

export default DepoimentsOpenModal;
