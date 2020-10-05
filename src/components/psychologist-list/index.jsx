import React from 'react'
import StyledPsychologistList from './styled'

const PsychologistList = ({ psychologists }) => {
  return(
    <StyledPsychologistList>
      {psychologists.map(psychologist => <div>psicologo</div>)}
    </StyledPsychologistList>
  )
}

export default PsychologistList