import React, { useState } from "react";

// import {DepoimentsOpenModalContainer} from './styled';
import DepoimentsFormContainer from "../../containers/depoiments-form";

const DepoimentsOpenModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <button onClick={() => setModalVisible(true)}>Display a modal dialog</button>
      <DepoimentsFormContainer
        showModal={{ modalVisible, setModalVisible }}
        psicId={2}
        psicName="João Cleber"
      />
    </>
  );
};

export default DepoimentsOpenModal;
