import React from 'react';
import { Modal, Button, Row, Col } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

const ModalSocialNetwork = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                Redes Sociais
            </Button>
            <StyledModal
                title="Redes Sociais"
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={
                    <button type="button" class="ant-btn" onClick={() => setVisible(false)}>
                        <span>Fechar</span>
                    </button>
                }
            >
                <Row style={{ border: '1px solid blue' }}>
                    <StyledCol xs={8} sm={8} md={8} lg={8} xl={8} style={{ border: '1px solid red' }}>
                        <h4 style={{ border: '1px solid black' }}>Augusto Pietroski</h4>
                    </StyledCol>
                    <StyledCol xs={8} sm={8} md={8} lg={8} xl={8}>
                        <h4>Carolina Takasaki Ahn</h4>
                    </StyledCol>
                    <StyledCol xs={8} sm={8} md={8} lg={8} xl={8}>
                        <h4>Cassiano Bitencourt da Silva Doederlein</h4>
                    </StyledCol>
                    <StyledCol xs={8} sm={8} md={8} lg={8} xl={8}>
                        <h4>Eduardo Magno Gonçalves de Oliveira</h4>
                    </StyledCol>
                    <StyledCol xs={8} sm={8} md={8} lg={8} xl={8}>
                        <h4>Alex Miguel</h4>
                    </StyledCol>
                    <StyledCol xs={8} sm={8} md={8} lg={8} xl={8}>
                        <h4>Willian Brusch</h4>
                    </StyledCol>
                </Row>
            </StyledModal>
        </>
    );
}

export default ModalSocialNetwork;


const StyledModal = styled(Modal)`
    #rcDialogTitle1{
       font-weight: bold; 
    }
`;

const StyledCol = styled(Col)`
    text-align: center;
`;

