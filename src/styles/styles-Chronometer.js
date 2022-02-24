import styled from 'styled-components'

const StyledTimer = styled.div`
    font-size:5em;
    margin: 100px auto;
`

const StyledTimerSmall = styled.div`
    font-size:2em;
    margin-top: 100px;
    margin-bottom: 0;   
    margin-left: calc(50vw - 40%);

    display: flex;
    flex-direction: column;
    font-size: 2.5em;
    
    @media(min-width: 768px) {
        margin-left: calc(50vw - 35%);
    }
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledTimeParent = styled.div`
   width: 100%;
    
`

export {
  StyledTimer,
  StyledTimerSmall,
  StyledContent,
  StyledTimeParent
}
