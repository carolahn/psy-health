import React from "react";
import { useWindowSize } from "../../hooks";
import CardComment from "../../components/card-comment";
import { StyledDivContainer, StyledCarousel, StyledInnerCarousel } from "./styled";

const DepoimentsBanner = ({ listAllComments }) => {
  const [width] = useWindowSize();
  const listComments = [];

  if (width >= 950) {
    while (listComments.length < 9) {
      const random = Math.round(Math.random() * (listAllComments.length - 1));
      listComments.push(listAllComments[random]);
    }

    return(
      <StyledDivContainer>
        <h1>Depoimentos</h1>
        <StyledCarousel>
          {
            listComments.map((e, i, arr) => {
              if (i % 3 === 0 && i <= arr.length - (i % 3))
              return (
                <StyledInnerCarousel key={i}>
                {
                  arr[i] && (
                    <CardComment
                      image={arr[i].image}
                      name={arr[i].name}
                      coment={arr[i].coment}
                      grading={arr[i].grading}
                    />
                  )
                }
                {
                  arr[i + 1] && (
                    <CardComment
                      image={arr[i + 1].image}
                      name={arr[i + 1].name}
                      coment={arr[i + 1].coment}
                      grading={arr[i + 1].grading}
                    />
                  )
                }
                {
                  arr[i + 2] && (
                    <CardComment
                      image={arr[i + 2].image}
                      name={arr[i + 2].name}
                      coment={arr[i + 2].coment}
                      grading={arr[i + 2].grading}
                    />
                  )
                }
                </StyledInnerCarousel>
              );
            })
          }
        </StyledCarousel>
      </StyledDivContainer>
    );
  } else {
    while (listComments.length < 3) { 
      const random = Math.round(Math.random() * (listAllComments.length - 1));
      listComments.push(listAllComments[random]);
    }

    return(
      <StyledDivContainer>
        <h1>Depoimentos</h1>
        <StyledCarousel>
          {
            listComments.map((e, key) => {
              return(
                <StyledInnerCarousel key={key}>
                  <CardComment
                    image={e.image}
                    name={e.name}
                    coment={e.coment}
                    grading={e.grading}
                  />
                </StyledInnerCarousel>
              )
            })
          }
        </StyledCarousel>
      </StyledDivContainer>
    );
  }
};

export default DepoimentsBanner;
