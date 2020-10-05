import React from 'react'
import StyledPsychologistList from './styled'

const PsychologistList = ({ psychologists }) => {
  
  return(
    <StyledPsychologistList>
      {psychologists.map((psychologist, index) => <div key={index}>{psychologist.name}</div>)}
    </StyledPsychologistList>
  )
}

export default PsychologistList