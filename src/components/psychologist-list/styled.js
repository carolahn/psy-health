import styled from 'styled-components'


const StyledPsychologistList = styled.section`
  width:50vw;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1600px) {
    width: 50vw;
  }

  @media (max-width: 1280px) {
    width: 60vw;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 1024px) {
    width: 90vw;
  }

  @media (max-width: 540px) {
    width: 80vw;
  }

  @media (max-width: 420px) {
    width: 85vw;
  }
`

export default StyledPsychologistList