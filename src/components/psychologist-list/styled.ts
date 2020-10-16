import styled from 'styled-components'


const StyledPsychologistList = styled.section`
  width:70vw;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media (max-width: 1700px) {
    width: 80vw;
  }
 
  @media (max-width: 1450px) {
    width: 90vw;
  }

  @media (max-width: 1300px) {
    width: 100vw;
  
  }

  @media (max-width: 540px) {
    width: 80vw;
  }

  @media (max-width: 420px) {
    width: 85vw;
  }
`

export default StyledPsychologistList