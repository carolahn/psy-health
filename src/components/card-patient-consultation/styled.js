import styled from "styled-components";

export const CardContainer = styled.div`
  background: #f3f3f3;
  border-radius: 10px;
  border: 3px solid #70a3ef;
  height: 120px;
  width: 1050px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1270px) {
    width: 80vw;
    height: 210px;
  }

  @media (max-width: 710px) {
    width: 90vw;
    height: 210px;
  }
`;

export const ImgAndNameCardCotainer = styled.div`
  display: flex;
  width: 450px;
  height: 114px;

  @media (max-width: 710px) {
    width: 300px;
    height: 90px;
  }
`;

export const ImgDivCotainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 114px;

  @media (max-width: 710px) {
    width: 100px;
    height: 80px;
  }
`;

export const PhotoPsychologist = styled.img`
  border-radius: 50%;
  border: 3px solid #70a3ef;
  width: 100px;
  height: 100px;

  @media (max-width: 710px) {
    width: 70px;
    height: 70px;
  }
`;

export const NameDivCotainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  width: 300px;
  height: 114px;

  @media (max-width: 710px) {
    padding-top: 5px;
    width: 200px;
    height: 90px;
  }
`;

export const CrpDiv = styled.div`
  color: #70a3ef;
  font-size: 12px;
`;

export const TitleForNameDateScheduleValueAndAvaliation = styled.div`
  padding-bottom: 10px;
  color: #585858;
  font-weight: 600;
  font-size: 16px;

  @media (max-width: 710px) {
    padding-bottom: 5px;
    font-size: 14px;
  }
`;

export const DateScheduleAndValueContainer = styled.div`
  display: flex;
  padding-top: 15px;
  width: 410px;
  height: 114px;

  @media (max-width: 710px) {
    padding-top: 0px;
    width: 250px;
    height: 50px;
  }
`;

export const DateScheduleAndValue = styled.div`
  text-align: center;
  width: 140px;

  @media (max-width: 710px) {
    width: 110px;
    height: 50px;
  }
`;

export const TextStyle = styled.div`
  text-align: center;
  color: #6e6e6e;
  font-size: 14px;

  @media (max-width: 710px) {
    font-size: 12px;
  }
`;

export const AvaliationOrButton = styled.div`
  text-align: center;
  padding-top: 15px;
  width: 150px;
  height: 114px;

  @media (max-width: 710px) {
    padding: 0px;
    width: 150px;
    height: 50px;
  }
`;
