import styled from "styled-components";

export const ContainerCards = styled.div`
  background: #fbfbfb;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleContainerAppointments = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #053559;
  font-weight: 600;
  font-size: 28px;
  margin: 40px 0;
  width: 1050px;

  @media (max-width: 1270px) {
    font-size: 22px;
    width: 80vw;
  }

  @media (max-width: 710px) {
    font-size: 18px;
  }
`;

export const TitleContainerHistory = styled.div`
  display: flex;
  color: #053559;
  font-weight: 600;
  font-size: 28px;
  margin: 20px 0 40px 0;
  width: 1050px;

  @media (max-width: 1270px) {
    font-size: 22px;
    width: 80vw;
  }

  @media (max-width: 710px) {
    font-size: 18px;
  }
`;
