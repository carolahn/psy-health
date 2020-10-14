import { Button } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #f3f3f3;
  width: 100vw;
  height: 750px;
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: center;

  @media (max-width: 800px) {
    height: 420px;
  }
`;

export const ContainerBanner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 400px;
  height: 750px;
  padding: 0 10px;

  @media (max-width: 800px) {
    padding: 0;
    height: 200px;
    justify-content: center;
  }
`;

export const BannerImg = styled.img`
  width: 400px;

  @media (max-width: 800px) {
    width: 200px;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 400px;
  height: 750px;
  padding: 0 10px;

  @media (max-width: 800px) {
    padding: 0;
    height: 200px;
    justify-content: center;
  }
`;

export const Div = styled.div`
  font-size: 18px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 100px;

  @media (max-width: 800px) {
    font-size: 16px;
    height: 230px;
    padding-top: 10px;
    padding-bottom: 0;
  }
`;

export const ButtonSearch = styled(Button)`
  font-size: 18px;
  font-weight: 600;
  background-color: #053559;
  color: white;
  border-radius: 7px;
  height: 60px;
  width: 200px;

  @media (max-width: 800px) {
    font-size: 16px;
    width: 180px;
    height: 50px;
  }
`;

export const TitleSearch = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #6e6e6e;

  @media (max-width: 800px) {
    font-size: 17px;
  }
`;
