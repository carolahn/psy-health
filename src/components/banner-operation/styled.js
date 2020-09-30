import { BiSearchAlt, BiCalendar, BiVideo } from "react-icons/bi";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #70a3ef;
  width: 100vw;
  height: 400px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    height: 600px;
  }

  @media (max-width: 800px) {
    height: 680px;
  }
`;

export const InfoTitleDiv = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 35px;

  @media (max-width: 800px) {
    padding-top: 20px;
    height: 60px;
  }
`;

export const TitleInfo = styled.h1`
  color: #fff;
  font-size: 34px;
  font-weight: 600;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const InfoContainerDiv = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const InfoDiv = styled.div`
  padding: 50px;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    padding: 40px;
    width: 350px;
    height: 200px;
  }
`;

export const TitleInfoDiv = styled.h2`
  color: #fff;
  text-align: center;
  font-weight: 600;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
export const SearchIcon = styled(BiSearchAlt)`
  color: #fff;
  padding-top: 30px;
  width: 120px;
  height: 120px;

  @media (max-width: 800px) {
    padding-top: 0;
    width: 90px;
    height: 90px;
  }
`;

export const CalendarIcon = styled(BiCalendar)`
  color: #fff;
  padding-top: 30px;
  width: 120px;
  height: 120px;

  @media (max-width: 800px) {
    padding-top: 0;
    width: 90px;
    height: 90px;
  }
`;

export const VideoIcon = styled(BiVideo)`
  color: #fff;
  padding-top: 30px;
  width: 120px;
  height: 120px;

  @media (max-width: 800px) {
    padding-top: 0;
    width: 90px;
    height: 90px;
  }
`;
